part of dartendo;

class CPU {
  // References to other parts of NES :
  NES nes;
  late MemoryMapper mmap;
  late List<int> mem;

  // CPU Registers:
  int REG_ACC_NEW = 0;
  int REG_X_NEW = 0;
  int REG_Y_NEW = 0;
  int REG_STATUS_NEW = 0;
  int REG_PC_NEW = 0;
  int REG_SP = 0;

  // Status flags:
  int F_CARRY_NEW = 0;
  int F_ZERO_NEW = 0;
  int F_INTERRUPT_NEW = 0;
  int F_DECIMAL_NEW = 0;
  int F_BRK_NEW = 0;
  int F_NOTUSED_NEW = 0;
  int F_OVERFLOW_NEW = 0;
  int F_SIGN_NEW = 0;

  // IRQ Types:
  static final int IRQ_NORMAL = 0;
  static final int IRQ_NMI = 1;
  static final int IRQ_RESET = 2;

  // Interrupt notification:
  bool irqRequested = false;
  int irqType = 0;
  int interruptStatus = 0;

  // Op/Inst Data:
  late List<OpData> opdata;

  // Misc vars:
  int cyclesToHalt = 0;
  bool stopRunning = false;
  bool crash = false;

  bool active = false;

  // References to other parts of NES:
  late PPU ppu;
  late PAPU papu;

  // Registers:
  int REG_ACC = 0;
  int REG_X = 0;
  int REG_Y = 0;
  int REG_STATUS = 0;
  int REG_PC = 0;

  // Status flags:
  int F_CARRY = 0;
  int F_ZERO = 0;
  int F_INTERRUPT = 0;
  int F_DECIMAL = 0;
  int F_NOTUSED = 0;
  int F_BRK = 0;
  int F_OVERFLOW = 0;
  int F_SIGN = 0;

  // Misc. variables
  late OpData opinf;
  int opaddr = 0;
  int addrMode = 0;
  int addr = 0;
  int palCnt = 0;
  int cycleCount = 0;
  int cycleAdd = 0;
  int add = 0;

  bool palEmu = false;
  bool emulateSound = false;
  bool asApplet = false;

  late var _opcode_table;
  late var _addressModeLookup;
  late var irqTypeSwitch;

