part of dartendo;

class PAPU {
  NES nes;
  late Controller controller;
  late Memory cpuMem;
  WebAudio? audio;

  late ChannelSquare square1;
  late ChannelSquare square2;
  late ChannelTriangle triangle;
  late ChannelNoise noise;
  late ChannelDM dmc;

  final List<int> lengthLookup = const [
    0x0A,
    0xFE,
    0x14,
    0x02,
    0x28,
    0x04,
    0x50,
    0x06,
    0xA0,
    0x08,
    0x3C,
    0x0A,
    0x0E,
    0x0C,
    0x1A,
    0x0E,
    0x0C,
    0x10,
    0x18,
    0x12,
    0x30,
    0x14,
    0x60,
    0x16,
    0xC0,
    0x18,
    0x48,
    0x1A,
    0x10,
    0x1C,
    0x20,
    0x1E
  ];
  final List<int> dmcFreqLookup = const [
    0xD60,
    0xBE0,
    0xAA0,
    0xA00,
    0x8F0,
    0x7F0,
    0x710,
    0x6B0,
    0x5F0,
    0x500,
    0x470,
    0x400,
    0x350,
    0x2A0,
    0x240,
    0x1B0
  ];
  final List<int> noiseWavelengthLookup = const [
    0x004,
    0x008,
    0x010,
    0x020,
    0x040,
    0x060,
    0x080,
    0x0A0,
    0x0CA,
    0x0FE,
    0x17C,
    0x1FC,
    0x2FA,
    0x3F8,
    0x7F2,
    0xFE4
  ];

  late List<int> square_table;
  late List<int> tnd_table;
  late List<double> sampleBufferL;
  late List<double> sampleBufferR;

  int frameIrqCounter = 0;
  int frameIrqCounterMax = 4;
  int initCounter = 2048;
  int channelEnableValue = 0;

  final int bufferSize = 2048;
  int bufferIndex = 0;
  int sampleRate = 44100;

  bool frameIrqEnabled = false;
  bool frameIrqActive = false;
  bool frameClockNow = false;

  bool startedPlaying = false;
  bool recordOutput = false;
  bool initingHardware = false;

  bool userEnableSquare1 = true;
  bool userEnableSquare2 = true;
  bool userEnableTriangle = true;
  bool userEnableNoise = true;
  bool userEnableDmc = true;

  int masterFrameCounter = 0;
  int derivedFrameCounter = 0;
  int countSequence = 0;
  int sampleTimer = 0;
  int frameTime = 0;
  int sampleTimerMax = 0;
  int sampleCount = 0;
  int triValue = 0;
  int smpSquare1 = 0, smpSquare2 = 0, smpTriangle = 0, smpNoise = 0, smpDmc = 0;
  int accCount = 0;

  // DC removal vars:
  int prevSampleL = 0, prevSampleR = 0;
  int smpAccumL = 0, smpAccumR = 0;

  // DAC range:
  int dacRange = 0;
  int dcValue = 0;

  // Master volume:
  int masterVolume = 0;

  // Panning:
  List<int> panning = [80, 170, 100, 150, 128];

  // Stereo positioning:
  int stereoPosLSquare1 = 0;
  int stereoPosLSquare2 = 0;
  int stereoPosLTriangle = 0;
  int stereoPosLNoise = 0;
  int stereoPosLDMC = 0;
  int stereoPosRSquare1 = 0;
  int stereoPosRSquare2 = 0;
  int stereoPosRTriangle = 0;
  int stereoPosRNoise = 0;
  int stereoPosRDMC = 0;
  int extraCycles = 0;
  int maxCycles = 0;

  int samplesAhead = 0;

  PAPU(this.nes) {
    cpuMem = nes.getCpuMemory();
    controller = nes.gui.applet;

    setSampleRate(sampleRate, false);

    sampleBufferL = List<double>.filled(bufferSize, 0.0);
    sampleBufferR = List<double>.filled(bufferSize, 0.0);
    bufferIndex = 0;
    frameIrqEnabled = false;

    square1 = ChannelSquare(this, true);
    square2 = ChannelSquare(this, false);
    triangle = ChannelTriangle(this);
    noise = ChannelNoise(this);
    dmc = ChannelDM(this);

    masterVolume = 256;
    setPanning(panning);

    initDACtables();

    frameIrqEnabled = false;
    frameIrqCounterMax = 4;

    // Init sound registers:
    for (var i = 0; i < 0x14; i++) {
      if (i == 0x10)
        this.writeReg(0x4010, 0x10);
      else
        this.writeReg(0x4000 + i, 0);
    }

    reset();
  }

