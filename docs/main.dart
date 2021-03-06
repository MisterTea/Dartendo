library dartendo;

import 'dart:async';
import 'dart:convert';
import 'dart:core';
import 'dart:html';
import 'dart:math' as Math;
import 'dart:typed_data';
import 'dart:web_audio';

part 'Mapper010.dart';
part 'Mapper011.dart';
part 'Mapper015.dart';
part 'Mapper022.dart';
part 'Mapper033.dart';
part 'Mapper034.dart';
part 'Mapper048.dart';
part 'Mapper066.dart';
part 'Mapper068.dart';
part 'Mapper071.dart';
part 'Mapper072.dart';
part 'Mapper078.dart';
part 'Mapper079.dart';
part 'Mapper087.dart';
part 'Mapper094.dart';
part 'Mapper140.dart';
part 'MemoryMapper.dart';
part 'PapuChannel.dart';
part 'Scale.dart';
part 'UI.dart';
part 'applet_ui.dart';
part 'buffer_view.dart';
part 'byte_buffer.dart';
part 'channel_dm.dart';
part 'channel_noise.dart';
part 'channel_square.dart';
part 'channel_triangle.dart';
part 'color.dart';
part 'cpu_info.dart';
part 'cpu_n.dart';
part 'file_loader.dart';
part 'globals_n.dart';
part 'kb_input_handler.dart';
part 'mapper_001.dart';
part 'mapper_002.dart';
part 'mapper_003.dart';
part 'mapper_004.dart';
part 'mapper_007.dart';
part 'mapper_009.dart';
part 'mapper_018.dart';
part 'mapper_021.dart';
part 'mapper_023.dart';
part 'mapper_032.dart';
part 'mapper_064.dart';
part 'mapper_075.dart';
part 'mapper_105.dart';
part 'mapper_182.dart';
part 'mapper_default.dart';
part 'memory.dart';
part 'misc.dart';
part 'name_table.dart';
part 'nes_machine.dart';
part 'palette_table.dart';
part 'papu_n.dart';
part 'ppu_n.dart';
part 'rom_manager.dart';
part 'rom_n.dart';
part 'tile_n.dart';
part 'util_n.dart';
part 'web_audio.dart';

// TODO: Replace with WebSocket object.
//var socketInterface = null;

//var createSocketInterface(String url, onopen, onmessage, onerror) native
//"return new DartendoSocket(url, onopen, onmessage, onerror);";

//void sendSocketInterface(String buffer) native
//"\$globals.socketInterface.send(buffer);";

class Controller {
  CanvasElement canvas =
      document.querySelector("#webGlCanvas") as CanvasElement;
  CanvasRenderingContext context =
      (document.querySelector("#webGlCanvas") as CanvasElement).getContext('2d')
          as CanvasRenderingContext;
  late RomManager romManager;

  bool scale = false;
  bool sound = false;
  bool fps = false;
  bool timeemulation = false;
  //bool showsoundbuffer = false;
  bool _netplay = false;

  int matchid = 0;
  int playerid = 0;

  int samplerate = 0;
  int romSize = 0;
  int progress = 0;

  AppletUI? gui;
  NES? nes;
  BufferView? panelScreen;
  Color bgColor = Color(0, 0, 0);
  bool started = false;

  Stopwatch stopWatch = Stopwatch();
  int lastTime = 0;
  int sleepTime = 0;
  int frameCount = 0;
  int paintedFrameCount = 0;
  int _lastFrameCount = 0;
  int _lastPaintedFrameCount = 0;

  //WebSocket _socket;
  Map<int, Map<String, int>> _recvNetStatus = {};
  Map<int, Map<String, int>> _sendNetStatus = {};