  // Constructor:
  CPU(this.nes) {
    active = false;

    // Build the opcode jump table
    _opcode_table = List<Function>.filled(56, () {});
    _opcode_table[0] = () {
      // *******
      // * ADC *
      // *******

      // Add with carry.
      int temp = REG_ACC + load(addr) + F_CARRY;
      F_OVERFLOW = ((!(((REG_ACC ^ load(addr)) & 0x80) != 0) &&
              (((REG_ACC ^ temp) & 0x80)) != 0)
          ? 1
          : 0);
      F_CARRY = (temp > 255 ? 1 : 0);
      F_SIGN = (temp >> 7) & 1;
      F_ZERO = temp & 0xFF;
      REG_ACC = (temp & 255);
      cycleCount += cycleAdd;
    };
    _opcode_table[1] = () {
      // *******
      // * AND *
      // *******

      // AND memory with accumulator.
      REG_ACC = REG_ACC & load(addr);
      F_SIGN = (REG_ACC >> 7) & 1;
      F_ZERO = REG_ACC;
      //REG_ACC = temp;
      if (addrMode != 11) cycleCount += cycleAdd; // PostIdxInd = 11
    };
    _opcode_table[2] = () {
      // *******
      // * ASL *
      // *******

      // Shift left one bit
      if (addrMode == 4) {
        // ADDR_ACC = 4

        F_CARRY = (REG_ACC >> 7) & 1;
        REG_ACC = (REG_ACC << 1) & 255;
        F_SIGN = (REG_ACC >> 7) & 1;
        F_ZERO = REG_ACC;
      } else {
        int temp = load(addr);
        F_CARRY = (temp >> 7) & 1;
        temp = (temp << 1) & 255;
        F_SIGN = (temp >> 7) & 1;
        F_ZERO = temp;
        write(addr, temp);
      }
    };
    _opcode_table[3] = () {
      // *******
      // * BCC *
      // *******

      // Branch on carry clear
      if (F_CARRY == 0) {
        cycleCount += ((opaddr & 0xFF00) != (addr & 0xFF00) ? 2 : 1);
        REG_PC = addr;
      }
    };
    _opcode_table[4] = () {
      // *******
      // * BCS *
      // *******

      // Branch on carry set
      if (F_CARRY == 1) {
        cycleCount += ((opaddr & 0xFF00) != (addr & 0xFF00) ? 2 : 1);
        REG_PC = addr;
      }
    };
    _opcode_table[5] = () {
      // *******
      // * BEQ *
      // *******

      // Branch on zero
      if (F_ZERO == 0) {
        cycleCount += ((opaddr & 0xFF00) != (addr & 0xFF00) ? 2 : 1);
        REG_PC = addr;
      }
    };

    _opcode_table[6] = () {
      // *******
      // * BIT *
      // *******

      int temp = load(addr);
      F_SIGN = (temp >> 7) & 1;
      F_OVERFLOW = (temp >> 6) & 1;
      temp &= REG_ACC;
      F_ZERO = temp;
    };
    _opcode_table[7] = () {
      // *******
      // * BMI *
      // *******

      // Branch on negative result
      if (F_SIGN == 1) {
        cycleCount++;
        REG_PC = addr;
      }
    };
    _opcode_table[8] = () {
      // *******
      // * BNE *
      // *******

      // Branch on not zero
      if (F_ZERO != 0) {
        cycleCount += ((opaddr & 0xFF00) != (addr & 0xFF00) ? 2 : 1);
        REG_PC = addr;
      }
    };
    _opcode_table[9] = () {
      // *******
      // * BPL *
      // *******

      // Branch on positive result
      if (F_SIGN == 0) {
        cycleCount += ((opaddr & 0xFF00) != (addr & 0xFF00) ? 2 : 1);
        REG_PC = addr;
      }
    };
    _opcode_table[10] = () {
      // *******
      // * BRK *
      // *******

      REG_PC += 2;
      push((REG_PC >> 8) & 255);
      push(REG_PC & 255);
      F_BRK = 1;

      push((F_CARRY) |
          ((F_ZERO == 0 ? 1 : 0) << 1) |
          (F_INTERRUPT << 2) |
          (F_DECIMAL << 3) |
          (F_BRK << 4) |
          (F_NOTUSED << 5) |
          (F_OVERFLOW << 6) |
          (F_SIGN << 7));

      F_INTERRUPT = 1;
      //REG_PC = load(0xFFFE) | (load(0xFFFF) << 8);
      REG_PC = load16bit(0xFFFE);
      REG_PC--;
    };
    _opcode_table[11] = () {
      // *******
      // * BVC *
      // *******

      // Branch on overflow clear
      if (F_OVERFLOW == 0) {
        cycleCount += ((opaddr & 0xFF00) != (addr & 0xFF00) ? 2 : 1);
        REG_PC = addr;
      }
    };
    _opcode_table[12] = () {
      // *******
      // * BVS *
      // *******

      // Branch on overflow set
      if (F_OVERFLOW == 1) {
        cycleCount += ((opaddr & 0xFF00) != (addr & 0xFF00) ? 2 : 1);
        REG_PC = addr;
      }
    };
    _opcode_table[13] = () {
      // *******
      // * CLC *
      // *******

      // Clear carry flag
      F_CARRY = 0;
    };
    _opcode_table[14] = () {
      // *******
      // * CLD *
      // *******

      // Clear decimal flag
      F_DECIMAL = 0;
    };
    _opcode_table[15] = () {
      // *******
      // * CLI *
      // *******

      // Clear interrupt flag
      F_INTERRUPT = 0;
    };
    _opcode_table[16] = () {
      // *******
      // * CLV *
      // *******

      // Clear overflow flag
      F_OVERFLOW = 0;
    };
    _opcode_table[17] = () {
      // *******
      // * CMP *
      // *******

      // Compare memory and accumulator:
      int temp = REG_ACC - load(addr);
      F_CARRY = (temp >= 0 ? 1 : 0);
      F_SIGN = (temp >> 7) & 1;
      F_ZERO = temp & 0xFF;
      cycleCount += cycleAdd;
    };
    _opcode_table[18] = () {
      // *******
      // * CPX *
      // *******

      // Compare memory and index X:
      int temp = REG_X - load(addr);
      F_CARRY = (temp >= 0 ? 1 : 0);
      F_SIGN = (temp >> 7) & 1;
      F_ZERO = temp & 0xFF;
    };
    _opcode_table[19] = () {
      // *******
      // * CPY *
      // *******

      // Compare memory and index Y:
      int temp = REG_Y - load(addr);
      F_CARRY = (temp >= 0 ? 1 : 0);
      F_SIGN = (temp >> 7) & 1;
      F_ZERO = temp & 0xFF;
    };
    _opcode_table[20] = () {
      // *******
      // * DEC *
      // *******

      // Decrement memory by one:
      int temp = (load(addr) - 1) & 0xFF;
      F_SIGN = (temp >> 7) & 1;
      F_ZERO = temp;
      write(addr, temp);
    };
    _opcode_table[21] = () {
      // *******
      // * DEX *
      // *******

      // Decrement index X by one:
      REG_X = (REG_X - 1) & 0xFF;
      F_SIGN = (REG_X >> 7) & 1;
      F_ZERO = REG_X;
    };
    _opcode_table[22] = () {
      // *******
      // * DEY *
      // *******

      // Decrement index Y by one:
      REG_Y = (REG_Y - 1) & 0xFF;
      F_SIGN = (REG_Y >> 7) & 1;
      F_ZERO = REG_Y;
    };
    _opcode_table[23] = () {
      // *******
      // * EOR *
      // *******

      // XOR Memory with accumulator, store in accumulator:
      REG_ACC = (load(addr) ^ REG_ACC) & 0xFF;
      F_SIGN = (REG_ACC >> 7) & 1;
      F_ZERO = REG_ACC;
      cycleCount += cycleAdd;
    };
    _opcode_table[24] = () {
      // *******
      // * INC *
      // *******

      // Increment memory by one:
      int temp = (load(addr) + 1) & 0xFF;
      F_SIGN = (temp >> 7) & 1;
      F_ZERO = temp;
      write(addr, (temp & 0xFF));
    };
    _opcode_table[25] = () {
      // *******
      // * INX *
      // *******

      // Increment index X by one:
      REG_X = (REG_X + 1) & 0xFF;
      F_SIGN = (REG_X >> 7) & 1;
      F_ZERO = REG_X;
    };
    _opcode_table[26] = () {
      // *******
      // * INY *
      // *******

      // Increment index Y by one:
      REG_Y++;
      REG_Y &= 0xFF;
      F_SIGN = (REG_Y >> 7) & 1;
      F_ZERO = REG_Y;
    };
    _opcode_table[27] = () {
      // *******
      // * JMP *
      // *******

      // Jump to new location:
      REG_PC = addr - 1;
    };
    _opcode_table[28] = () {
      // *******
      // * JSR *
      // *******

      // Jump to new location, saving return address.
      // Push return address on stack:
      push((REG_PC >> 8) & 255);
      push(REG_PC & 255);
      REG_PC = addr - 1;
    };
    _opcode_table[29] = () {
      // *******
      // * LDA *
      // *******

      // Load accumulator with memory:
      REG_ACC = load(addr);
      F_SIGN = (REG_ACC >> 7) & 1;
      F_ZERO = REG_ACC;
      cycleCount += cycleAdd;
    };
    _opcode_table[30] = () {
      // *******
      // * LDX *
      // *******

      // Load index X with memory:
      REG_X = load(addr);
      F_SIGN = (REG_X >> 7) & 1;
      F_ZERO = REG_X;
      cycleCount += cycleAdd;
    };
    _opcode_table[31] = () {
      // *******
      // * LDY *
      // *******

      // Load index Y with memory:
      REG_Y = load(addr);
      F_SIGN = (REG_Y >> 7) & 1;
      F_ZERO = REG_Y;
      cycleCount += cycleAdd;
    };
    _opcode_table[32] = () {
      // *******
      // * LSR *
      // *******

      // Shift right one bit:
      int temp = 0;
      if (addrMode == 4) {
        // ADDR_ACC
        temp = (REG_ACC & 0xFF);
        F_CARRY = temp & 1;
        temp >>= 1;
        REG_ACC = temp;
      } else {
        temp = load(addr) & 0xFF;
        F_CARRY = temp & 1;
        temp >>= 1;
        write(addr, temp);
      }
      F_SIGN = 0;
      F_ZERO = temp;
    };
    _opcode_table[33] = () {
      // *******
      // * NOP *
      // *******

      // No OPeration.
      // Ignore.
    };

    _opcode_table[34] = () {
      // *******
      // * ORA *
      // *******

      // OR memory with accumulator, store in accumulator.
      int temp = (load(addr) | REG_ACC) & 255;
      F_SIGN = (temp >> 7) & 1;
      F_ZERO = temp;
      REG_ACC = temp;
      if (addrMode != 11) cycleCount += cycleAdd; // PostIdxInd = 11
    };

    _opcode_table[35] = () {
      // *******
      // * PHA *
      // *******

      // Push accumulator on stack
      push(REG_ACC);
    };

    _opcode_table[36] = () {
      // *******
      // * PHP *
      // *******

      // Push processor status on stack
      F_BRK = 1;
      push((F_CARRY) |
          ((F_ZERO == 0 ? 1 : 0) << 1) |
          (F_INTERRUPT << 2) |
          (F_DECIMAL << 3) |
          (F_BRK << 4) |
          (F_NOTUSED << 5) |
          (F_OVERFLOW << 6) |
          (F_SIGN << 7));
    };

    _opcode_table[37] = () {
      // *******
      // * PLA *
      // *******

      // Pull accumulator from stack
      REG_ACC = pull();
      F_SIGN = (REG_ACC >> 7) & 1;
      F_ZERO = REG_ACC;
    };

    _opcode_table[38] = () {
      // *******
      // * PLP *
      // *******

      // Pull processor status from stack
      int temp = pull();
      F_CARRY = (temp) & 1;
      F_ZERO = (((temp >> 1) & 1) == 1) ? 0 : 1;
      F_INTERRUPT = (temp >> 2) & 1;
      F_DECIMAL = (temp >> 3) & 1;
      F_BRK = (temp >> 4) & 1;
      F_NOTUSED = (temp >> 5) & 1;
      F_OVERFLOW = (temp >> 6) & 1;
      F_SIGN = (temp >> 7) & 1;

      F_NOTUSED = 1;
    };

    _opcode_table[39] = () {
      // *******
      // * ROL *
      // *******

      int temp = 0;
      // Rotate one bit left
      if (addrMode == 4) {
        // ADDR_ACC = 4

        temp = REG_ACC;
        add = F_CARRY;
        F_CARRY = (temp >> 7) & 1;
        temp = ((temp << 1) & 0xFF) + add;
        REG_ACC = temp;
      } else {
        temp = load(addr);
        add = F_CARRY;
        F_CARRY = (temp >> 7) & 1;
        temp = ((temp << 1) & 0xFF) + add;
        write(addr, temp);
      }
      F_SIGN = (temp >> 7) & 1;
      F_ZERO = temp;
    };
    _opcode_table[40] = () {
      // *******
      // * ROR *
      // *******

      // Rotate one bit right
      int temp = 0;
      if (addrMode == 4) {
        // ADDR_ACC = 4

        add = F_CARRY << 7;
        F_CARRY = REG_ACC & 1;
        temp = (REG_ACC >> 1) + add;
        REG_ACC = temp;
      } else {
        temp = load(addr);
        add = F_CARRY << 7;
        F_CARRY = temp & 1;
        temp = (temp >> 1) + add;
        write(addr, temp);
      }
      F_SIGN = (temp >> 7) & 1;
      F_ZERO = temp;
    };

    _opcode_table[41] = () {
      // *******
      // * RTI *
      // *******

      // Return from interrupt. Pull status and PC from stack.

      int temp = pull();
      F_CARRY = (temp) & 1;
      F_ZERO = ((temp >> 1) & 1) == 0 ? 1 : 0;
      F_INTERRUPT = (temp >> 2) & 1;
      F_DECIMAL = (temp >> 3) & 1;
      F_BRK = (temp >> 4) & 1;
      F_NOTUSED = (temp >> 5) & 1;
      F_OVERFLOW = (temp >> 6) & 1;
      F_SIGN = (temp >> 7) & 1;

      REG_PC = pull();
      REG_PC += (pull() << 8);
      if (REG_PC == 0xFFFF) {
        return;
      }
      REG_PC--;
      F_NOTUSED = 1;
    };

    _opcode_table[42] = () {
      // *******
      // * RTS *
      // *******

      // Return from subroutine. Pull PC from stack.

      REG_PC = pull();
      REG_PC += (pull() << 8);

      if (REG_PC == 0xFFFF) {
        return;
      }
    };

    _opcode_table[43] = () {
      // *******
      // * SBC *
      // *******

      int temp = REG_ACC - load(addr) - (1 - F_CARRY);
      F_SIGN = (temp >> 7) & 1;
      F_ZERO = temp & 0xFF;
      F_OVERFLOW = ((((REG_ACC ^ temp) & 0x80) != 0 &&
              ((REG_ACC ^ load(addr)) & 0x80) != 0)
          ? 1
          : 0);
      F_CARRY = (temp < 0 ? 0 : 1);
      REG_ACC = (temp & 0xFF);
      if (addrMode != 11) cycleCount += cycleAdd; // PostIdxInd = 11
    };

    _opcode_table[44] = () {
      // *******
      // * SEC *
      // *******

      // Set carry flag
      F_CARRY = 1;
    };

    _opcode_table[45] = () {
      // *******
      // * SED *
      // *******

      // Set decimal mode
      F_DECIMAL = 1;
    };

    _opcode_table[46] = () {
      // *******
      // * SEI *
      // *******

      // Set interrupt disable status
      F_INTERRUPT = 1;
    };

    _opcode_table[47] = () {
      // *******
      // * STA *
      // *******

      // Store accumulator in memory
      write(addr, REG_ACC);
    };

    _opcode_table[48] = () {
      // *******
      // * STX *
      // *******

      // Store index X in memory
      write(addr, REG_X);
    };

    _opcode_table[49] = () {
      // *******
      // * STY *
      // *******

      // Store index Y in memory:
      write(addr, REG_Y);
    };
    _opcode_table[50] = () {
      // *******
      // * TAX *
      // *******

      // Transfer accumulator to index X:
      REG_X = REG_ACC;
      F_SIGN = (REG_ACC >> 7) & 1;
      F_ZERO = REG_ACC;
    };

    _opcode_table[51] = () {
      // *******
      // * TAY *
      // *******

      // Transfer accumulator to index Y:
      REG_Y = REG_ACC;
      F_SIGN = (REG_ACC >> 7) & 1;
      F_ZERO = REG_ACC;
    };

    _opcode_table[52] = () {
      // *******
      // * TSX *
      // *******

      // Transfer stack pointer to index X:
      REG_X = (REG_SP - 0x0100);
      F_SIGN = (REG_SP >> 7) & 1;
      F_ZERO = REG_X;
    };

    _opcode_table[53] = () {
      // *******
      // * TXA *
      // *******

      // Transfer index X to accumulator:
      REG_ACC = REG_X;
      F_SIGN = (REG_X >> 7) & 1;
      F_ZERO = REG_X;
    };

    _opcode_table[54] = () {
      // *******
      // * TXS *
      // *******

      // Transfer index X to stack pointer:
      REG_SP = (REG_X + 0x0100);
      stackWrap();
    };

    _opcode_table[55] = () {
      // *******
      // * TYA *
      // *******

      // Transfer index Y to accumulator:
      REG_ACC = REG_Y;
      F_SIGN = (REG_Y >> 7) & 1;
      F_ZERO = REG_Y;
    };

    // address mode lookup
    _addressModeLookup = List<Function>.filled(13, () {});

    _addressModeLookup[0] = () {
      // Zero Page mode. Use the address given after the opcode, but without high byte.
      addr = load(opaddr + 2);
    };

    _addressModeLookup[1] = () {
      // Relative mode.
      addr = load(opaddr + 2);
      if (addr < 0x80) {
        addr += REG_PC;
      } else {
        addr += REG_PC - 256;
      }
    };

    _addressModeLookup[2] = () {
      // Ignore. Address is implied in instruction.
    };

    _addressModeLookup[3] = () {
      // Absolute mode. Use the two bytes following the opcode as an address.
      addr = load16bit(opaddr + 2);
    };

    _addressModeLookup[4] = () {
      // Accumulator mode. The address is in the accumulator register.
      addr = REG_ACC;
    };

    _addressModeLookup[5] = () {
      // Immediate mode. The value is given after the opcode.
      addr = REG_PC;
    };

    _addressModeLookup[6] = () {
      // Zero Page Indexed mode, X as index. Use the address given after the opcode, then add the
      // X register to it to get the final address.
      addr = (load(opaddr + 2) + REG_X) & 0xFF;
    };

    _addressModeLookup[7] = () {
      // Zero Page Indexed mode, Y as index. Use the address given after the opcode, then add the
      // Y register to it to get the final address.
      addr = (load(opaddr + 2) + REG_Y) & 0xFF;
    };

    _addressModeLookup[8] = () {
      // Absolute Indexed Mode, X as index. Same as zero page indexed, but with the high byte.
      addr = load16bit(opaddr + 2);
      if ((addr & 0xFF00) != ((addr + REG_X) & 0xFF00)) {
        cycleAdd = 1;
      }
      addr += REG_X;
    };

    _addressModeLookup[9] = () {
      // Absolute Indexed Mode, Y as index. Same as zero page indexed, but with the high byte.
      addr = load16bit(opaddr + 2);
      if ((addr & 0xFF00) != ((addr + REG_Y) & 0xFF00)) {
        cycleAdd = 1;
      }
      addr += REG_Y;
    };

    _addressModeLookup[10] = () {
      // Pre-indexed Indirect mode. Find the 16-bit address starting at the given location plus
      // the current X register. The value is the contents of that address.
      addr = load(opaddr + 2);
      if ((addr & 0xFF00) != ((addr + REG_X) & 0xFF00)) {
        cycleAdd = 1;
      }

      addr += REG_X;
      addr &= 0xFF;
      addr = load16bit(addr);
    };

    _addressModeLookup[11] = () {
      // Post-indexed Indirect mode. Find the 16-bit address contained in the given location
      // (and the one following). Add to that address the contents of the Y register. Fetch the value
      // stored at that adress.

      addr = load16bit(load(opaddr + 2));
      if ((addr & 0xFF00) != ((addr + REG_Y) & 0xFF00)) {
        cycleAdd = 1;
      }
      addr += REG_Y;
    };

    _addressModeLookup[12] = () {
      // Indirect Absolute mode. Find the 16-bit address contained at the given location.
      addr = load16bit(opaddr + 2); // Find op
      if (addr < 0x1FFF) {
        addr = mem[addr] +
            (mem[(addr & 0xFF00) | (((addr & 0xFF) + 1) & 0xFF)] <<
                8); // Read from address given in op
      } else {
        addr = mmap.load(addr) +
            (mmap.load((addr & 0xFF00) | (((addr & 0xFF) + 1) & 0xFF)) << 8);
      }
    };

    irqTypeSwitch = List<Function>.filled(3, () {});
    irqTypeSwitch[0] = () {
      // Normal IRQ:
      if (F_INTERRUPT != 0) {
        //print("CPU.Constructor.irqTypeSwitch[0]: Interrupt was masked.");
        return;
      }

      doIrq();
      //print("CPU.Constructor.irqTypeSwitch[0]: Did normal IRQ. I = " + F_INTERRUPT);
    };

    irqTypeSwitch[1] = () {
      // NMI:
      doNonMaskableInterrupt(interruptStatus);
    };

    irqTypeSwitch[2] = () {
      // Reset:
      doResetInterrupt();
    };
  } // Ends Constructor CPU(NES nes)

