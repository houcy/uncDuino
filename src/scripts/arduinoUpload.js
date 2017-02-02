Arduino = {
    placas: {},
    robots: {},
    enviadores: [],
    //Constructores
    Placa: function(idHW){
        this.idHW = idHW;
        this.correccionDireccionMotores = '';
        this.pinM1 = 'M1_EN, M1_D0, M1_D1';
        this.pinM0 = 'M0_EN, M0_D0, M0_D1';
    },

    Robot: function(ancho,largo,distanciaDelEjeAlFrente){
        this.ancho = ancho;
        this.largo = largo;
        this.distanciaDelEjeAlFrente = distanciaDelEjeAlFrente;
        this.velocidadMotores = 50;
    },

    elegirEnviador: function(){
        this.enviadores.forEach(function(CEnv){
            var env = new CEnv();
            if(env.corresponde()){
                this.enviador = env;
                this.enviador.inicializar();
            }
        }.bind(this));
    },
};

Arduino.EnviadorOS = function(){
    this.nombreArchivoIno = 'programa';
}
Arduino.EnviadorOS.prototype = {
    escribirProgramaADisco: function(){
        var fs = require('fs');
        fs.mkdir(this.pathDirIno(), 0777, function(err) {
            if (err && err.code != 'EEXIST') {
                throw "No se pudo crear la carpeta del programa"
            } else {
                fs.writeFileSync(this.pathArchivoIno(), Blockly.Arduino.workspaceToCode(Blockly.mainWorkspace));
                console.log("Archivo creado en" + this.pathArchivoIno());
            }
        }.bind(this));


    },
    enviar: function(){
        var exec = require('child_process').exec;
        console.log("Comando corriendo:" + this.comando());
        exec(this.comando(), function(error, stdout, stderr) {
            popup('popupEnviar');
            console.log("Salida del comando:\n" + stdout + "\n");
            if(error){
                popupError("Salida del comando:\n" + stdout + "\nSalida de error:\n" + stderr + "\nError completo:\n" + error + "\n");
            };
        });
    },
    pathArchivoIno: function(){
        var path = require('path');
        return path.resolve(this.pathDirIno(), this.nombreArchivoIno + '.ino' )
    },

    pathDirIno: function(){ //Arduino requiere que para compilar la carpeta y el archivo se llamen igual
        var path = require('path');
        return path.resolve(path.dirname(process.execPath), this.nombreArchivoIno );
    },

    addPropsFrom: function(otherObj){ //FEEEOOOOO Esto es por la falta de herencia. TODO.
        for(attrname in otherObj){
            this[attrname] = otherObj[attrname];
        }
        return this;
    },

    path: function(){
      var path = require('path');
      return path.resolve(path.dirname(process.execPath),'arduinoIDE',this.ejecutableArduino());
    },

    corresponde: function(){
        if(typeof require === 'undefined') return false;
        var os = require('os');
        return os.platform() === this.platformName(); // && (process.arch === 'x64' || process.env.hasOwnProperty('PROCESSOR_ARCHITEW6432'));

    },
};

Arduino.EnviadorWindows = function(){};

Arduino.EnviadorWindows.prototype = (new Arduino.EnviadorOS()).addPropsFrom( {
    platformName: function(){
      return 'win32';
    },
    ejecutableArduino(){
      return 'arduino_debug.exe';
    },
    comando: function(){
      return '"' + this.path() + '" -v --port ' + Arduino.puerto + ' --board ' + Blockly.Arduino.configuracion.placa.idHW + ' --upload "' + this.pathArchivoIno() + '" ';
    },
    inicializar: function(){
      Arduino.puerto = "COM1";
    },
});

Arduino.EnviadorLinux = function(){};

Arduino.EnviadorLinux.prototype = (new Arduino.EnviadorOS()).addPropsFrom( {
    platformName: function(){
      return 'linux';
    },
    ejecutableArduino(){
      return 'arduino';
    },
    comando: function(){
        return '"' + this.path() + '" -v --port ' + Arduino.puerto + ' --board ' + Blockly.Arduino.configuracion.placa.idHW + ' --upload "' + this.pathArchivoIno() + '" ';
    },
    inicializar: function(){
      Arduino.puerto = "ttyUSB0";
    },
});