  Controller() {
    romManager = RomManager(this);

    scale = false;
    sound = false;
    fps = false;
    timeemulation = false;
    //showsoundbuffer = false;
    samplerate = 0;
    romSize = 0;
    progress = 0;
    bgColor = Color(0, 0, 0);
    started = false;
    stopWatch.start();
    sleepTime = 0;

    _netplay = false;
    matchid = 0;
    playerid = 0;
    _lastFrameCount = 0;
    frameCount = 0;
    _lastPaintedFrameCount = 0;
    paintedFrameCount = 0;

    //_socket = new WebSocket();
    //_socket.onmessage(_recvStatus);
    _recvNetStatus = Map<int, Map<String, int>>();
    _sendNetStatus = Map<int, Map<String, int>>();

    init();
  }

  void init() {
    //Util.printDebug("nesdart.init(): begins", debugMe);
    PaletteTable.init();
    readParams();

    gui = AppletUI(this);
    gui!.init(false);

    Globals.appletMode = true;
    Globals.memoryFlushValue = 0x00; // make SMB1 hacked version work.

    nes = gui!.getNES();
    // TODO: Why is this enabled before now and then disabled here?
    nes!.enableSound(sound);
    nes!.reset();
    Future.delayed(const Duration(milliseconds: 1000), _updateFps);

    romManager.init();

    if (_netplay) {
      //      socketInterface =
      //          createSocketInterface('ws://' + window.location.host + '/sendStatus',
      //                                (e) { print('Connected'); },
      //                                (e) { _recvStatus(e); },
      //                                (e) { throw new Exception(e); });
    }
  }

  void _updateFps() {
    if (fps) {
      document.querySelector('#fps_counter')!.innerHtml =
          "${frameCount - _lastFrameCount} "
          "[${paintedFrameCount - _lastPaintedFrameCount}]";
      _lastFrameCount = frameCount;
      _lastPaintedFrameCount = paintedFrameCount;
    }
    Future.delayed(const Duration(milliseconds: 1000), _updateFps);
  }

  void addScreenView() {
    //Util.printDebug("nesdart.addScreenView(): begins", debugMe);

    panelScreen = gui!.getScreenView();
    //panelScreen.setFPSEnabled(fps);

    if (scale) {
      //Util.printDebug("nesdart.addScreenView(): SCALE NOT SUPPORTED!", debugMe);
      panelScreen!.setScaleMode(BufferView.SCALE_NORMAL);
    }
  }

  void startAudio() {
    nes!.startAudio();
  }

  void run() {
    // Can start painting:
    started = true;

    // Load ROM file:
    nes!.loadRom(romManager.romBytes);

    if (nes!.rom!.isValid()) {
      // Add the screen buffer:
      addScreenView();

      // Set some properties:
      Globals.timeEmulation = timeemulation;
      //nes.ppu.showSoundBuffer = showsoundbuffer;

      // Start emulation:
      print("nesdart.run(): dartendo is now starting the processor.");
      nes!.getCpu().beginExecution();
    } else {
      // ROM file was invalid.
      print('ERROR: dartendo was unable to find ROM.');
    }

    //print("nesdart.run(): ROM LOADED");
    nes!.getCpu().initRun();
    nes!.getCpu().active = true;

    List<int> intList = Util.newIntList(5, 0);

    intList[3] = 2;

    document.onKeyDown.listen((KeyboardEvent e) {
      KeyboardEvent ke = e;
      gui!.kbJoy1.keyPressed(ke);
      //return false;
    });
    document.onKeyUp.listen((KeyboardEvent e) {
      KeyboardEvent ke = e;
      gui!.kbJoy1.keyReleased(ke);
      //return false;
    });

    window.requestAnimationFrame(animate);
  }

  void stop() {
    nes!.getCpu().active = false;
    nes!.stopEmulation();
    print("vNES has stopped the processor.");
    destroy();
  }

  void destroy() {
    if (nes != null && nes!.getCpu().isRunning()) {
      stop();
    }

    if (nes != null) {
      nes!.destroy();
    }
    if (gui != null) {
      gui!.destroy();
    }

    gui = null;
    nes = null;
    panelScreen = null;
  }

  void showLoadProgress(int percentComplete) {
    progress = percentComplete;
  }

  static String? getQueryValue(String key) {
    if (window.location.search!.isEmpty) return null;
    List vars = window.location.search!.substring(1).split("&");
    for (var i = 0; i < vars.length; ++i) {
      var pair = vars[i].split("=");
      if (pair[0] == key) return pair[1];
    }
    return null;
  }