  // Initialize:
  void init() {
    // Get Op data:
    opdata = CpuInfo.getOpData();

    // Reset crash flag:
    crash = false;

    // Set flags:
    F_BRK_NEW = 1;
    F_NOTUSED_NEW = 1;
    F_INTERRUPT_NEW = 1;
    irqRequested = false;

    // NES Memory
    // (when memory mappers switch ROM banks
    // this will be written to, no need to
    // update reference):
    mem = nes.cpuMem.mem;
    print("MEMORY SIZE: ${mem.length}");

    // References to other parts of NES:
    ppu = nes.ppu;
    papu = nes.papu;

    // Registers:
    REG_ACC = REG_ACC_NEW;
    REG_X = REG_X_NEW;
    REG_Y = REG_Y_NEW;
    REG_STATUS = REG_STATUS_NEW;
    REG_PC = REG_PC_NEW;

    // Status flags:
    F_CARRY = F_CARRY_NEW;
    F_ZERO = (F_ZERO_NEW == 0 ? 1 : 0);
    F_INTERRUPT = F_INTERRUPT_NEW;
    F_DECIMAL = F_DECIMAL_NEW;
    F_NOTUSED = F_NOTUSED_NEW;
    F_BRK = F_BRK_NEW;
    F_OVERFLOW = F_OVERFLOW_NEW;
    F_SIGN = F_SIGN_NEW;

    // Misc. variables
    opaddr = 0;
    addrMode = 0;
    addr = 0;
    palCnt = 0;

    palEmu = Globals.palEmulation;
    asApplet = Globals.appletMode;
    stopRunning = false;
  }

