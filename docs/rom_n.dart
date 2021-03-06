part of dartendo;

class ROM {
  // Mirroring types:
  static final int VERTICAL_MIRRORING = 0;
  static final int HORIZONTAL_MIRRORING = 1;
  static final int FOURSCREEN_MIRRORING = 2;
  static final int SINGLESCREEN_MIRRORING = 3;
  static final int SINGLESCREEN_MIRRORING2 = 4;
  static final int SINGLESCREEN_MIRRORING3 = 5;
  static final int SINGLESCREEN_MIRRORING4 = 6;
  static final int CHRROM_MIRRORING = 7;

  bool failedSaveFile = false;
  bool saveRamUpToDate = true;

  late List<int> header;
  late List<List<int>> rom;
  late List<List<int>> vrom;
  late List<int> saveRam;
  late List<List<Tile>> vromTile;

  NES nes;

  int romCount = 0;
  int vromCount = 0;
  int mirroring = 0;
  bool batteryRam = false;
  bool trainer = false;
  bool fourScreen = false;
  int mapperType = 0;
  late String fileName;

  bool enableSave = true;
  bool valid = false;

  List<String> mapperName = List<String>.filled(255, "");
  List<bool> mapperSupported = Util.newBoolList(255, false);

  ROM(this.nes) {
    valid = false;

    for (int i = 0; i < 255; i++) {
      mapperName[i] = "Unknown Mapper";
    }

    mapperName[0] = "NROM";
    mapperName[1] = "Nintendo MMC1";
    mapperName[2] = "UxROM";
    mapperName[3] = "CNROM";
    mapperName[4] = "Nintendo MMC3";
    mapperName[5] = "Nintendo MMC5";
    mapperName[6] = "FFE F4xxx";
    mapperName[7] = "AxROM";
    mapperName[8] = "FFE F3xxx";
    mapperName[9] = "Nintendo MMC2";
    mapperName[10] = "Nintendo MMC4";
    mapperName[11] = "Color Dreams";
    mapperName[12] = "FFE F6xxx";
    mapperName[13] = "CPROM";
    mapperName[15] = "iNES Mapper #015";
    mapperName[16] = "Bandai";
    mapperName[17] = "FFE F8xxx";
    mapperName[18] = "Jaleco SS8806";
    mapperName[19] = "Namcot 106";
    mapperName[20] = "(Hardware) Famicom Disk System";
    mapperName[21] = "Konami VRC4a, VRC4c";
    mapperName[22] = "Konami VRC2a";
    mapperName[23] = "Konami VRC2b, VRC4e, VRC4f";
    mapperName[24] = "Konami VRC6a";
    mapperName[25] = "Konami VRC4b, VRC4d";
    mapperName[26] = "Konami VRC6b";
    mapperName[32] = "Irem G-101";
    mapperName[33] = "Taito TC0190, TC0350";
    mapperName[34] = "BxROM, NINA-001";
    mapperName[41] = "Caltron 6-in-1";
    mapperName[46] = "Rumblestation 15-in-1";
    mapperName[47] =
        "Nintendo MMC3 Multicart (Super Spike V'Ball + Nintendo World Cup)";
    mapperName[48] = "iNES Mapper #048";
    mapperName[64] = "Tengen RAMBO-1";
    mapperName[65] = "Irem H-3001";
    mapperName[66] = "GxROM";
    mapperName[67] = "Sunsoft 3";
    mapperName[68] = "Sunsoft 4";
    mapperName[69] = "Sunsoft FME-7";
    mapperName[70] = "iNES Mapper #070";
    mapperName[71] = "Camerica";
    mapperName[72] = "iNES Mapper #072";
    mapperName[73] = "Konami VRC3";
    mapperName[75] = "Konami VRC1";
    mapperName[76] =
        "iNES Mapper #076 (Digital Devil Monogatari - Megami Tensei)";
    mapperName[77] = "iNES Mapper #077 (Napoleon Senki)";
    mapperName[78] = "Irem 74HC161/32";
    mapperName[79] = "American Game Cartridges";
    mapperName[80] = "iNES Mapper #080";
    mapperName[82] = "iNES Mapper #082";
    mapperName[85] = "Konami VRC7a, VRC7b";
    mapperName[86] = "iNES Mapper #086 (Moero!! Pro Yakyuu)";
    mapperName[87] = "iNES Mapper #087";
    mapperName[88] = "iNES Mapper #088";
    mapperName[89] = "iNES Mapper #087 (Mito Koumon)";
    mapperName[92] = "iNES Mapper #092";
    mapperName[93] = "iNES Mapper #093 (Fantasy Zone)";
    mapperName[94] = "iNES Mapper #094 (Senjou no Ookami)";
    mapperName[95] = "iNES Mapper #095 (Dragon Buster) [MMC3 Derived]";
    mapperName[96] = "(Hardware) Oeka Kids Tablet";
    mapperName[97] = "iNES Mapper #097 (Kaiketsu Yanchamaru)";
    mapperName[105] = "NES-EVENT [MMC1 Derived]";
    mapperName[113] = "iNES Mapper #113";
    mapperName[115] = "iNES Mapper #115 (Yuu Yuu Hakusho Final) [MMC3 Derived]";
    mapperName[118] = "iNES Mapper #118 [MMC3 Derived]";
    mapperName[119] = "TQROM";
    mapperName[140] = "iNES Mapper #140 (Bio Senshi Dan)";
    mapperName[152] = "iNES Mapper #152";
    mapperName[154] = "iNES Mapper #152 (Devil Man)";
    mapperName[159] = "Bandai (Alternate of #016)";
    mapperName[180] = "(Hardware) Crazy Climber Controller";
    mapperName[182] = "iNES Mapper #182";
    mapperName[184] = "iNES Mapper #184";
    mapperName[185] = "iNES Mapper #185";
    mapperName[207] = "iNES Mapper #185 (Fudou Myouou Den)";
    mapperName[228] = "Active Enterprises";
    mapperName[232] = "Camerica (Quattro series)";

    // The mappers supported:
    mapperSupported[0] = true; // No Mapper
    mapperSupported[1] = true; // MMC1
    mapperSupported[2] = true; // UNROM
    mapperSupported[3] = true; // CNROM
    mapperSupported[4] = true; // MMC3
    mapperSupported[7] = true; // AOROM
    mapperSupported[9] = true; // MMC2
    mapperSupported[10] = true; // MMC4
    mapperSupported[11] = true; // ColorDreams
    mapperSupported[15] = true;
    mapperSupported[18] = true;
    mapperSupported[21] = true;
    mapperSupported[22] = true;
    mapperSupported[23] = true;
    mapperSupported[32] = true;
    mapperSupported[33] = true;
    mapperSupported[34] = true; // BxROM
    mapperSupported[48] = true;
    mapperSupported[64] = true;
    mapperSupported[66] = true; // GNROM
    mapperSupported[68] = true; // SunSoft4 chip
    mapperSupported[71] = true; // Camerica
    mapperSupported[72] = true;
    mapperSupported[75] = true;
    mapperSupported[78] = true;
    mapperSupported[79] = true;
    mapperSupported[87] = true;
    mapperSupported[94] = true;
    mapperSupported[105] = true;
    mapperSupported[140] = true;
    mapperSupported[182] = true;
    mapperSupported[232] = true; // Camerica /Quattro
  } //ends Constructor ROM(NES _nes)