  void createWebAudio() {
    audio ??= WebAudio(bufferSize);
  }

  void stateLoad(MemByteBuffer buf) {
    // not yet.
  }

  void stateSave(MemByteBuffer buf) {
    // not yet.
  }

  NES getNes() => nes;

  int readReg(int address) {
    // Read 0x4015:
    int tmp = 0;
    tmp |= (square1.getLengthStatus());
    tmp |= (square2.getLengthStatus() << 1);
    tmp |= (triangle.getLengthStatus() << 2);
    tmp |= (noise.getLengthStatus() << 3);
    tmp |= (dmc.getLengthStatus() << 4);
    tmp |= (((frameIrqActive && frameIrqEnabled) ? 1 : 0) << 6);
    tmp |= (dmc.getIrqStatus() << 7);

    frameIrqActive = false;
    dmc.irqGenerated = false;

    return tmp & 0xFFFF;
  }

  void writeReg(int address, int value) {
    if (address >= 0x4000 && address < 0x4004) {
      // Square Wave 1 Control
      square1.writeReg(address, value);
    } else if (address >= 0x4004 && address < 0x4008) {
      // Square 2 Control
      square2.writeReg(address, value);
    } else if (address >= 0x4008 && address < 0x400C) {
      // Triangle Control
      triangle.writeReg(address, value);
    } else if (address >= 0x400C && address <= 0x400F) {
      // Noise Control
      noise.writeReg(address, value);
    } else if (address >= 0x4010 && address <= 0x4013) {
      // DMC Play mode & DMA frequency
      // DMC Delta Counter
      // DMC Play code starting address
      // DMC Play code length
      dmc.writeReg(address, value);
    } else if (address == 0x4015) {
      // Channel enable
      updateChannelEnable(value);

      // Start hardware initialization
      initingHardware = (value != 0 && initCounter > 0);

      // DMC/IRQ Status
      dmc.writeReg(address, value);
    } else if (address == 0x4017) {
      // Frame counter control
      countSequence = (value >> 7) & 1;
      masterFrameCounter = 0;
      frameIrqActive = false;

      frameIrqEnabled = (((value >> 6) & 0x1) == 0);

      if (countSequence == 0) {
        // NTSC:
        frameIrqCounterMax = 4;
        derivedFrameCounter = 4;
      } else {
        // PAL:
        frameIrqCounterMax = 5;
        derivedFrameCounter = 0;
        frameCounterTick();
      }
    }
  }

  void resetCounter() {
    derivedFrameCounter = (countSequence == 0 ? 4 : 0);
  }

  // Updates channel enable status.
  // This is done on writes to the
  // channel enable register (0x4015),
  // and when the user enables/disables channels
  // in the GUI.
  void updateChannelEnable(int value) {
    channelEnableValue = value & 0xFFFF;
    ;
    square1.setEnabled(userEnableSquare1 && (value & 1) != 0);
    square2.setEnabled(userEnableSquare2 && (value & 2) != 0);
    triangle.setEnabled(userEnableTriangle && (value & 4) != 0);
    noise.setEnabled(userEnableNoise && (value & 8) != 0);
    dmc.setEnabled(userEnableDmc && (value & 16) != 0);
  }