  void stateLoad(MemByteBuffer buf) {
    if (buf.readByte() == 1) {
      // Version 1

      // Registers:
      setStatus(buf.readInt());
      REG_ACC_NEW = buf.readInt();
      REG_PC_NEW = buf.readInt();
      REG_SP = buf.readInt();
      REG_X_NEW = buf.readInt();
      REG_Y_NEW = buf.readInt();

      // Cycles to halt:
      cyclesToHalt = buf.readInt();
    }
  }

  void stateSave(MemByteBuffer buf) {
    // Save info version:
    buf.putByte(1);

    // Save registers:
    buf.putInt(getStatus());
    buf.putInt(REG_ACC_NEW);
    buf.putInt(REG_PC_NEW);
    buf.putInt(REG_SP);
    buf.putInt(REG_X_NEW);
    buf.putInt(REG_Y_NEW);

    // Cycles to halt:
    buf.putInt(cyclesToHalt);
  }

  void reset() {
    REG_ACC_NEW = 0;
    REG_X_NEW = 0;
    REG_Y_NEW = 0;

    irqRequested = false;
    irqType = 0;

    // Reset Stack pointer:
    REG_SP = 0x01FF;

    // Reset Program counter:
    REG_PC_NEW = 0x8000 - 1;

    // Reset Status register:
    REG_STATUS_NEW = 0x28;
    setStatus(0x28);

    // Reset crash flag:
    crash = false;

    // Set flags:
    F_CARRY_NEW = 0;
    F_DECIMAL_NEW = 0;
    F_INTERRUPT_NEW = 1;
    F_OVERFLOW_NEW = 0;
    F_SIGN_NEW = 0;
    F_ZERO_NEW = 0;

    F_NOTUSED_NEW = 1;
    F_BRK_NEW = 1;

    cyclesToHalt = 0;
  }

