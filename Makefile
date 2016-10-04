NWVERSION=v0.12.3
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
	cp -r ${PATHNW}/* ${OSFOLDER}
	rm ${OSFOLDER}/credits.html

downloadNW:
	mkdir -p nwjs
	cd nwjs && wget "https://dl.nwjs.io/${NWVERSION}/nwjs-${NWVERSION}-win-ia32.zip"
	cd nwjs && unzip nwjs-${NWVERSION}-win-ia32.zip
	rm nwjs/nwjs-${NWVERSION}-win-ia32.zip
	cd nwjs && wget "https://dl.nwjs.io/${NWVERSION}/nwjs-${NWVERSION}-linux-x64.tar.gz"
	cd nwjs && tar zxf nwjs-${NWVERSION}-linux-x64.tar.gz
	rm nwjs/nwjs-${NWVERSION}-linux-x64.tar.gz

setOSToLinux:
	$(eval OSFOLDER=$(TARGETFOLDER)/linux)
	$(eval PATHNW=nwjs/nwjs-$(NWVERSION)-linux-x64)

setOSToWin:
	$(eval OSFOLDER=$(TARGETFOLDER)/windows)
	$(eval PATHNW=nwjs/nwjs-$(NWVERSION)-win-ia32)

full: copyBlockly packWindows packLinux

.PHONY: copyBlockly