  void load(List<int> b) {
    if (b == null || b.length == 0) {
      // Unable to load file.
      print("Unable to load ROM file.");
      valid = false;
    }

    // Read header:
    header = Util.newIntList(16, 0);
    for (int i = 0; i < 16; i++) {
      header[i] = b[i];
    }

    // Check first four bytes:
    String fcode = String.fromCharCodes([b[0], b[1], b[2]]);
    if (fcode != 'NES' || b[3] != 0x1A) {
      print("Header is incorrect.");
      valid = false;
      return;
    }

    // Read header:
    romCount = header[4];
    vromCount = header[5] * 2; // Get the number of 4kB banks, not 8kB
    mirroring = ((header[6] & 1) != 0 ? 1 : 0);
    batteryRam = (header[6] & 2) != 0;
    trainer = (header[6] & 4) != 0;
    fourScreen = (header[6] & 8) != 0;
    mapperType = (header[6] >> 4) | (header[7] & 0xF0);

    // Battery RAM?
    if (batteryRam) {
      loadBatteryRam();
    }

    // Check whether byte 8-15 are zero's:
    bool foundError = false;
    for (int i = 8; i < 16; i++) {
      if (header[i] != 0) {
        foundError = true;
        break;
      }
    }
    if (foundError) {
      // Ignore byte 7.
      mapperType &= 0xF;
    }

    rom = Util.newIntList2d(romCount, 16384, 0);
    vrom = Util.newIntList2d(vromCount, 4096, 0);

    //try{

    // Load PRG-ROM banks:
    int offset = 16;
    for (int i = 0; i < romCount; i++) {
      for (int j = 0; j < 16384; j++) {
        if (offset + j >= b.length) {
          break;
        }
        rom[i][j] = b[offset + j];
      }
      offset += 16384;
    }

    // Load CHR-ROM banks:
    for (int i = 0; i < vromCount; i++) {
      for (int j = 0; j < 4096; j++) {
        if (offset + j >= b.length) {
          break;
        }
        vrom[i][j] = b[offset + j];
      }
      offset += 4096;
    }

    // Create VROM tiles:
    vromTile = [];
    for (int i = 0; i < vromCount; i++) {
      List<Tile> vromTileBatch = [];
      for (int j = 0; j < 256; j++) {
        vromTileBatch.add(Tile());
      }
      vromTile.add(vromTileBatch);
    }

    // Convert CHR-ROM banks to tiles:
    //System.out.println("Converting CHR-ROM image data..");
    //System.out.println("VROM bank count: "+vromCount);
    int tileIndex;
    int leftOver;
    for (int v = 0; v < vromCount; v++) {
      for (int i = 0; i < 4096; i++) {
        tileIndex = i >> 4;
        leftOver = i % 16;
        if (leftOver < 8) {
          vromTile[v][tileIndex]
              .setScanline(leftOver, vrom[v][i], vrom[v][i + 8]);
        } else {
          vromTile[v][tileIndex]
              .setScanline(leftOver - 8, vrom[v][i - 8], vrom[v][i]);
        }
      }
    }

    /*
       tileIndex = (address+i)>>4;
       leftOver = (address+i) % 16;
       if(leftOver<8){
       ptTile[tileIndex].setScanline(leftOver,value[offset+i],ppuMem.load(address+8+i));
       }else{
       ptTile[tileIndex].setScanline(leftOver-8,ppuMem.load(address-8+i),value[offset+i]);
       }
     */

    /*}catch(Exception e){
    //System.out.println("Error reading ROM & VROM banks. Corrupt file?");
    valid = false;
    return;
    }*/

    valid = true;
  }

