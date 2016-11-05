NWVERSION=v0.12.3
ARDUINOVERSION=arduino-1.6.5-r5
APPNAME=UNCDuino
TARGETFOLDER=compiled

copyBlockly:
	python buildUNCDuino.py

packLinux: setOSToLinux setupOSFolder copyProject
	mv ${OSFOLDER}/nw ${OSFOLDER}/${APPNAME}

packWindows: setOSToWin setupOSFolder copyProject
	mv ${OSFOLDER}/nw.exe ${OSFOLDER}/${APPNAME}.exe
	#cp -Rf ${OSFOLDER}/* ~/Descargas/${APPNAME}-Windows # For Alf Test

copyProject:
	cp -Rf src/* ${OSFOLDER}

setupOSFolder: #Makes the folder, copies Node Webkit
	rm -rf ${OSFOLDER}
	mkdir -p ${OSFOLDER}
	echo "=====> Copying NodeWebkit for ${OSNAME}"
	cp -r ${PATHNW}/* ${OSFOLDER}
	rm ${OSFOLDER}/credits.html
	cp -R arduinoIDE/${ARDUINOVERSION}-${OSNAME} ${OSFOLDER}/arduinoIDE


downloadNW:
	mkdir -p nwjs
	@echo "=====> Downloading Node Webkit for Windows"
	cd nwjs && wget "https://dl.nwjs.io/${NWVERSION}/nwjs-${NWVERSION}-win-ia32.zip"
	cd nwjs && unzip nwjs-${NWVERSION}-win-ia32.zip
	rm nwjs/nwjs-${NWVERSION}-win-ia32.zip
	@echo "=====> Downloading Node Webkit for Linux"
	cd nwjs && wget "https://dl.nwjs.io/${NWVERSION}/nwjs-${NWVERSION}-linux-x64.tar.gz"
	cd nwjs && tar zxf nwjs-${NWVERSION}-linux-x64.tar.gz
	rm nwjs/nwjs-${NWVERSION}-linux-x64.tar.gz

initialSetup: downloadNW downloadDuinoPack

downloadDuinoPack:
	mkdir -p arduinoIDE/
	@echo "=====> Downloading ArduinoIDE for Windows"
	cd arduinoIDE && wget https://downloads.arduino.cc/${ARDUINOVERSION}-windows.zip
	cd arduinoIDE && unzip ${ARDUINOVERSION}-windows.zip
	cd arduinoIDE && rm ${ARDUINOVERSION}-windows.zip
	cd arduinoIDE && mv ${ARDUINOVERSION} ${ARDUINOVERSION}-windows
	@echo "=====> Copying DuinoPack extras"
	cp -rf duinoPackExtras/windows/* arduinoIDE/${ARDUINOVERSION}-windows/
	@echo "=====> Downloading ArduinoIDE for Linux"
	cd arduinoIDE && wget https://downloads.arduino.cc/${ARDUINOVERSION}-linux32.tar.xz
	cd arduinoIDE && tar xf ${ARDUINOVERSION}-linux32.tar.xz
	cd arduinoIDE && rm ${ARDUINOVERSION}-linux32.tar.xz
	cd arduinoIDE && mv ${ARDUINOVERSION} ${ARDUINOVERSION}-linux
	@echo "=====> Copying DuinoPack extras"
	@echo BIG TODO
	@echo "=====> Installing DuinoPack for Linux"
	@echo BIG TODO

setOSToLinux:
	$(eval OSFOLDER=$(TARGETFOLDER)/linux)
	$(eval OSNAME=linux)
	$(eval PATHNW=nwjs/nwjs-$(NWVERSION)-linux-x64)

setOSToWin:
	$(eval OSFOLDER=$(TARGETFOLDER)/windows)
	$(eval OSNAME=windows)
	$(eval PATHNW=nwjs/nwjs-$(NWVERSION)-win-ia32)

full: copyBlockly packWindows packLinux

.PHONY: copyBlockly