  void readParams() {
    print("READING PARAMS");

    String? tmp = "";
    if (tmp == null || tmp == ("")) {
      scale = false;
    } else {
      scale = tmp == ("on");
    }

    tmp = getQueryValue('fps');
    if (tmp == null || tmp == ("")) {
      fps = true;
    } else {
      fps = tmp == ("on");
    }

    if (tmp == null || tmp == ("")) {
      timeemulation = true;
    } else {
      timeemulation = tmp == ("on");
    }
    /*
       if (tmp == null || tmp == ("")) {
       showsoundbuffer = false;
       } else {
       showsoundbuffer = tmp == ("on");
       }
     */
    tmp = getQueryValue('sound');
    if (tmp == null || tmp == ('')) {
      sound = AudioContext.supported;
    } else {
      sound = (tmp == ('on'));
    }

    tmp = getQueryValue('netplay');
    if (tmp == null || tmp == ('')) {
      _netplay = false;
    } else {
      _netplay = (tmp == ('on'));
    }
    print('NETPLAY: $_netplay');

    tmp = getQueryValue('matchid');
    if (tmp == null || tmp == ('')) {
      matchid = 0;
    } else {
      matchid = int.parse(tmp);
    }

    tmp = getQueryValue('playerid');
    if (tmp == null || tmp == ('')) {
      playerid = 0;
    } else {
      playerid = int.parse(tmp);
    }

    romSize = -1;
  }

  void animate(num _) {
    if (nes!.getCpu().stopRunning) {
      print('NOT RUNNING');
      nes!.getCpu().finishRun();
      return;
    }

    int time = (1000 * stopWatch.elapsedTicks) ~/ stopWatch.frequency;
    int frameTime = time - lastTime;
    //print("dartendo.animate($time) begins -> $frameTime");
    // Skip one frame to set lastTime and skip if too much time has passed since
    // the last frame.
    bool audioReady = !sound ||
        (!nes!.papu.audio!.dataAvailable ||
            nes!.papu.bufferIndex < (nes!.papu.sampleBufferL.length ~/ 2));
    //print("DATA AVAILABLE: ${nes!.papu.audio.dataAvailable} AUDIO INFO ${nes!.papu.bufferIndex} < ${(nes!.papu.sampleBufferL.length ~/ 2)}");
    if (frameTime < 1000 && audioReady) {
      final BufferView screen = nes!.getGui().getScreenView();
      final CPU cpu = nes!.getCpu();
      final PPU ppu = nes!.getPpu();
      while (sleepTime <= 0) {
        //print('SLEEP TIME ${sleepTime}');
        int cycles = 0;
        while (true) {
          if (cpu.cyclesToHalt == 0) {
            cycles = cpu.emulate();
            if (sound) {
              nes!.papu.clockFrameCounter(cycles);
            }
            cycles *= 3;
          } else {
            if (cpu.cyclesToHalt > 8) {
              cycles = 24;
              if (sound) {
                nes!.papu.clockFrameCounter(8);
              }
              cpu.cyclesToHalt -= 8;
            } else {
              cycles = cpu.cyclesToHalt * 3;
              if (sound) {
                nes!.papu.clockFrameCounter(cpu.cyclesToHalt);
              }
              cpu.cyclesToHalt = 0;
            }
          }

          ppu.cycles = cycles;
          ppu.emulateCycles();

          if (screen.frameFinished) {
            if (_netplay) {
              _buildLocalStatus();
              if (frameCount % 10 == 0) _sendStatus();
            }

            if (screen.painted) ++paintedFrameCount;
            ++frameCount;
            screen.finishFrame();
            if (_netplay) _handleRemoteInput();
            break;
          }
        }
        if (true || sound == false) {
          sleepTime += 16;
        } else {
          int audioToSleep =
              ((nes!.papu.samplesAhead * 1000) ~/ nes!.papu.sampleRate);
          //print("AUDIO TO SLEEP ${audioToSleep}");
          sleepTime += audioToSleep;
          nes!.papu.samplesAhead = 0;
        }
      }
      sleepTime -= frameTime;
      //print("FRAME TIME: "+(time-lastTime));
    } else {
      //print('SKIPPING FRAME frameTime: $frameTime');
    }
    lastTime = time;
    window.requestAnimationFrame(animate);
  }

