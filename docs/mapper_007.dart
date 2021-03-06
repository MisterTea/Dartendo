part of dartendo;

class Mapper007 extends MapperDefault {
  int currentOffset = 0;
  int currentMirroring = 0;
  late List<int> prgrom;

  Mapper007(NES nes_) : super(nes_) {
    currentOffset = 0;
    currentMirroring = -1;

    // Get ref to ROM:
    ROM rom = nes.getRom();

    // Read out all PRG rom:
    int bc = rom.getRomBankCount();
    prgrom = Util.newIntList(bc * 16384, 0);
    for (int i = 0; i < bc; i++) {
      Util.arraycopy(rom.getRomBank(i), 0, prgrom, i * 16384, 16384);
    }
  }

  int load(int address) {
    if (address < 0x8000) {
      // Register read
      return super.load(address);
    } else {
      if ((address + currentOffset) >= 262144) {
        return prgrom[(address + currentOffset) - 262144];
      } else {
        return prgrom[address + currentOffset];
      }
    }
  }

  void write(int address, int value) {
    if (address < 0x8000) {
      // Let the base mapper take care of it.
      super.write(address, value);
    } else {
      // Set PRG offset:
      currentOffset = ((value & 0xF) - 1) << 15;

      // Set mirroring:
      if (currentMirroring != (value & 0x10)) {
        currentMirroring = value & 0x10;
        if (currentMirroring == 0) {
          nes.getPpu().setMirroring(ROM.SINGLESCREEN_MIRRORING);
        } else {
          nes.getPpu().setMirroring(ROM.SINGLESCREEN_MIRRORING2);
        }
      }
    }
  }

  void mapperInternalStateLoad(MemByteBuffer buf) {
    super.mapperInternalStateLoad(buf);

    // Check version:
    if (buf.readByte() == 1) {
      currentMirroring = buf.readByte();
      currentOffset = buf.readInt();
    }
  }

  void mapperInternalStateSave(MemByteBuffer buf) {
    super.mapperInternalStateSave(buf);

    // Version:
    buf.putByte(1);

    // State:
    buf.putByte(currentMirroring);
    buf.putInt(currentOffset);
  }

  void reset() {
    super.reset();
    currentOffset = 0;
    currentMirroring = -1;
  }
}
