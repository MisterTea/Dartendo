part of dartendo;

class NES {
  AppletUI gui;
  late CPU cpu;
  late PPU ppu;
  late PAPU papu;

  late Memory cpuMem;
  late Memory ppuMem;
  late Memory sprMem;

  MemoryMapper? memMapper;
  PaletteTable palTable = PaletteTable();
  ROM? rom;
  int cc = 0;
  bool isRunningFlag = false;
  List<int>? romBytes;

  // Creates the NES system.
  NES(this.gui) {
    Globals.nes = this;

    // Create memory:
    cpuMem = Memory(this, 0x10000); // Main memory (internal to CPU)
    ppuMem = Memory(this, 0x8000); // VRAM memory (internal to PPU)
    sprMem = Memory(this, 0x100); // Sprite RAM  (internal to PPU)

    // Create system units:
    cpu = CPU(this);
    ppu = PPU(this);
    papu = PAPU(this);

    print("Nes.constructor(): Hi.");

    // Load NTSC palette:
    palTable.loadNTSCPalette();

    // Initialize units:
    cpu.init();
    ppu.init();

    // Init sound registers:
    for (int i = 0; i < 0x14; i++) {
      if (i == 0x10)
        papu.writeReg(0x4010, 0x10);
      else
        papu.writeReg(0x4000 + i, 0);
    }

    // Clear CPU memory:
    clearCPUMemory();
  }

  void startAudio() {
    papu.createWebAudio();
  }

  bool stateLoad(MemByteBuffer buf) {
    bool continueEmulation = false;
    bool success;

    // Pause emulation:
    if (cpu.isRunning()) {
      continueEmulation = true;
      stopEmulation();
    }

    // Check version:
    if (buf.readByte() == 1) {
      // Let units load their state from the buffer:
      cpuMem.stateLoad(buf);
      ppuMem.stateLoad(buf);
      sprMem.stateLoad(buf);
      cpu.stateLoad(buf);
      memMapper!.stateLoad(buf);
      ppu.stateLoad(buf);
      success = true;
    } else {
      //System.out.println("State file has wrong format. version="+buf.readByte(0));
      success = false;
    }

    // Continue emulation:
    if (continueEmulation) startEmulation();

    return success;
  }

  void stateSave(MemByteBuffer buf) {
    bool continueEmulation = isRunning();
    stopEmulation();

    // Version:
    buf.putByte(1);

    // Let units save their state:
    cpuMem.stateSave(buf);
    ppuMem.stateSave(buf);
    sprMem.stateSave(buf);
    cpu.stateSave(buf);
    memMapper!.stateSave(buf);
    ppu.stateSave(buf);

    // Continue emulation:
    if (continueEmulation) startEmulation();
  }

  bool isRunning() => isRunningFlag;

  void startEmulation() {
    print('NES.startEmulation');
    if (cpu.isRunning()) {
      cpu.endExecution();
      isRunningFlag = false;
    }

    papu.reset();

    if (rom != null && rom!.isValid() && !cpu.isRunning()) {
      cpu.beginExecution();
      isRunningFlag = true;
    }
  }

  void stopEmulation() {
    if (cpu.isRunning()) {
      cpu.endExecution();
      isRunningFlag = false;
    }
  }

  void reloadRom() {
    if (romBytes != null) loadRom(romBytes!);
  }

  void clearCPUMemory() {
    int flushval = Globals.memoryFlushValue;
    for (int i = 0; i < 0x2000; ++i) cpuMem.mem[i] = flushval;
    for (int p = 0; p < 4; ++p) {
      int i = p * 0x800;
      cpuMem.mem[i + 0x008] = 0xF7;
      cpuMem.mem[i + 0x009] = 0xEF;
      cpuMem.mem[i + 0x00A] = 0xDF;
      cpuMem.mem[i + 0x00F] = 0xBF;
    }
  }

  void setGameGenieState(bool enable) {
    if (memMapper != null) memMapper!.setGameGenieState(enable);
  }

  CPU getCpu() => cpu;
  PPU getPpu() => ppu;
  PAPU getPapu() => papu;
  Memory getCpuMemory() => cpuMem;
  Memory getPpuMemory() => ppuMem;
  Memory getSprMemory() => sprMem;

  // Returns the currently loaded ROM.
  ROM getRom() => rom!;

  AppletUI getGui() => gui;
  MemoryMapper getMemoryMapper() => memMapper!;

  // Loads a ROM file into the CPU and PPU.
  // The ROM file is validated first.
  bool loadRom(List<int> bytes) {
    //       print('NES.loadRom( file = $file ): begins.');

    // Can't load ROM while still running.
    if (isRunningFlag) stopEmulation();

    {
      // Load ROM file:
      rom = ROM(this);
      rom!.load(bytes);
      if (rom!.isValid()) {
        // The CPU will load the ROM into the CPU and PPU memory.
        reset();

        memMapper = rom!.createMapper(this);
        cpu.setMapper(memMapper!);
        memMapper!.loadROM(rom!);
        ppu.setMirroring(rom!.getMirroringType());

        romBytes = bytes;
      }
      return rom!.isValid();
    }
  }

  // Resets the system.
  void reset() {
    if (rom != null) rom!.closeRom();
    if (memMapper != null) memMapper!.reset();

    cpuMem.reset();
    ppuMem.reset();
    sprMem.reset();
    clearCPUMemory();

    cpu.reset();
    cpu.init();
    ppu.reset();
    palTable.reset();
    papu.reset();

    KbInputHandler? joy1 = gui.getJoy1();
    if (joy1 != null) {
      joy1.reset();
    }
  }

  // Enable or disable sound playback.
  void enableSound(bool enable) {
    bool wasRunning = isRunning();
    if (wasRunning) {
      stopEmulation();
    }

    Globals.enableSound = enable;
    //System.out.println("** SOUND ENABLE = "+enable+" **");

    if (wasRunning) startEmulation();
  }

  void setFramerate(int rate) {
    Globals.preferredFrameRate = rate;
    Globals.frameTime = (1000000 / rate).toInt();
    papu.setSampleRate(papu.getSampleRate(), false);
  }

  void destroy() {
    if (cpu != null) {
      cpu.destroy();
    }
    if (ppu != null) {
      ppu.destroy();
    }
    if (papu != null) {
      papu.destroy();
    }
    if (cpuMem != null) {
      cpuMem.destroy();
    }
    if (ppuMem != null) {
      ppuMem.destroy();
    }
    if (sprMem != null) {
      sprMem.destroy();
    }
    if (memMapper != null) {
      memMapper!.destroy();
    }
    if (rom != null) {
      rom!.destroy();
    }
  }
}
