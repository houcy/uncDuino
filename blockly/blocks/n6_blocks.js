/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2015 Marcos J. Gomez
 * https://github.com/mgomez4/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Helper functions for generating N6 (duinoblock 1.2 && 2.3) blocks.
 * @author mgomez4@famaf.unc.edu.ar (Marcos J. Gomez)
 */

goog.provide('Blockly.Blocks.n6_blocks');

goog.require('Blockly.Blocks');

Blockly.Blocks['n6_ultrasonic_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour(50);
    this.appendDummyInput()
	    .appendField("Sensor Ultrasonido")
      .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/b/b0/Twig_-_Ultrasonic_Ranger2.jpg/200px-Twig_-_Ultrasonic_Ranger2.jpg", 64, 64))
	    .appendField("PIN#")
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendField("Unidad")
        .appendField(new Blockly.FieldDropdown([["cm", "cm"],  ["inch", "inch"]]), "UNIT");
    this.setOutput(true, "Number");
    this.setTooltip('Este bloque nos da información de la distancia a la cual se encuentra un objeto.');
  }
};

Blockly.Blocks['n6_infrared_sensor'] = {

  helpUrl:'',
  init: function(){
    this.setColour(50);
    this.appendDummyInput()
      .appendField("Sensor Infrarrojo")
      .appendField("PIN#")
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};

Blockly.Blocks['n6_move_motors_direction'] = {
  helpUrl:"",
  init:function(){
    this.setColour(250);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/images/motores_simples.png",48,48))
      .appendField("Motores Simples")
      .appendField(new Blockly.FieldDropdown([["Frenar","stop"],["Avanzar","forward"],["Derecha","right"],["Izquierda","left"],["Retroceder","backward"]]),"DIRECTION");
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip("Permite programar al robot de la misma manera que si emplearíamos las flechas de los bloques simples.")
  }
};

Blockly.Blocks['n6_both_motors_move'] = {
  helpUrl:"",
  init:function() {
    this.setColour(250);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/images/motor_avanzado_doble.png",40,40))
      .appendField("Motores Avanzados")
      .appendField(new Blockly.FieldDropdown([["Frenar","stop"],["Avanzar","forward"],["Derecha","right"],["Izquierda","left"],["Retroceder","backward"]]),"DIRECTION");
    this.appendValueInput("SPEED","Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT).appendField("Velocidad (rpm)");
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip("Permite programar los dos motores (de ambas ruedas) de manera simultánea. Podemos definir la velocidad y —agregando el bloque correspondiente— el TIEMPO.")
  }
};

Blockly.Blocks['n6_one_motor_move'] = {
  helpUrl:"",
  init:function() {
    this.setColour(250);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/images/motor_avanzado_ind.png",40,40))
      .appendField("Motor x Motor")
      .appendField(new Blockly.FieldDropdown([["Motor0","motor0"],["Motor1","motor1"]]),"MOTOR");
    this.appendValueInput("SPEED","Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Velocidad (rpm)");
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip("Permite programar cada motor por separado. Podemos definir la velocidad y —agregando el bloque correspondiente— el TIEMPO.")
  }
};

Blockly.Blocks['base_delay_tomi'] = {
  helpUrl:"http://arduino.cc/en/Reference/delay",
  init:function(){
    this.setColour(250);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/images/delay.png",40,40))
      .appendField("Tiempo"); 
    this.appendValueInput("DELAY_TIME","Number")
      .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip("Delay specific time")
  }
};


Blockly.Blocks['n6_run_button'] = {
   helpUrl: '',
   init: function() {
     this.setColour(20);
     this.appendDummyInput()
		 .appendField("Boton Run")
		 .appendField(new Blockly.FieldDropdown([["Encendido", "ON"], ["Apagado", "OFF"]]), "STAT");
   	 this.setOutput(true, "Boolean");
     this.setTooltip(Blockly.LANG_LOGIC_BOOLEAN_TOOLTIP_1);
     this.setTooltip('Boton Run encendido o apagado');
   }
};