  // Clocks the frame counter. It should be clocked at
  // twice the cpu speed, so the cycles will be
  // divided by 2 for those counters that are
  // clocked at cpu speed.
  void clockFrameCounter(int nCycles) {
    if (initCounter > 0) {
      if (initingHardware) {
        initCounter -= nCycles;
        if (initCounter <= 0) initingHardware = false;
        return;
      }
    }

    // Don't process ticks beyond next sampling:
    nCycles += extraCycles;
    maxCycles = sampleTimerMax - sampleTimer;
    final int cycleDelta = (nCycles << 10) - maxCycles;
    if (cycleDelta > 0) {
      extraCycles = (cycleDelta) >> 10;
      nCycles -= extraCycles;
    } else {
      extraCycles = 0;
    }

    // Clock DMC:
    if (dmc.isEnabled()) {
      dmc.shiftCounter -= (nCycles << 3);
      while (dmc.shiftCounter <= 0 && dmc.dmaFrequency > 0) {
        dmc.shiftCounter += dmc.dmaFrequency;
        dmc.clockDmc();
      }
    }

    // Clock Triangle channel Prog timer:
    if (triangle.progTimerMax > 0) {
      triangle.progTimerCount -= nCycles;
      while (triangle.progTimerCount <= 0) {
        triangle.progTimerCount += triangle.progTimerMax + 1;
        if (triangle.linearCounter > 0 && triangle.lengthCounter > 0) {
          ++triangle.triangleCounter;
          triangle.triangleCounter &= 0x1F;
          if (triangle.isEnabled()) {
            final int triangleCounterAbs = (triangle.triangleCounter & 0xF);
            if (triangle.triangleCounter >= 0x10)
              triangle.sampleValue = triangleCounterAbs;
            else
              triangle.sampleValue = (0xF - triangleCounterAbs);
            triangle.sampleValue <<= 4;
          }
        }
      }
    }

    // Clock Square channel 1 Prog timer:
    square1.progTimerCount -= nCycles;
    if (square1.progTimerCount <= 0) {
      square1.progTimerCount += ((square1.progTimerMax + 1) << 1);

      ++square1.squareCounter;
      square1.squareCounter &= 0x7;
      square1.updateSampleValue();
    }

    // Clock Square channel 2 Prog timer:
    square2.progTimerCount -= nCycles;
    if (square2.progTimerCount <= 0) {
      square2.progTimerCount += ((square2.progTimerMax + 1) << 1);

      ++square2.squareCounter;
      square2.squareCounter &= 0x7;
      square2.updateSampleValue();
    }

    // Clock noise channel Prog timer:
    int acc_c = nCycles;
    final int noiseCycleDelta = noise.progTimerCount - acc_c;
    if (noiseCycleDelta > 0) {
      // Do all cycles at once:
      noise.progTimerCount = noiseCycleDelta;
      noise.accCount += acc_c;
      noise.accValue += acc_c * noise.sampleValue;
    } else {
      // Slow-step:
      while ((acc_c--) > 0) {
        if (--noise.progTimerCount <= 0 && noise.progTimerMax > 0) {
          // Update noise shift register:
          noise.shiftReg = (noise.shiftReg << 1) & 0x7FFFFFFF;
          noise.tmp = ((((noise.shiftReg << (noise.randomMode == 0 ? 1 : 6)) &
                      0x7FFFFFFF) ^
                  noise.shiftReg) &
              0x8000);
          if (noise.tmp != 0) {
            // Sample value must be 0.
            noise.shiftReg |= 0x01;
            noise.randomBit = 0;
            noise.sampleValue = 0;
          } else {
            // Find sample value:
            noise.randomBit = 1;
            if (noise.isEnabled() && noise.lengthCounter > 0)
              noise.sampleValue = noise.masterVolume;
            else
              noise.sampleValue = 0;
          }
          noise.progTimerCount += noise.progTimerMax;
        }

        noise.accValue += noise.sampleValue;
        ++noise.accCount;
      }
    }

    // Frame IRQ handling:
    if (frameIrqEnabled && frameIrqActive) nes.cpu.requestIrq(CPU.IRQ_NORMAL);

    // Clock frame counter at double CPU speed:
    masterFrameCounter += (nCycles << 1);
    if (masterFrameCounter >= frameTime) {
      // 240Hz tick:
      masterFrameCounter -= frameTime;
      frameCounterTick();
    }

    // Accumulate sample value:
    accSample(nCycles);

    // Clock sample timer:
    sampleTimer += nCycles << 10;
    if (sampleTimer >= sampleTimerMax) {
      // Sample channels:
      sample();
      sampleTimer -= sampleTimerMax;
    }
  }

  void accSample(int cycles) {
    // Special treatment for triangle channel - need to interpolate.
    if (triangle.sampleCondition) {
      triValue =
          ((triangle.progTimerCount << 4) ~/ (triangle.progTimerMax + 1));
      if (triValue > 16) triValue = 16;
      if (triangle.triangleCounter >= 16) triValue = 16 - triValue;

      // Add non-interpolated sample value:
      triValue += triangle.sampleValue;
    }

    // Now sample normally:
    smpTriangle += cycles * triValue;
    smpDmc += cycles * dmc.sample;
    smpSquare1 += cycles * square1.sampleValue;
    smpSquare2 += cycles * square2.sampleValue;
    accCount += cycles;
  }

