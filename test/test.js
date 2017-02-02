var expect = chai.expect;

var dget = function (id) {
	//var iframe = document.getElementById('uncduino');
	var iframe = window.frames['uncduino'];
	var innerDoc = iframe.document || iframe.contentDocument || iframe.contentWindow.document;
	return innerDoc[id];
};

var valueFromId = function(id) {
	return dget('getElementById')(id);
};

console.log(":" + valueFromId('placa') + ":");

describe('Dialogo Configuracion', function() {
  describe('Defaults', function() {
		it('Default placa', function() {
			expect(Arduino.placas[valueFromId('placa')]).to.equal(Blockly.Arduino.configuracion.placa);
		});

		var assertDefaultOk = function (id) {
	    it('Default ' + id, function() {
				expect(valueFromId(id)).to.equal(Blockly.Arduino.configuracion[id]);
	    });
		};

		assertDefaultOk('pinIR');
		assertDefaultOk('pinUS');
		assertDefaultOk('pinLI');
		assertDefaultOk('pinLD');
		assertDefaultOk('distanciaPorPaso');
		assertDefaultOk('esperaEntreInstrucciones');
		assertDefaultOk('correccionDistanciaDeteccion');
		assertDefaultOk('placa');

		it('Default potenciaMotores', function() {
			expect(valueFromId('potenciaMotores')).to.equal(Blockly.Arduino.configuracion.robot.velocidadMotores);
		});

		it('Default anchoRobot', function() {
			expect(valueFromId('anchoRobot')).to.equal(Blockly.Arduino.configuracion.robot.ancho);
		});

		it('Default puerto', function() {
			expect(valueFromId('puerto')).to.equal(Arduino.puerto);
		});
  });
});


describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      expect([1,2,3].indexOf(4)).to.equal(-1);
    });
  });
});
