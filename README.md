# UNCDuino

UNCDuino is a tool which is thought to help teachers in their effort to teach children to program using robots.

![appPreview](resources/appPreview.png)

It provides a block-based language to code Arduino-based robots, and a feature to automatically upload into the robot the programs generated by the students (by click button ![upload](src/media/images/enviar.png)).

## Supported Boards

![multiploN6](resources/MultiploN6.jpg)

* [Multiplo](http://multiplo.org) Arduino DuinoBot v1.2 (tested with RobotGroup's Multiplo N6)
* [Multiplo](http://multiplo.org) Arduino DuinoBot v2.3 (tested with RobotGroup's Multiplo N6 Max)

> Important note: Until [Multiplo](http://multiplo.org) doesn't release its HID Uploader v2.3 for linux, the automatic upload of the code (a.k.a the button ![upload](src/media/images/enviar.png)) **only works under windows**

## For Developers

### Compile project (For Web)

1. Clone current repo
1. `make` command will do the trick.
1. The distributable web page, for now, is the content of the folder `src` (there you can find the index.html)

### Compile project (Executables for Windows and Linux)

> Important note: for now, **the compiling process** can only be performed from UNIX sistems (like linux or Mac).

1. Just **the first time**, download node webkit using command `make downloadNW`

From there, to make executables you must:

1. If you want, build the project again (using simply `make`)
1. Use the command `make packLinux` or `make packWindows` depending on the desired target OS executable.
1. The distributable executables will be under folder `compiled/windows` (for win) and `compiled/linux` (for linux).
1. If, additionally, you would like the automatic upload ![upload](src/media/images/enviar.png) to work, read next section.

### Automatic Upload

For the automatic upload to work, the application should be distributed with a **complete Arduino IDE** within its folder structure.

This Arduino IDE should _be compliant with the target boards_. For example, latest release includes an Arduino IDE with HID Uploader from [Multiplo](http://multiplo.org)

Right now this means that _every time_ a `make pack...` is executed, _the arduino IDE folder should be copied_ to the compiled executable folder. Alternatively, one can mantain the Arduino IDE in a folder, and every time a `make pack...` is executed,  copy the compiled files to the folder with the Arduino IDE.

For now, Arduino IDE can be taken from the [latest release](https://github.com/uncmasmas/uncDuino/releases).

Future work: include an automatic arduino upload with `make downloadArduinoIDE` the same way that now `make downloadNW` works.