  void beginExecution() {}

  void endExecution() {
    stopRunning = true;
  }

  bool isRunning() {
    return active;
  }

  void initRun() {
    stopRunning = false;
  }

  // Emulates cpu instructions until stopped.
  int emulate() {
    if (stopRunning) return 0;

    // Check interrupts:
    if (irqRequested) {
      interruptStatus = (F_CARRY) |
          ((F_ZERO == 0 ? 1 : 0) << 1) |
          (F_INTERRUPT << 2) |
          (F_DECIMAL << 3) |
          (F_BRK << 4) |
          (F_NOTUSED << 5) |
          (F_OVERFLOW << 6) |
          (F_SIGN << 7);

      REG_PC_NEW = REG_PC;
      F_INTERRUPT_NEW = F_INTERRUPT;

      irqTypeSwitch[irqType]();

      REG_PC = REG_PC_NEW;
      F_INTERRUPT = F_INTERRUPT_NEW;
      F_BRK = F_BRK_NEW;
      irqRequested = false;
    }

    opinf = opdata[mmap.load(REG_PC + 1)];
    cycleCount = opinf.cycles;
    cycleAdd = 0;

    // Find address mode:
    addrMode = opinf.addr;

    // Increment PC by number of op bytes:
    opaddr = REG_PC;
    REG_PC += opinf.size;

    _addressModeLookup[addrMode]();

    // Wrap around for addresses above 0xFFFF:
    addr &= 0xFFFF;

    // -------------------------------------------------------------------------
    // Decode & execute instruction:
    // -------------------------------------------------------------------------

    // Use the opcode jump table
    final int opcode = opinf.inst;
    if (opcode < _opcode_table.length) {
      _opcode_table[opcode]();
    } else {
      // Illegal opcode!
      if (!crash) {
        crash = true;
        stopRunning = true;
        print("CPU.emulate(): ERROR: Game crashed, invalid opcode.");
      }
    }

    // -------------------------------------------------------------------------

    if (palEmu) {
      ++palCnt;
      if (palCnt == 5) {
        palCnt = 0;
        ++cycleCount;
      }
    }

    return cycleCount;
  }