  bool isValid() {
    return valid;
  }

  int getRomBankCount() {
    return romCount;
  }

  // Returns number of 4kB VROM banks.
  int getVromBankCount() {
    return vromCount;
  }

  List<int> getHeader() {
    return header;
  }

  List<int> getRomBank(int bank) {
    return rom[bank];
  }

  List<int> getVromBank(int bank) {
    return vrom[bank];
  }

  List<Tile> getVromBankTiles(int bank) {
    return vromTile[bank];
  }

  int getMirroringType() {
    if (fourScreen) {
      return FOURSCREEN_MIRRORING;
    }

    if (mirroring == 0) {
      return HORIZONTAL_MIRRORING;
    }

    // default:
    return VERTICAL_MIRRORING;
  }

  int getMapperType() {
    return mapperType;
  }

  String getMapperName() {
    if (mapperType >= 0 && mapperType < mapperName.length) {
      return mapperName[mapperType];
    }
    // else:
    return "Unknown Mapper, $mapperType";
  }

  bool hasBatteryRam() {
    return batteryRam;
  }

  bool hasTrainer() {
    return trainer;
  }

  bool isMapperSupported() {
    if (mapperType < mapperSupported.length && mapperType >= 0) {
      return mapperSupported[mapperType];
    }
    return false;
  }

