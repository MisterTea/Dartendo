part of dartendo;

class FileLoader {
  static String get home => '.';
  //'.'; //window.location.protocol + '//' + window.location.host;

  static Future<List<int>> loadFile(String fileName) {
    return HttpRequest.getString('${FileLoader.home}/$fileName')
        .then((String contents) {
      return json.decode(contents).cast<int>();
    });
  }
}