  void finishRun() {
    // Save registers:
    REG_ACC_NEW = REG_ACC;
    REG_X_NEW = REG_X;
    REG_Y_NEW = REG_Y;
    REG_STATUS_NEW = REG_STATUS;
    REG_PC_NEW = REG_PC;

    // Save Status flags:
    F_CARRY_NEW = F_CARRY;
    F_ZERO_NEW = (F_ZERO == 0 ? 1 : 0);
    F_INTERRUPT_NEW = F_INTERRUPT;
    F_DECIMAL_NEW = F_DECIMAL;
    F_BRK_NEW = F_BRK;
    F_NOTUSED_NEW = F_NOTUSED;
    F_OVERFLOW_NEW = F_OVERFLOW;
    F_SIGN_NEW = F_SIGN;
  }

  int load(int address) =>
      address < 0x2000 ? mem[address & 0x7FF] : mmap.load(address);

  int load16bit(int address) {
    return address < 0x1FFF
        ? mem[address & 0x7FF] | (mem[(address + 1) & 0x7FF] << 8)
        : mmap.load(address) | (mmap.load(address + 1) << 8);
  }

  void write(int address, int val) {
    if (address < 0x2000) {
      mem[address & 0x7FF] = val;
    } else {
      mmap.write(address, val);
    }
  }