  MemoryMapper createMapper(NES nes_) {
    if (isMapperSupported()) {
      //Util.printDebug('ROM.createMapper(): mapperType = ' + mapperType, debugMe);

      switch (mapperType) {
        case 0:
          return MapperDefault(nes_);
        case 1:
          return Mapper001(nes_);
        case 2:
          return Mapper002(nes_);
        case 3:
          return Mapper003(nes_);
        case 4:
          return Mapper004(nes_);
        case 7:
          return Mapper007(nes_);
        case 9:
          return Mapper009(nes_);
        case 10:
          return Mapper010(nes_);
        case 11:
          return Mapper011(nes_);
        case 15:
          return Mapper015(nes_);
        case 18:
          return Mapper018(nes_);
        case 21:
          return Mapper021(nes_);
        case 22:
          return Mapper022(nes_);
        case 23:
          return Mapper023(nes_);
        case 32:
          return Mapper032(nes_);
        case 33:
          return Mapper033(nes_);
        case 34:
          return Mapper034(nes_);
        case 48:
          return Mapper048(nes_);
        case 64:
          return Mapper064(nes_);
        case 66:
          return Mapper066(nes_);
        case 68:
          return Mapper068(nes_);
        case 71:
          return Mapper071(nes_);
        case 72:
          return Mapper072(nes_);
        case 75:
          return Mapper075(nes_);
        case 78:
          return Mapper078(nes_);
        case 79:
          return Mapper079(nes_);
        case 87:
          return Mapper087(nes_);
        case 94:
          return Mapper094(nes_);
        case 105:
          return Mapper105(nes_);
        case 140:
          return Mapper140(nes_);
        case 182:
          return Mapper182(nes_);
      }
    }

    // If the mapper wasn't supported, create the standard one:
    print(
        'WARNING: Mapper $mapperType [${mapperName[mapperType]}]not supported yet. Using default.');
    return MapperDefault(nes_);
  }

  void setSaveState(bool enabled) {
    //this.enableSave = enabled;
    if (enabled && !batteryRam) {
      loadBatteryRam();
    }
  }

  List<int> getBatteryRam() => saveRam;

  void loadBatteryRam() {
    return; //just return for now since we don't need this function
    //        if (batteryRam) {
    //            try {
    //                saveRam = Util.newIntList(0x2000, 0);
    //                saveRamUpToDate = true;
    //
    //                // Get hex-encoded memory string from user:
    //                String encodedData = JOptionPane.showInputDialog("Returning players insert Save Code here.");
    //                if (encodedData == null) {
    //                    // User cancelled the dialog.
    //                    return;
    //                }
    //
    //                // Remove all garbage from encodedData:
    //                encodedData = encodedData.replaceAll("[^\\p{XDigit}]", "");
    //                if (encodedData.length != saveRam.length * 2) {
    //                    // Either too few or too many digits.
    //                    return;
    //                }
    //
    //                // Convert hex-encoded memory string to bytes:
    //                for (int i = 0; i < saveRam.length; i++) {
    //                    String hexByte = encodedData.substring(i * 2, i * 2 + 2);
    //                    saveRam[i] = Integer.parseInt(hexByte, 16);
    //
    //                }
    //
    //                //System.out.println("Battery RAM loaded.");
    //                if (nes.getMemoryMapper() != null) {
    //                    nes.getMemoryMapper().loadBatteryRam();
    //                }
    //
    //            } catch (Exception e) {
    //                //System.out.println("Unable to get battery RAM from user.");
    //                failedSaveFile = true;
    //            }
    //        }
  }

  void writeBatteryRam(int address, int value) {
    if (!failedSaveFile && !batteryRam && enableSave) {
      loadBatteryRam();
    }

    //System.out.println("Trying to write to battery RAM. batteryRam="+batteryRam+" enableSave="+enableSave);
    if (batteryRam && enableSave && !failedSaveFile) {
      saveRam[address - 0x6000] = value;
      saveRamUpToDate = false;
    }
  }

  void closeRom() {
    /* TODO: SAVE SRAM
       if (batteryRam && !saveRamUpToDate) {
       try {

    // Convert bytes to hex-encoded memory string:
    StringBuilder sb = new StringBuilder(saveRam.length * 2 + saveRam.length / 38);
    for (int i = 0; i < saveRam.length; i++) {
    String hexByte = String.format("%02x", saveRam[i] & 0xFF);
    if (i % 38 == 0 && i != 0) {
    // Put spacing in so that word wrap will work.
    sb.append(" ");
    }
    sb.append(hexByte);
    }
    String encodedData = sb.toString();

    // Send hex-encoded memory string to user:
    JOptionPane.showInputDialog("Save Code for Resuming Game.", encodedData);

    saveRamUpToDate = true;
    //System.out.println("Battery RAM sent to user.");

    } catch (Exception e) {

    //System.out.println("Trouble sending battery RAM to user.");
    e.printStackTrace();

    }
    }
     */
  }

  void destroy() {
    closeRom();
  }
}
