part of dartendo;

class RomManager {
  final Controller _controller;

  late Element _menu;
  late Element _romsLabel;
  late Element _romsContent;
  late Element _tv;
  late InputElement _inputFile;
  late Element _heading;

  /**
   * Raw data for the currently-loaded ROM.  Each int has a value between 0 
   * and 254 and represents one byte.
   */
  List<int>? _romBytes;

  /**
   * 0 if not dragging over ROM area.
   * > 0 if dragging over ROM area.
   */
  int _dragState = 0;

  RomManager(this._controller) {
    _menu = document.querySelector('#menu')!;
    _romsLabel = document.querySelector('#roms-label')!;
    _romsContent = document.querySelector('#roms-content')!;
    _inputFile = document.querySelector('#input-file')! as InputElement;
    _tv = document.querySelector('#tv')!;
    _heading = document.querySelector('#heading')!;
  }

  void toggleMenuVisibility() {
    if (_menu.style.bottom == '0px') {
      hideMenu();
    } else {
      showMenu();
    }
  }

  void showMenu() {
    print("SHOWING");
    _menu.style.transition = 'bottom 0.2s';
    _menu.style.bottom = '0';
  }

  void hideMenu() {
    print("HIDING");
    print(_menu.clientHeight.toString());
    print(_menu.style.bottom);
    _menu.style.transition = 'bottom 0.2s';
    _menu.style.bottom = "-" + _romsContent.clientHeight.toString() + "px";
    print(_menu.style.bottom);
  }

  void init() {
    _registerEventHandlers();
    _loadDefaultRom();
  }

  List<int> get romBytes => _romBytes!;

  void _registerEventHandlers() {
    _romsLabel.onClick.listen((event) {
      event.preventDefault();
      toggleMenuVisibility();
    });

    // Input handler
    _inputFile.onChange.listen((event) {
      event.preventDefault();
      File file = _inputFile.files![0];
      _loadFile(file);
    });

    // change background color of drag area if it's dragged over
    _romsContent.onDragEnter.listen((event) {
      event.preventDefault();
      _dragState++;
      _updateRomsContentDragStyle();
    });

    _romsContent.onDragLeave.listen((event) {
      event.preventDefault();
      _dragState--;
      _updateRomsContentDragStyle();
    });

    _tv.onClick.listen((event) {
      if (_romBytes != null) {
        print("STARTING");
        _heading.text = "Dartendo!";
        _controller.startAudio();
        _controller.run();
      }
    });

    // dragOver needs to be cancelled in order for the drop event to fire.
    var onDragOverHandler = (event) => event.preventDefault();
    _romsContent.onDragOver.listen(onDragOverHandler);
    _tv.onDragOver.listen(onDragOverHandler);

    // if a file is dropped, attempt to load it as a rom.
    var onDropHandler = (e) {
      e.preventDefault();
      _loadFile(e.dataTransfer.files[0]);
    };
    _romsContent.onDrop.listen(onDropHandler);
    _tv.onDrop.listen(onDropHandler);
  }

  void _updateRomsContentDragStyle() {
    if (_dragState > 0) {
      _romsContent.classes = ["roms-drag-in"].toSet();
    } else {
      _romsContent.classes = ["roms-drag-out"].toSet();
    }
  }

  void _loadDefaultRom() {
    String defaultRom = 'roms/SuperMario3.json';
    String? romParameter = Controller.getQueryValue('rom');
    if (romParameter != null && romParameter.length > 0) {
      defaultRom = "roms/$romParameter.json";
    }

    HttpRequest.getString('${FileLoader.home}/$defaultRom')
        .then((String contents) {
      _romBytes = json.decode(contents).cast<int>();
      _heading.text = "Click the TV to turn it on";
      //_controller.run();
    });
  }

  void _loadFile(File file) {
    document.querySelector('#name')!.text = file.name;
    document.querySelector('#size')!.text = "$file.size";

    FileReader reader = FileReader();
    reader.onLoadEnd.listen((e) {
      List<int> fromFileBytes = Uint8List.fromList(reader.result as List<int>);
      _romBytes = fromFileBytes;
      hideMenu();
      //_controller.run();
    });
    reader.readAsArrayBuffer(file);
  }
}
