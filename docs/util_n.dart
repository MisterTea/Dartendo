part of dartendo;

class CUtil {
  // System.arraycopy(rom.getRomBank(bank), 0, cpuMem.mem, address, 16384);
  // arraycopy(Object src, int srcPos, Object dest, int destPos, int length)
  void arraycopy(
      List<int> src, int srcPos, List<int> dest, int destPos, int length) {
    // void setRange(int start, int length, List<E> from, [int startFrom])
    //dest.setRange(destPos, length, src, srcPos);
    for (var i = 0; i < length; i++) {
      dest[destPos + i] = src[srcPos + i];
    }
  }

  void arrayTileCopy(
      List<Tile> src, int srcPos, List<Tile> dest, int destPos, int length) {
    // void setRange(int start, int length, List<E> from, [int startFrom])
    //dest.setRange(destPos, length, src, srcPos);
    for (var i = 0; i < length; i++) {
      dest[destPos + i] = src[srcPos + i];
    }
  }

  Float64List newDoubleList(int size, double defaultValue) {
    Float64List retval = Float64List(size);
    for (int a = 0; a < size; a++) {
      retval[a] = defaultValue;
    }
    return retval;
  }

  Uint32List newUInt8List(int size, int defaultValue) {
    Uint32List retval = Uint32List(size);
    for (int a = 0; a < size; a++) {
      retval[a] = defaultValue;
    }
    return retval;
  }

  Int32List newIntList(int size, int defaultValue) {
    Int32List retval = Int32List(size);
    for (int a = 0; a < size; a++) {
      retval[a] = defaultValue;
    }
    return retval;
  }

  List<bool> newBoolList(int size, bool defaultValue) {
    return List<bool>.filled(size, defaultValue);
  }

  List<Int32List> newIntList2d(int size1, int size2, int defaultValue) {
    return List<Int32List>.generate(
        size1, (int index) => newIntList(size2, defaultValue));
  }

  /**
   * Compute 32-bit logical shift right of a value. This emulates the JavaScript >>> operator.
   */

  int lsr(int n, int shift) {
    return n ~/ (1 << shift);
  }
}

CUtil Util = CUtil();