  void _sendStatus() {
    //_socket.send(JSON.stringify(_sendNetStatus));
    //    sendSocketInterface(JSON.stringify(_sendNetStatus));
    _sendNetStatus.clear();
    _sendNetStatus[-1] = <String, int>{
      'matchid': matchid,
      'playerid': playerid
    };

    //    String resp = '';

    //while (!_recvNetStatus.containsKey(frameCount + 1)) {
    //      String jsonStatus = JSON.stringify(_sendNetStatus);
    //      String url = _sendUrl + '?status=' + jsonStatus;
    //      req.open('GET', url, false);
    //      req.send();
    //      _sendNetStatus.clear();
    //      _sendNetStatus[-1] = new Map<String, int>();
    //      _sendNetStatus[-1]['matchid'] = matchid;
    //      _sendNetStatus[-1]['playerid'] = playerid;
    //      resp = req.responseText;
    //      Map<String, Map<String, int>> resp_map = JSON.parse(resp);
    //      resp_map.forEach((k, v) => _recvNetStatus[Math.parseInt(k)] = v);
    //}
  }

  void _recvStatus(e) {
    var data = e.data;
    if (data != null) {
      Map<String, Map<String, int>> resp_map =
          jsonDecode(data) as Map<String, Map<String, int>>;
      resp_map.forEach((k, v) => _recvNetStatus[int.parse(k)] = v);
    }
  }

  void _buildLocalStatus() {
    if (!_sendNetStatus.containsKey(-1)) {
      _sendNetStatus[-1] = <String, int>{
        'matchid': matchid,
        'playerid': playerid
      };
    }

    Map<String, int> frameStatus = Map<String, int>();

    KbInputHandler joy = (playerid == 1 ? gui!.kbJoy1 : gui!.kbJoy2);

    frameStatus['left'] = joy.getKeyState(KbInputHandler.KEY_LEFT);
    frameStatus['right'] = joy.getKeyState(KbInputHandler.KEY_RIGHT);
    frameStatus['up'] = joy.getKeyState(KbInputHandler.KEY_UP);
    frameStatus['down'] = joy.getKeyState(KbInputHandler.KEY_DOWN);
    frameStatus['a'] = joy.getKeyState(KbInputHandler.KEY_A);
    frameStatus['b'] = joy.getKeyState(KbInputHandler.KEY_B);
    frameStatus['select'] = joy.getKeyState(KbInputHandler.KEY_SELECT);
    frameStatus['start'] = joy.getKeyState(KbInputHandler.KEY_START);
    _sendNetStatus[frameCount] = frameStatus;
  }

  void _handleRemoteInput() {
    Map<String, int>? status = _recvNetStatus[frameCount];
    if (status == null) return;
    KbInputHandler joy = (playerid == 1 ? gui!.kbJoy2 : gui!.kbJoy1);
    joy.setKeyState(KbInputHandler.KEY_LEFT, status['left']!);
    joy.setKeyState(KbInputHandler.KEY_RIGHT, status['right']!);
    joy.setKeyState(KbInputHandler.KEY_UP, status['up']!);
    joy.setKeyState(KbInputHandler.KEY_DOWN, status['down']!);
    joy.setKeyState(KbInputHandler.KEY_A, status['a']!);
    joy.setKeyState(KbInputHandler.KEY_B, status['b']!);
    joy.setKeyState(KbInputHandler.KEY_SELECT, status['select']!);
    joy.setKeyState(KbInputHandler.KEY_START, status['start']!);

    // TODO: discard older frames.
  }

  void addSleepTime(int timeToAdd) {
    sleepTime += timeToAdd;
  }
}

void main() {
  Controller();
}
