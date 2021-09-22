part of dartendo;

class WebAudio {
  AudioContext? _context;
  int _bufferSize;
  ScriptProcessorNode? _node;

  late List<double> _bufferL;
  late List<double> _bufferR;
  bool _dataAvailable = false;

  WebAudio(this._bufferSize) {
    _bufferL = List<double>.filled(_bufferSize, 0.0);
    _bufferR = List<double>.filled(_bufferSize, 0.0);
    if (AudioContext.supported) {
      _context = AudioContext();
      _node = _context!.createScriptProcessor(_bufferSize, 2, 2);
      _node!.onAudioProcess.listen(_process);

      _play();
    }
  }

  void write(List<double> bufferL, List<double> bufferR) {
    //print(bufferL[0]);
    for (var i = 0; i < _bufferSize; ++i) {
      _bufferL[i] = bufferL[i];
      _bufferR[i] = bufferR[i];
    }
    _dataAvailable = true;
  }

  void _play() {
    if (AudioContext.supported) {
      _node!.connectNode(_context!.destination!, 0, 0);
    }
  }

  void _stop() {
    if (AudioContext.supported) {
      _node!.disconnect(0);
      _node!.disconnect(1);
    }
  }

  bool get dataAvailable => _dataAvailable;

  void _process(AudioProcessingEvent e) {
    if (!_dataAvailable) return;

    Float32List bufferL = e.outputBuffer!.getChannelData(0);
    Float32List bufferR = e.outputBuffer!.getChannelData(1);
    for (var i = 0; i < _bufferSize; ++i) {
      bufferL[i] = _bufferL[i];
      bufferR[i] = _bufferR[i];
    }
    //print("audio data processed");
    _dataAvailable = false;
  }
}