  void frameCounterTick() {
    ++derivedFrameCounter;
    if (derivedFrameCounter >= frameIrqCounterMax) derivedFrameCounter = 0;

    if (derivedFrameCounter == 1 || derivedFrameCounter == 3) {
      // Clock length & sweep:
      triangle.clockLengthCounter();
      square1.clockLengthCounter();
      square2.clockLengthCounter();
      noise.clockLengthCounter();
      square1.clockSweep();
      square2.clockSweep();
    }

    if (derivedFrameCounter >= 0 && derivedFrameCounter < 4) {
      // Clock linear & decay:
      square1.clockEnvDecay();
      square2.clockEnvDecay();
      noise.clockEnvDecay();
      triangle.clockLinearCounter();
    }

    // Enable IRQ:
    if (derivedFrameCounter == 3 && countSequence == 0) frameIrqActive = true;

    // End of 240Hz tick
  }

  // Samples the channels, mixes the output together,
  // writes to buffer and (if enabled) file.
  void sample() {
    int sq_index, tnd_index;

    if (accCount > 0) {
      smpSquare1 <<= 4;
      smpSquare1 ~/= accCount;

      smpSquare2 <<= 4;
      smpSquare2 ~/= accCount;

      smpTriangle ~/= accCount;

      smpDmc <<= 4;
      smpDmc ~/= accCount;

      accCount = 0;
    } else {
      smpSquare1 = square1.sampleValue << 4;
      smpSquare2 = square2.sampleValue << 4;
      smpTriangle = triangle.sampleValue;
      smpDmc = dmc.sample << 4;
    }

    smpNoise = ((noise.accValue << 4) ~/ noise.accCount);
    noise.accValue = smpNoise >> 4;
    noise.accCount = 1;

    // Stereo sound.

    // Left channel:
    sq_index =
        (smpSquare1 * stereoPosLSquare1 + smpSquare2 * stereoPosLSquare2) >> 8;
    tnd_index = (3 * smpTriangle * stereoPosLTriangle +
            (smpNoise << 1) * stereoPosLNoise +
            smpDmc * stereoPosLDMC) >>
        8;
    if (sq_index >= square_table.length) sq_index = square_table.length - 1;
    if (tnd_index >= tnd_table.length) tnd_index = tnd_table.length - 1;
    int sampleValueL = square_table[sq_index] + tnd_table[tnd_index] - dcValue;

    // Right channel:
    sq_index =
        (smpSquare1 * stereoPosRSquare1 + smpSquare2 * stereoPosRSquare2) >> 8;
    tnd_index = (3 * smpTriangle * stereoPosRTriangle +
            (smpNoise << 1) * stereoPosRNoise +
            smpDmc * stereoPosRDMC) >>
        8;
    if (sq_index >= square_table.length) sq_index = square_table.length - 1;
    if (tnd_index >= tnd_table.length) tnd_index = tnd_table.length - 1;
    int sampleValueR = square_table[sq_index] + tnd_table[tnd_index] - dcValue;

    // Remove DC from left channel:
    int smpDiffL = sampleValueL - prevSampleL;
    prevSampleL += smpDiffL;
    smpAccumL += smpDiffL - Util.lsr(smpAccumL, 10);
    sampleValueL = smpAccumL;

    // Remove DC from right channel:
    int smpDiffR = sampleValueR - prevSampleR;
    prevSampleR += smpDiffR;
    smpAccumR += smpDiffR - Util.lsr(smpAccumR, 10);
    sampleValueR = smpAccumR;

    // Write:
    sampleBufferL[bufferIndex] = (sampleValueL / 65536.0);
    sampleBufferR[bufferIndex] = (sampleValueR / 65536.0);
    ++bufferIndex;
    ++samplesAhead;

    // Write the buffer out if full
    //print("WRITING BUFFER ${bufferIndex} LENGTH ${sampleBufferL.length}");
    if (bufferIndex == sampleBufferL.length) {
      audio!.write(sampleBufferL, sampleBufferR);
      bufferIndex = 0;
    }

    // Reset sampled values:
    smpSquare1 = 0;
    smpSquare2 = 0;
    smpTriangle = 0;
    smpDmc = 0;
  }

  int getSampleRate() => sampleRate;