  void requestIrq(int type) {
    if (irqRequested) {
      if (type == IRQ_NORMAL) {
        return;
      }
      ////System.out.println("too fast irqs. type="+type);
    }
    irqRequested = true;
    irqType = type;
  }

  void push(int value) {
    mmap.write(REG_SP, value);
    --REG_SP;
    REG_SP = 0x0100 | (REG_SP & 0xFF);
  }

  void stackWrap() {
    REG_SP = 0x0100 | (REG_SP & 0xFF);
  }

  int pull() {
    ++REG_SP;
    REG_SP = 0x0100 | (REG_SP & 0xFF);
    return mmap.load(REG_SP);
  }

  bool pageCrossed(int addr1, int addr2) =>
      ((addr1 & 0xFF00) != (addr2 & 0xFF00));

  void haltCycles(int cycles) {
    cyclesToHalt += cycles;
  }

  void doNonMaskableInterrupt(int status) {
    int temp = mmap.load(0x2000); // Read PPU status.
    if ((temp & 128) != 0) {
      // Check whether VBlank Interrupts are enabled

      ++REG_PC_NEW;
      push((REG_PC_NEW >> 8) & 0xFF);
      push(REG_PC_NEW & 0xFF);
      //F_INTERRUPT_NEW = 1;
      push(status);

      REG_PC_NEW = mmap.load(0xFFFA) | (mmap.load(0xFFFB) << 8);
      --REG_PC_NEW;
    }
  }

