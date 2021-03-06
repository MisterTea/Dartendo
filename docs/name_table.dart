part of dartendo;

class NameTable {
  String name;
  late List<int> tile;
  late List<int> attrib;
  int width = 0;
  int height = 0;

  NameTable(this.width, this.height, this.name) {
    tile = Util.newIntList(width * height, 0);
    attrib = Util.newIntList(width * height, 0);
  }

  int getTileIndex(int x, int y) {
    return tile[y * width + x];
  }

  int getAttrib(int x, int y) {
    return attrib[y * width + x];
  }

  void writeTileIndex(int index, int value) {
    tile[index] = value;
  }

  void writeAttrib(int index, int value) {
    int basex, basey;
    int add;
    int tx, ty;
    int attindex;
    basex = index % 8;
    basey = index ~/ 8;
    basex *= 4;
    basey *= 4;

    for (int sqy = 0; sqy < 2; sqy++) {
      for (int sqx = 0; sqx < 2; sqx++) {
        add = (value >> (2 * (sqy * 2 + sqx))) & 3;
        for (int y = 0; y < 2; y++) {
          for (int x = 0; x < 2; x++) {
            tx = basex + sqx * 2 + x;
            ty = basey + sqy * 2 + y;
            attindex = ty * width + tx;
            attrib[ty * width + tx] = ((add << 2) & 12);
          }
        }
      }
    }
  }

  void stateSave(MemByteBuffer buf) {
    for (int i = 0; i < width * height; i++) {
      if (tile[i] > 255) {
        buf.putByte(tile[i]);
      }
    }
    for (int i = 0; i < width * height; i++) {
      buf.putByte(attrib[i]);
    }
  }

  void stateLoad(MemByteBuffer buf) {
    for (int i = 0; i < width * height; i++) {
      tile[i] = buf.readByte();
    }
    for (int i = 0; i < width * height; i++) {
      attrib[i] = buf.readByte();
    }
  }
}