  void reset() {
    setSampleRate(sampleRate, false);
    updateChannelEnable(0);
    masterFrameCounter = 0;
    derivedFrameCounter = 0;
    countSequence = 0;
    sampleCount = 0;
    frameIrqEnabled = false;
    initingHardware = false;

    resetCounter();

    square1.reset();
    square2.reset();
    triangle.reset();
    noise.reset();
    dmc.reset();

    bufferIndex = 0;
    accCount = 0;
    smpSquare1 = 0;
    smpSquare2 = 0;
    smpTriangle = 0;
    smpNoise = 0;
    smpDmc = 0;

    frameIrqEnabled = false;
    frameIrqCounterMax = 4;

    channelEnableValue = 0xFF;
    startedPlaying = false;
    prevSampleL = 0;
    prevSampleR = 0;
    smpAccumL = 0;
    smpAccumR = 0;
  }

  int getLengthMax(int value) => lengthLookup[value >> 3];

  int getDmcFrequency(int value) {
    if (value >= 0 && value < 0x10) return dmcFreqLookup[value];
    return 0;
  }

  int getNoiseWaveLength(int value) {
    if (value >= 0 && value < 0x10) return noiseWavelengthLookup[value];
    return 0;
  }

  void setSampleRate(int rate, bool restart) {
    bool cpuRunning = nes.isRunning();
    if (cpuRunning) nes.stopEmulation();

    sampleRate = rate;
    sampleTimerMax =
        ((1024 * Globals.CPU_FREQ_NTSC * Globals.preferredFrameRate) ~/
                (sampleRate * 60))
            .toInt();

    frameTime = ((14915 * Globals.preferredFrameRate) ~/ 60);

    sampleTimer = 0;
    bufferIndex = 0;

    if (restart) reset();

    if (cpuRunning) nes.startEmulation();
  }

  void setChannelEnabled(int channel, bool value) {
    if (channel == 0) {
      userEnableSquare1 = value;
    } else if (channel == 1) {
      userEnableSquare2 = value;
    } else if (channel == 2) {
      userEnableTriangle = value;
    } else if (channel == 3) {
      userEnableNoise = value;
    } else {
      userEnableDmc = value;
    }
    updateChannelEnable(channelEnableValue);
  }

  void setPanning(List<int> pos) {
    for (int i = 0; i < panning.length; i++) panning[i] = pos[i];
    updateStereoPos();
  }

  void setMasterVolume(int value) {
    if (value < 0) value = 0;
    if (value > 256) value = 256;
    masterVolume = value;
    updateStereoPos();
  }

  void updateStereoPos() {
    stereoPosLSquare1 = (panning[0] * masterVolume) >> 8;
    stereoPosLSquare2 = (panning[1] * masterVolume) >> 8;
    stereoPosLTriangle = (panning[2] * masterVolume) >> 8;
    stereoPosLNoise = (panning[3] * masterVolume) >> 8;
    stereoPosLDMC = (panning[4] * masterVolume) >> 8;

    stereoPosRSquare1 = masterVolume - stereoPosLSquare1;
    stereoPosRSquare2 = masterVolume - stereoPosLSquare2;
    stereoPosRTriangle = masterVolume - stereoPosLTriangle;
    stereoPosRNoise = masterVolume - stereoPosLNoise;
    stereoPosRDMC = masterVolume - stereoPosLDMC;
  }

  int getBufferPos() => bufferIndex;

  void initDACtables() {
    double value;

    int ival;
    int max_sqr = 0;
    int max_tnd = 0;

    square_table = Util.newIntList(32 * 16, 0);
    tnd_table = Util.newIntList(204 * 16, 0);

    for (int i = 0; i < 32 * 16; i++) {
      value = 95.52 / (8128.0 / (i / 16.0) + 100.0);
      value *= 0.98411;
      value *= 50000.0;
      ival = value.floor().toInt();

      square_table[i] = ival;
      if (ival > max_sqr) max_sqr = ival;
    }

    for (int i = 0; i < 204 * 16; i++) {
      value = 163.67 / (24329.0 / (i / 16.0) + 100.0);
      value *= 0.98411;
      value *= 50000.0;
      ival = value.floor().toInt();

      tnd_table[i] = ival;
      if (ival > max_tnd) max_tnd = ival;
    }

    this.dacRange = max_sqr + max_tnd;
    this.dcValue = dacRange ~/ 2;
  }

  void destroy() {}
}