  void doResetInterrupt() {
    REG_PC_NEW = mmap.load(0xFFFC) | (mmap.load(0xFFFD) << 8);
    --REG_PC_NEW;
  }

  void doIrq() {
    ++REG_PC_NEW;
    push((REG_PC_NEW >> 8) & 0xFF);
    push(REG_PC_NEW & 0xFF);
    push(interruptStatus);
    F_INTERRUPT_NEW = 1;
    F_BRK_NEW = 0;

    REG_PC_NEW = mmap.load(0xFFFE) | (mmap.load(0xFFFF) << 8);
    --REG_PC_NEW;
  }

  int getStatus() {
    return (F_CARRY_NEW) |
        (F_ZERO_NEW << 1) |
        (F_INTERRUPT_NEW << 2) |
        (F_DECIMAL_NEW << 3) |
        (F_BRK_NEW << 4) |
        (F_NOTUSED_NEW << 5) |
        (F_OVERFLOW_NEW << 6) |
        (F_SIGN_NEW << 7);
  }

  void setStatus(int st) {
    F_CARRY_NEW = (st) & 1;
    F_ZERO_NEW = (st >> 1) & 1;
    F_INTERRUPT_NEW = (st >> 2) & 1;
    F_DECIMAL_NEW = (st >> 3) & 1;
    F_BRK_NEW = (st >> 4) & 1;
    F_NOTUSED_NEW = (st >> 5) & 1;
    F_OVERFLOW_NEW = (st >> 6) & 1;
    F_SIGN_NEW = (st >> 7) & 1;
  }

  void setCrashed(bool value) {
    this.crash = value;
  }

  void setMapper(MemoryMapper mapper) {
    mmap = mapper;
  }

  void destroy() {}
}