Arduino.Robot.prototype = {
    distanciaParaGirar: function(){
        // suponiendo que gira pivoteando sobre una rueda quieta
        return Math.max(0,this.ancho - this.distanciaDelEjeAlFrente);
    },
    delayGiro: function(){
        // suponiendo que gira pivoteando sobre una rueda quieta
        return this.delayPara(this.ancho * Math.PI / 4);
    },
    velocidad: function(){
        return this.velocidadMotores;
    },
    delayPara: function(distancia){
        // Única prueba: velocidad 50 en ambos motores, pilas llenas, delay 1000ms, distancia: 29cm
        // suponiendo que la relación velocidad <-> distancia es lineal
        return Math.round(distancia / 29 *  50 / this.velocidad() * 1000);
    },
};

Arduino.enviadores = [Arduino.EnviadorWindows,Arduino.EnviadorLinux];
Arduino.elegirEnviador();

///////////////////////////////////////////////////////////////
// Placas
///////////////////////////////////////////////////////////////

// Placa DuinoBot 2.3
Arduino.placas.duinobot23 = new Arduino.Placa("multiplo:avr:DuinoBotv2x_1284_HID");
Arduino.placas.duinobot23.correccionDireccionMotores = "motor1.setClockwise(false);\n  motor0.setClockwise(false);\n ";

// Placa DuinoBot 1.2
Arduino.placas.duinobot12 = new Arduino.Placa("multiplo:avr:DuinoBotv1x_HID");
Arduino.placas.duinobot12.correccionDireccionMotores = "motor1.setClockwise(false);\n ";

// Placa Arduino Nano
Arduino.placas.nano = new Arduino.Placa("arduino:avr:nano");
Arduino.placas.nano.pinM0 = '3, 4, 2';
Arduino.placas.nano.pinM1 = '6, 5, 7';

///////////////////////////////////////////////////////////////
// Robots
///////////////////////////////////////////////////////////////

// Multiplo N6 Max
Arduino.robots.multiploN6MAX = new Arduino.Robot(22,20,6);

// Multiplo N6
Arduino.robots.multiploN6 = Arduino.robots.multiploN6MAX; //Cambiar por new Robot con las medidas

// Multiplo Tomy
Arduino.robots.tomy = new Arduino.Robot(22,20,6); //ancho largo y distanciaDelEjeAlFrente

///////////////////////////////////////////////////////////////
// Configuracion
///////////////////////////////////////////////////////////////

Blockly.Arduino.configuracion = {
	robot: Arduino.robots.multiploN6MAX
		//para tener un objeto robot seteado, no importa el default porque se sobreescribe al iniciar la app.
};

///////////////////
// Funciones usadas desde el index
///////////////////

function mapFromDom(ids,to,transform){
    if(!transform) transform = function(x){return x};
    ids.forEach(function(id){
        to[id] = transform(document.getElementById(id).value);
    });
}

function guardarConfig(){
    mapFromDom(["pinIR", "pinUS", "pinLI", "pinLD"],Blockly.Arduino.configuracion);
    mapFromDom(["distanciaPorPaso", "esperaEntreInstrucciones", "correccionDistanciaDeteccion"],Blockly.Arduino.configuracion,parseInt);
    Blockly.Arduino.configuracion.placa = Arduino.placas[document.getElementById('placa').value];
    Blockly.Arduino.configuracion.robot.velocidadMotores = parseInt(document.getElementById("potenciaMotores").value);
    Blockly.Arduino.configuracion.robot.ancho = parseInt(document.getElementById("anchoRobot").value);
    Arduino.puerto = document.getElementById('puerto').value;
}

function enviarAlRobot(){
    if(!Arduino.enviador){
        popup('popupEnviar');
        popupError("Parece que esta función no está habilitada para tu sistema operativo. Vas a tener que copiar manualmente el código de la solapa \"Arduino\" al programa Arduino IDE")
        return;
    };
    Arduino.enviador.escribirProgramaADisco();
    Arduino.enviador.enviar();
}
