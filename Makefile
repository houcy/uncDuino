NWVERSION=v0.12.3
ARDUINOVERSION=arduino-1.6.5-r5
APPNAME=UNCDuino
COMPILEDFOLDER=compiled

copyBlockly: closure-library
	python buildUNCDuino.py

closure-library:
		git clone https://github.com/google/closure-library

packLinux: setOSToLinux setupTargetFolder copyProject
	mv ${TARGETFOLDER}/nw ${TARGETFOLDER}/${APPNAME}

packWindows: setOSToWin setupTargetFolder copyProject
	mv ${TARGETFOLDER}/nw.exe ${TARGETFOLDER}/${APPNAME}.exe
	#cp -Rf ${TARGETFOLDER}/* ~/Descargas/${APPNAME}-Windows # For Alf Test

copyProject:
	cp -Rf src/* ${TARGETFOLDER}

setupTargetFolder: #Makes the folder, copies Node Webkit
	rm -rf ${TARGETFOLDER}
	mkdir -p ${TARGETFOLDER}
	@echo "=====> Copying NodeWebkit for ${OSNAME}"
	cp -r ${PATHNW}/* ${TARGETFOLDER}
	rm ${TARGETFOLDER}/credits.html
	cp -R arduinoIDE/${ARDUINOVERSION}-${OSNAME} ${TARGETFOLDER}/arduinoIDE

nwjs:
	mkdir -p nwjs
	@echo "=====> Downloading Node Webkit for Windows"
	cd nwjs && wget https://dl.nwjs.io/${NWVERSION}/nwjs-${NWVERSION}-win-ia32.zip
	cd nwjs && unzip nwjs-${NWVERSION}-win-ia32.zip
	rm nwjs/nwjs-${NWVERSION}-win-ia32.zip
	@echo "=====> Downloading Node Webkit for Linux"
	cd nwjs && wget https://dl.nwjs.io/${NWVERSION}/nwjs-${NWVERSION}-linux-x64.tar.gz
	cd nwjs && tar zxf nwjs-${NWVERSION}-linux-x64.tar.gz
	rm nwjs/nwjs-${NWVERSION}-linux-x64.tar.gz

packingSetup: nwjs arduinoIDE

testingSetup:
	bower install

test:
	firefox test/index.html

arduinoIDE:
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
	@echo BIG TODO: para esto hay que revisar el duinopack para linux en http://multiplo.org/es/duinopack-1/ y compararlo con un arduinoIDE de linux, para meter en duinoPackExtras/linux las diferencias
	@echo "=====> Installing DuinoPack for Linux"
	@echo Hay que hacer unos gcc mágicos, en el readme del duinoPack están... no es trivial.

setOSToLinux:
	$(eval TARGETFOLDER=$(COMPILEDFOLDER)/linux)
	$(eval OSNAME=linux)
	$(eval PATHNW=nwjs/nwjs-$(NWVERSION)-linux-x64)

setOSToWin:
	$(eval TARGETFOLDER=$(COMPILEDFOLDER)/windows)
	$(eval OSNAME=windows)
	$(eval PATHNW=nwjs/nwjs-$(NWVERSION)-win-ia32)

clean: # CAREFULLY... Will remove arduinoIDE, will need to install everything again
	rm -rf nwjs
	rm -rf arduinoIDE
	rm -rf closure-library
	rm -rf ${COMPILEDFOLDER}

.PHONY: copyBlockly test
