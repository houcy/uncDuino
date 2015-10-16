// Do not edit this file; automatically generated by build.py.
'use strict';

Blockly.Arduino=new Blockly.Generator("Arduino");Blockly.Arduino.addReservedWords("setup,loop,if,else,for,switch,case,while,do,break,continue,return,goto,define,include,HIGH,LOW,INPUT,OUTPUT,INPUT_PULLUP,true,false,interger, constants,floating,point,void,bookean,char,unsigned,byte,int,word,long,float,double,string,String,array,static, volatile,const,sizeof,pinMode,digitalWrite,digitalRead,analogReference,analogRead,analogWrite,tone,noTone,shiftOut,shitIn,pulseIn,millis,micros,delay,delayMicroseconds,min,max,abs,constrain,map,pow,sqrt,sin,cos,tan,randomSeed,random,lowByte,highByte,bitRead,bitWrite,bitSet,bitClear,bit,attachInterrupt,detachInterrupt,interrupts,noInterrupts");
Blockly.Arduino.ORDER_ATOMIC=0;Blockly.Arduino.ORDER_UNARY_POSTFIX=1;Blockly.Arduino.ORDER_UNARY_PREFIX=2;Blockly.Arduino.ORDER_MULTIPLICATIVE=3;Blockly.Arduino.ORDER_ADDITIVE=4;Blockly.Arduino.ORDER_SHIFT=5;Blockly.Arduino.ORDER_RELATIONAL=6;Blockly.Arduino.ORDER_EQUALITY=7;Blockly.Arduino.ORDER_BITWISE_AND=8;Blockly.Arduino.ORDER_BITWISE_XOR=9;Blockly.Arduino.ORDER_BITWISE_OR=10;Blockly.Arduino.ORDER_LOGICAL_AND=11;Blockly.Arduino.ORDER_LOGICAL_OR=12;Blockly.Arduino.ORDER_CONDITIONAL=13;
Blockly.Arduino.ORDER_ASSIGNMENT=14;Blockly.Arduino.ORDER_NONE=99;var profile={arduino:{description:"Arduino standard-compatible board",digital:[["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["10","10"],["11","11"],["12","12"],["13","13"],["A0","A0"],["A1","A1"],["A2","A2"],["A3","A3"],["A4","A4"],["A5","A5"]],analog:[["A0","A0"],["A1","A1"],["A2","A2"],["A3","A3"],["A4","A4"],["A5","A5"]],serial:9600},arduino_mega:{description:"Arduino Mega-compatible board"}};
profile["default"]=profile.arduino;
Blockly.Arduino.init=function(a){Blockly.Arduino.definitions_=Object.create(null);Blockly.Arduino.setups_=Object.create(null);Blockly.Arduino.variableDB_?Blockly.Arduino.variableDB_.reset():Blockly.Arduino.variableDB_=new Blockly.Names(Blockly.Arduino.RESERVED_WORDS_);var b=[];a=Blockly.Variables.allVariables(a);for(var c=0;c<a.length;c++)b[c]="int "+Blockly.Arduino.variableDB_.getName(a[c],Blockly.Variables.NAME_TYPE)+";\n";Blockly.Arduino.definitions_.variables=b.join("\n")};
Blockly.Arduino.finish=function(a){a="  "+a.replace(/\n/g,"\n  ");a=a.replace(/\n\s+$/,"\n");a="void loop() \n{\n"+a+"\n}";var b=[],c=[],d=[],e;for(e in Blockly.Arduino.definitions_){var f=Blockly.Arduino.definitions_[e];f.match(/#define/)?b.push(f):f.match(/^#include/)?c.push(f):d.push(f)}f=[];for(e in Blockly.Arduino.setups_)f.push(Blockly.Arduino.setups_[e]);return(b.join("\n")+"\n\n"+c.join("\n")+"\n\n"+d.join("\n")+"\nvoid setup() \n{\n  "+f.join("\n  ")+"\n}\n\n").replace(/\n\n+/g,"\n\n").replace(/\n*$/,
"\n\n\n")+a};Blockly.Arduino.scrubNakedValue=function(a){return a+";\n"};Blockly.Arduino.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/\$/g,"\\$").replace(/'/g,"\\'");return'"'+a+'"'};
Blockly.Arduino.scrub_=function(a,b){if(null===b)return"";var c="";if(!a.outputConnection||!a.outputConnection.targetConnection){var d=a.getCommentText();d&&(c+=Blockly.Arduino.prefixLines(d,"// ")+"\n");for(var e=0;e<a.inputList.length;e++)a.inputList[e].type==Blockly.INPUT_VALUE&&(d=a.inputList[e].connection.targetBlock())&&(d=Blockly.Arduino.allNestedComments(d))&&(c+=Blockly.Arduino.prefixLines(d,"// "))}e=a.nextConnection&&a.nextConnection.targetBlock();e=Blockly.Arduino.blockToCode(e);return c+
b+e};Blockly.Arduino.loops={};
Blockly.Arduino.controls_for=function(){var a=Blockly.Arduino.variableDB_.getName(this.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),b=Blockly.Arduino.valueToCode(this,"FROM",Blockly.Arduino.ORDER_ASSIGNMENT)||"0",c=Blockly.Arduino.valueToCode(this,"TO",Blockly.Arduino.ORDER_ASSIGNMENT)||"0",d=Blockly.Arduino.statementToCode(this,"DO");Blockly.Arduino.INFINITE_LOOP_TRAP&&(d=Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+this.id+"'")+d);if(b.match(/^-?\d+(\.\d+)?$/)&&c.match(/^-?\d+(\.\d+)?$/))var e=
parseFloat(b)<=parseFloat(c),d="for ("+a+" = "+b+"; "+a+(e?" <= ":" >= ")+c+"; "+a+(e?"++":"--")+") {\n"+d+"}\n";else d="",e=b,b.match(/^\w+$/)||b.match(/^-?\d+(\.\d+)?$/)||(e=Blockly.Arduino.variableDB_.getDistinctName(a+"_start",Blockly.Variables.NAME_TYPE),d+="int "+e+" = "+b+";\n"),b=c,c.match(/^\w+$/)||c.match(/^-?\d+(\.\d+)?$/)||(b=Blockly.Arduino.variableDB_.getDistinctName(a+"_end",Blockly.Variables.NAME_TYPE),d+="int "+b+" = "+c+";\n"),d+="for ("+a+" = "+e+";\n    ("+e+" <= "+b+") ? "+a+
" <= "+b+" : "+a+" >= "+b+";\n    "+a+" += ("+e+" <= "+b+") ? 1 : -1) {\n"+branch0+"}\n";return d};Blockly.Arduino.controls_whileUntil=function(){var a="UNTIL"==this.getFieldValue("MODE"),b=Blockly.Arduino.valueToCode(this,"BOOL",a?Blockly.Arduino.ORDER_LOGICAL_NOT:Blockly.Arduino.ORDER_NONE)||"false",c=Blockly.Arduino.statementToCode(this,"DO");Blockly.Arduino.INFINITE_LOOP_TRAP&&(c=Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+this.id+"'")+c);a&&(b="!"+b);return"while ("+b+") {\n"+c+"}\n"};Blockly.Arduino.base={};Blockly.Arduino.base_delay=function(){return"delay("+(Blockly.Arduino.valueToCode(this,"DELAY_TIME",Blockly.Arduino.ORDER_ATOMIC)||"1000")+");\n"};Blockly.Arduino.base_map=function(){var a=Blockly.Arduino.valueToCode(this,"NUM",Blockly.Arduino.ORDER_NONE),b=Blockly.Arduino.valueToCode(this,"DMAX",Blockly.Arduino.ORDER_ATOMIC);return["map("+a+", 0, 1024, 0, "+b+")",Blockly.Arduino.ORDER_NONE]};
Blockly.Arduino.inout_buildin_led=function(){var a=this.getFieldValue("STAT");Blockly.Arduino.setups_.setup_output_13="pinMode(13, OUTPUT);";return"digitalWrite(13, "+a+");\n"};Blockly.Arduino.inout_digital_write=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("STAT");Blockly.Arduino.setups_["setup_output_"+a]="pinMode("+a+", OUTPUT);";return"digitalWrite("+a+", "+b+");\n"};
Blockly.Arduino.inout_digital_read=function(){var a=this.getFieldValue("PIN");Blockly.Arduino.setups_["setup_input_"+a]="pinMode("+a+", INPUT);";return["digitalRead("+a+")",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.inout_analog_write=function(){var a=this.getFieldValue("PIN"),b=Blockly.Arduino.valueToCode(this,"NUM",Blockly.Arduino.ORDER_ATOMIC);return"analogWrite("+a+", "+b+");\n"};Blockly.Arduino.inout_analog_read=function(){return["analogRead("+this.getFieldValue("PIN")+")",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.inout_tone=function(){var a=this.getFieldValue("PIN"),b=Blockly.Arduino.valueToCode(this,"NUM",Blockly.Arduino.ORDER_ATOMIC);Blockly.Arduino.setups_["setup_output"+a]="pinMode("+a+", OUTPUT);";return"tone("+a+", "+b+");\n"};Blockly.Arduino.inout_notone=function(){var a=this.getFieldValue("PIN");Blockly.Arduino.setups_["setup_output"+a]="pinMode("+a+", OUTPUT);";return"noTone("+a+");\n"};
Blockly.Arduino.inout_highlow=function(){return["HIGH"==this.getFieldValue("BOOL")?"HIGH":"LOW",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.servo_move=function(){var a=this.getFieldValue("PIN"),b=Blockly.Arduino.valueToCode(this,"DEGREE",Blockly.Arduino.ORDER_ATOMIC);Blockly.Arduino.definitions_.define_servo="#include <Servo.h>\n";Blockly.Arduino.definitions_["var_servo"+a]="Servo servo_"+a+";\n";Blockly.Arduino.setups_["setup_servo_"+a]="servo_"+a+".attach("+a+");\n";return"servo_"+a+".write("+b+");\n"};
Blockly.Arduino.servo_read_degrees=function(){var a=this.getFieldValue("PIN");Blockly.Arduino.definitions_.define_servo="#include &lt;Servo.h&gt;\n";Blockly.Arduino.definitions_["var_servo"+a]="Servo servo_"+a+";\n";Blockly.Arduino.setups_["setup_servo_"+a]="servo_"+a+".attach("+a+");\n";return"servo_"+a+".read()"};
Blockly.Arduino.serial_print=function(){var a=Blockly.Arduino.valueToCode(this,"CONTENT",Blockly.Arduino.ORDER_ATOMIC)||"0";Blockly.Arduino.setups_["setup_serial_"+profile.default.serial]="Serial.begin("+profile.default.serial+");\n";return"Serial.println("+a+");\n"};Blockly.Arduino.variables={};Blockly.Arduino.variables_get=function(){return[Blockly.Arduino.variableDB_.getName(this.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.variables_declare=function(){this.getFieldValue("TYPE");var a=Blockly.Arduino.valueToCode(this,"VALUE",Blockly.Arduino.ORDER_ASSIGNMENT)||"0",b=Blockly.Arduino.variableDB_.getName(this.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE);Blockly.Arduino.setups_["setup_var"+b]=b+" = "+a+";\n";return""};
Blockly.Arduino.variables_set=function(){var a=Blockly.Arduino.valueToCode(this,"VALUE",Blockly.Arduino.ORDER_ASSIGNMENT)||"0";return Blockly.Arduino.variableDB_.getName(this.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE)+" = "+a+";\n"};Blockly.Arduino.math={};Blockly.Arduino.math_number=function(){var a=window.parseFloat(this.getFieldValue("NUM"));return[a,0>a?Blockly.Arduino.ORDER_UNARY_PREFIX:Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.math_arithmetic=function(){var a=this.getFieldValue("OP"),b=Blockly.Arduino.math_arithmetic.OPERATORS[a],a=b[0],b=b[1],c=Blockly.Arduino.valueToCode(this,"A",b)||"0",d=Blockly.Arduino.valueToCode(this,"B",b)||"0";return a?[c+a+d,b]:["Math.pow("+c+", "+d+")",Blockly.Arduino.ORDER_UNARY_POSTFIX]};
Blockly.Arduino.math_arithmetic.OPERATORS={ADD:[" + ",Blockly.Arduino.ORDER_ADDITIVE],MINUS:[" - ",Blockly.Arduino.ORDER_ADDITIVE],MULTIPLY:[" * ",Blockly.Arduino.ORDER_MULTIPLICATIVE],DIVIDE:[" / ",Blockly.Arduino.ORDER_MULTIPLICATIVE],POWER:[null,Blockly.Arduino.ORDER_NONE]};
Blockly.Arduino.math_random_int=function(){var a=Blockly.Arduino.valueToCode(this,"FROM",Blockly.Arduino.ORDER_NONE)||"0",b=Blockly.Arduino.valueToCode(this,"TO",Blockly.Arduino.ORDER_NONE)||"0";if(!Blockly.Arduino.definitions_.math_random_int){var c=Blockly.Arduino.variableDB_.getDistinctName("math_random_int",Blockly.Generator.NAME_TYPE);Blockly.Arduino.math_random_int.random_function=c;var d=[];d.push("int "+c+"(int a, int b) {");d.push("  int c = b + 1;");d.push("  return int(random(a,c));");
d.push("}");Blockly.Arduino.definitions_.math_random_int=d.join("\n")}return[Blockly.Arduino.math_random_int.random_function+"("+a+", "+b+")",Blockly.Arduino.ORDER_UNARY_POSTFIX]};Blockly.Arduino.n6_blocks={};Blockly.Arduino.n6_ultrasonic_sensor=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("UNIT");Blockly.Arduino.definitions_.define_ultrasonic="#include <Ping.h>\n";Blockly.Arduino.definitions_["var_ultrasonic"+a]="PingSensor ultrasonic_"+a+"("+a+");\n";return["cm"===b?"ultrasonic_"+a+".measureCM()":"ultrasonic_"+a+".measureInches()",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.n6_infrared_sensor=function(){var a=this.getFieldValue("PIN");Blockly.Arduino.setups_.setup_infrared="pinMode("+a+", INPUT);\n";return"analogRead("+a+")\n"};
Blockly.Arduino.n6_one_motor_move=function(){var a=this.getFieldValue("MOTOR"),b=Blockly.Arduino.valueToCode(this,"SPEED",Blockly.Arduino.ORDER_ATOMIC)||"127";Blockly.Arduino.definitions_.define_DCmotor="#include <DCMotor.h>\n";"motor0"===a?(Blockly.Arduino.definitions_.define_motor0="DCMotor motor0(M0_EN, M0_D0, M0_D1);\n",a="motor0.setSpeed("+b+");\n"):(Blockly.Arduino.definitions_.define_motor1="DCMotor motor1(M1_EN, M1_D0, M1_D1);\n",a="motor1.setSpeed("+b+");\n");Blockly.Arduino.setups_.setup_motor=
"motor1.setClockwise(false);\n ";return a};
Blockly.Arduino.n6_both_motors_move=function(){var a=this.getFieldValue("DIRECTION"),b=Blockly.Arduino.valueToCode(this,"SPEED",Blockly.Arduino.ORDER_ATOMIC)||"127",c="";Blockly.Arduino.definitions_.define_DCmotor="#include <DCMotor.h>\n";Blockly.Arduino.definitions_.define_motor0="DCMotor motor0(M0_EN, M0_D0, M0_D1);\n";Blockly.Arduino.definitions_.define_motor1="DCMotor motor1(M1_EN, M1_D0, M1_D1);\n";Blockly.Arduino.setups_.setup_motor="motor1.setClockwise(false);\n ";"forward"===a?(Blockly.Arduino.definitions_.define_forward=
"void avanzar()\n{\n  motor0.setSpeed("+b+");\n  motor1.setSpeed("+b+");\n}\n",c="avanzar();\n"):"right"===a?(Blockly.Arduino.definitions_.define_right="void girar_derecha()\n{\n  motor0.setSpeed(0);\n  motor1.setSpeed("+b+");\n}\n\n",c="girar_derecha();\n"):"left"===a?(Blockly.Arduino.definitions_.define_left="void girar_izquierda()\n{\n  motor0.setSpeed("+b+");\n  motor1.setSpeed(0);\n}\n\n",c="girar_izquierda();\n"):"backward"===a?(Blockly.Arduino.definitions_.define_backward="void retroceder()\n{\n  motor0.setSpeed(-"+
b+");\n  motor1.setSpeed(-"+b+");\n}\n\n",c="retroceder();\n"):"stop"===a&&(Blockly.Arduino.definitions_.define_stop="void frenar()\n{\n  motor0.setSpeed(0);\n  motor1.setSpeed(0);\n  delay(1000);\n}\n\n",c="frenar();\n");return c};Blockly.Arduino.n6_run_button=function(){var a=this.getTitleValue("STAT");Blockly.Arduino.setups_.setup_button="pinMode(RUN_SW, INPUT_PULLUP);\n";return["ON"===a?"!(digitalRead(RUN_SW))":"(digitalRead(RUN_SW))",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.texts={};Blockly.Arduino.text=function(){return[Blockly.Arduino.quote_(this.getFieldValue("TEXT")),Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.procedures={};
Blockly.Arduino.procedures_defreturn=function(){var a=Blockly.Arduino.variableDB_.getName(this.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),b=Blockly.Arduino.statementToCode(this,"STACK");Blockly.Arduino.INFINITE_LOOP_TRAP&&(b=Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+this.id+"'")+b);var c=Blockly.Arduino.valueToCode(this,"RETURN",Blockly.Arduino.ORDER_NONE)||"";c&&(c="  return "+c+";\n");for(var d=c?"int":"void",e=[],f=0;f<this.arguments_.length;f++)e[f]="int "+Blockly.Arduino.variableDB_.getName(this.arguments_[f],
Blockly.Variables.NAME_TYPE);b=d+" "+a+"("+e.join(", ")+") {\n"+b+c+"}\n";b=Blockly.Arduino.scrub_(this,b);Blockly.Arduino.definitions_[a]=b;return null};Blockly.Arduino.procedures_defnoreturn=Blockly.Arduino.procedures_defreturn;
Blockly.Arduino.procedures_callreturn=function(){for(var a=Blockly.Arduino.variableDB_.getName(this.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),b=[],c=0;c<this.arguments_.length;c++)b[c]=Blockly.Arduino.valueToCode(this,"ARG"+c,Blockly.Arduino.ORDER_NONE)||"null";return[a+"("+b.join(", ")+")",Blockly.Arduino.ORDER_UNARY_POSTFIX]};
Blockly.Arduino.procedures_callnoreturn=function(){for(var a=Blockly.Arduino.variableDB_.getName(this.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),b=[],c=0;c<this.arguments_.length;c++)b[c]=Blockly.Arduino.valueToCode(this,"ARG"+c,Blockly.Arduino.ORDER_NONE)||"null";return a+"("+b.join(", ")+");\n"};
Blockly.Arduino.procedures_ifreturn=function(){var a="if ("+(Blockly.Arduino.valueToCode(this,"CONDITION",Blockly.Arduino.ORDER_NONE)||"false")+") {\n";if(this.hasReturnValue_)var b=Blockly.Arduino.valueToCode(this,"VALUE",Blockly.Arduino.ORDER_NONE)||"null",a=a+("  return "+b+";\n");else a+="  return;\n";return a+"}\n"};Blockly.Arduino.Pitches="/*************************************************\n * Public Constants (Pitches)\n *************************************************/\n";
var pitches=[{note:"B0 ",frequency:"31"},{note:"C1 ",frequency:"33"},{note:"CS1",frequency:"35"},{note:"D1 ",frequency:"37"},{note:"DS1",frequency:"39"},{note:"E1 ",frequency:"41"},{note:"F1 ",frequency:"44"},{note:"FS1",frequency:"46"},{note:"G1 ",frequency:"49"},{note:"GS1",frequency:"52"},{note:"A1 ",frequency:"55"},{note:"AS1",frequency:"58"},{note:"B1 ",frequency:"62"},{note:"C2 ",frequency:"65"},{note:"CS2",frequency:"69"},{note:"D2 ",frequency:"73"},{note:"DS2",frequency:"78"},{note:"E2 ",
frequency:"82"},{note:"F2 ",frequency:"87"},{note:"FS2",frequency:"93"},{note:"G2 ",frequency:"98"},{note:"GS2",frequency:"104"},{note:"A2 ",frequency:"110"},{note:"AS2",frequency:"117"},{note:"B2 ",frequency:"123"},{note:"C3 ",frequency:"131"},{note:"CS3",frequency:"139"},{note:"D3 ",frequency:"147"},{note:"DS3",frequency:"156"},{note:"E3 ",frequency:"165"},{note:"F3 ",frequency:"175"},{note:"FS3",frequency:"185"},{note:"G3 ",frequency:"196"},{note:"GS3",frequency:"208"},{note:"A3 ",frequency:"220"},
{note:"AS3",frequency:"233"},{note:"B3 ",frequency:"247"},{note:"C4 ",frequency:"262"},{note:"CS4",frequency:"277"},{note:"D4 ",frequency:"294"},{note:"DS4",frequency:"311"},{note:"E4 ",frequency:"330"},{note:"F4 ",frequency:"349"},{note:"FS4",frequency:"370"},{note:"G4 ",frequency:"392"},{note:"GS4",frequency:"415"},{note:"A4 ",frequency:"440"},{note:"AS4",frequency:"466"},{note:"B4 ",frequency:"494"},{note:"C5 ",frequency:"523"},{note:"CS5",frequency:"554"},{note:"D5 ",frequency:"587"},{note:"DS5",
frequency:"622"},{note:"E5 ",frequency:"659"},{note:"F5 ",frequency:"698"},{note:"FS5",frequency:"740"},{note:"G5 ",frequency:"784"},{note:"GS5",frequency:"831"},{note:"A5 ",frequency:"880"},{note:"AS5",frequency:"932"},{note:"B5 ",frequency:"988"},{note:"C6 ",frequency:"1047"},{note:"CS6",frequency:"1109"},{note:"D6 ",frequency:"1175"},{note:"DS6",frequency:"1245"},{note:"E6 ",frequency:"1319"},{note:"F6 ",frequency:"1397"},{note:"FS6",frequency:"1480"},{note:"G6 ",frequency:"1568"},{note:"GS6",
frequency:"1661"},{note:"A6 ",frequency:"1760"},{note:"AS6",frequency:"1865"},{note:"B6 ",frequency:"1976"},{note:"C7 ",frequency:"2093"},{note:"CS7",frequency:"2217"},{note:"D7 ",frequency:"2349"},{note:"DS7",frequency:"2489"},{note:"E7 ",frequency:"2637"},{note:"F7 ",frequency:"2794"},{note:"FS7",frequency:"2960"},{note:"G7 ",frequency:"3136"},{note:"GS7",frequency:"3322"},{note:"A7 ",frequency:"3520"},{note:"AS7",frequency:"3729"},{note:"B7 ",frequency:"3951"},{note:"C8 ",frequency:"4186"},{note:"CS8",
frequency:"4435"},{note:"D8 ",frequency:"4699"},{note:"DS8",frequency:"4978"}];pitches.forEach(function(a){Blockly.Arduino.Pitches=Blockly.Arduino.Pitches+"#define NOTE_"+a.note+" "+a.frequency+"\n"});/*

 Visual Blocks Editor

 Copyright 2015 Marcos J. Gomez
 https://github.com/mgomez4/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
Blockly.Arduino.addMotorsSetUp=function(){Blockly.Arduino.definitions_.define_DCmotor="#include <DCMotor.h>\n";Blockly.Arduino.definitions_.define_motor0="DCMotor motor0(M0_EN, M0_D0, M0_D1);\n";Blockly.Arduino.definitions_.define_motor1="DCMotor motor1(M1_EN, M1_D0, M1_D1);\n";Blockly.Arduino.setups_.setup_motor=Blockly.Arduino.configuracion.placa.correccionDireccionMotores};
Blockly.Arduino.n6_move_foward=function(){Blockly.Arduino.addMotorsSetUp();var a=Blockly.Arduino.configuracion;Blockly.Arduino.definitions_.define_forward="void avanzar()\n{\n  motor0.setSpeed("+a.robot.velocidad()+");//input a simulation value to set the speed\n  motor1.setSpeed("+a.robot.velocidad()+");\n  delay("+a.robot.delayPara(a.distanciaPorPaso)+");\n  motor0.setSpeed(0);//input a simulation value to set the speed\n  motor1.setSpeed(0);\n  delay("+a.esperaEntreInstrucciones+");\n}\n";return"avanzar();\n"};
Blockly.Arduino.n6_turn_right=function(){Blockly.Arduino.addMotorsSetUp();var a=Blockly.Arduino.configuracion;Blockly.Arduino.definitions_.define_right="void girar_derecha()\n{\n  motor0.setSpeed(0);//input a simulation value to set the speed\n  motor1.setSpeed("+a.robot.velocidad()+");\n  delay("+a.robot.delayGiro()+");\n  motor0.setSpeed(0);//input a simulation value to set the speed\n  motor1.setSpeed(0);\n  delay("+a.esperaEntreInstrucciones+");\n}\n";return"girar_derecha();\n"};
Blockly.Arduino.n6_turn_left=function(){Blockly.Arduino.addMotorsSetUp();var a=Blockly.Arduino.configuracion;Blockly.Arduino.definitions_.define_left="void girar_izquierda()\n{\n  motor0.setSpeed("+a.robot.velocidad()+");//input a simulation value to set the speed\n  motor1.setSpeed(0);\n  delay("+a.robot.delayGiro()+");\n  motor0.setSpeed(0);//input a simulation value to set the speed\n  motor1.setSpeed(0);\n  delay("+a.esperaEntreInstrucciones+");\n}\n";return"girar_izquierda();\n"};
Blockly.Arduino.n6_melody=function(){var a=Blockly.Arduino.configuracion,b=this.getFieldValue("SONG"),c="";Blockly.Arduino.setups_.setup_speaker="pinMode(SPEAKER, OUTPUT);\n";Blockly.Arduino.definitions_.define_melody=Blockly.Arduino.Pitches;Blockly.Arduino.definitions_.define_melody_init_1="int melody1[] = {NOTE_C4, NOTE_G3,NOTE_G3, NOTE_A3, NOTE_G3,0, NOTE_B3, NOTE_C4};\nint noteDurations1[] = {4, 8, 8, 4,4,4,4,4 };\n";Blockly.Arduino.definitions_.define_melody_init_2="int melody2[] = {NOTE_G4,NOTE_C5,NOTE_C5,NOTE_D5,NOTE_C5,NOTE_B4,NOTE_A4,NOTE_A4, NOTE_A4,NOTE_D5,NOTE_D5,NOTE_E5,NOTE_D5,NOTE_C5,NOTE_B4,NOTE_G4, NOTE_G4,NOTE_E5,NOTE_E5,NOTE_F5,NOTE_E5,NOTE_D5,NOTE_C5,NOTE_A5,NOTE_G4,NOTE_G4,NOTE_A4,NOTE_D5,NOTE_B4,NOTE_C5, NOTE_G4,NOTE_C5,NOTE_C5,NOTE_D5,NOTE_C5,NOTE_B4,NOTE_A4,NOTE_A4, NOTE_A4,NOTE_D5,NOTE_D5,NOTE_E5,NOTE_D5,NOTE_C5,NOTE_B4,NOTE_G4, NOTE_G4,NOTE_E5,NOTE_E5,NOTE_F5,NOTE_E5,NOTE_D5,NOTE_C5,NOTE_A5,NOTE_G4,NOTE_G4,NOTE_A4,NOTE_D5,NOTE_B4,NOTE_C5, NOTE_G4,NOTE_C5,NOTE_C5,NOTE_C5,NOTE_B4,NOTE_B4,NOTE_C5,NOTE_B4,NOTE_A4,NOTE_G4, NOTE_D5,NOTE_E5,NOTE_D5,NOTE_D5,NOTE_C5,NOTE_C5,NOTE_G5,NOTE_G4,NOTE_G4,NOTE_G4,NOTE_A4,NOTE_D5,NOTE_B4,NOTE_C5};\nint noteDurations2[] = {4,4,8,8,8,8,4,4, 4,4,8,8,8,8,4,4, 4,4,8,8,8,8,4,4,8,8,4,4,4,2, 4,4,8,8,8,8,4,4, 4,4,8,8,8,8,4,4, 4,4,8,8,8,8,4,4,8,8,4,4,4,2, 4,4,4,4,2,4,4,4,4,2, 4,4,8,8,8,8,4,4,8,8,4,4,4,2};\n";
"TAPA"===b?c="for (int thisNote = 0; thisNote < 8; thisNote++) {\n  int noteDuration = 1000/noteDurations1[thisNote];\n  tone(SPEAKER, melody1[thisNote],noteDuration);\n  int pauseBetweenNotes = noteDuration * 1.30; \n  delay(pauseBetweenNotes);\n  noTone(SPEAKER);\n}\ndelay("+a.esperaEntreInstrucciones+");\n":"NAVIDAD"===b&&(c="for (int thisNote = 0; thisNote < 84; thisNote++) {\n  int noteDuration = 1000/noteDurations2[thisNote];\n  tone(SPEAKER, melody2[thisNote],noteDuration);\n  int pauseBetweenNotes = noteDuration * 1.30; \n  delay(pauseBetweenNotes);\n  noTone(SPEAKER);\n}\ndelay("+
a.esperaEntreInstrucciones+");\n");return c};Blockly.Arduino.ultrasonido={};Blockly.Arduino.ultrasonido.corregirCM=function(a){return Math.round(21/18*a)};function distanciaDeteccion(){var a=Blockly.Arduino.configuracion;return Blockly.Arduino.ultrasonido.corregirCM(a.robot.distanciaParaGirar()+a.distanciaPorPaso)}
Blockly.Arduino.object_ducker=function(){var a=Blockly.Arduino.configuracion;Blockly.Arduino.definitions_.define_ultrasonic_2="#include <Ping.h>\n";Blockly.Arduino.definitions_.var_ultrasonic_2="PingSensor ultrasonic("+a.pinUS+");\n";return"if(ultrasonic.measureCM() <= "+distanciaDeteccion()+"){\n "+Blockly.Arduino.statementToCode(this,"IF")+"}\nelse{\n"+Blockly.Arduino.statementToCode(this,"ELSE")+"}\n"};
Blockly.Arduino.run_button_push=function(){Blockly.Arduino.setups_.setup_button="pinMode(RUN_SW, INPUT_PULLUP);";return"if(!(digitalRead(RUN_SW))){\n"+Blockly.Arduino.statementToCode(this,"IF")+"\n}"};Blockly.Arduino.repeatForever=function(){var a=Blockly.Arduino.statementToCode(this,"DO");Blockly.Arduino.INFINITE_LOOP_TRAP&&(a=Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+this.id+"'")+a);return"while (true) {\n"+a+"}\n"};Blockly.Arduino.logic={};
Blockly.Arduino.controls_if=function(){for(var a=0,b=Blockly.Arduino.valueToCode(this,"IF"+a,Blockly.Arduino.ORDER_NONE)||"false",c=Blockly.Arduino.statementToCode(this,"DO"+a),d="if ("+b+") {\n"+c+"\n}",a=1;a<=this.elseifCount_;a++)b=Blockly.Arduino.valueToCode(this,"IF"+a,Blockly.Arduino.ORDER_NONE)||"false",c=Blockly.Arduino.statementToCode(this,"DO"+a),d+=" else if ("+b+") {\n"+c+"}";this.elseCount_&&(c=Blockly.Arduino.statementToCode(this,"ELSE"),d+=" else {\n"+c+"\n}");return d+"\n"};
Blockly.Arduino.logic_compare=function(){var a=this.getFieldValue("OP"),a=Blockly.Arduino.logic_compare.OPERATORS[a],b="=="==a||"!="==a?Blockly.Arduino.ORDER_EQUALITY:Blockly.Arduino.ORDER_RELATIONAL,c=Blockly.Arduino.valueToCode(this,"A",b)||"0",d=Blockly.Arduino.valueToCode(this,"B",b)||"0";return[c+" "+a+" "+d,b]};Blockly.Arduino.logic_compare.OPERATORS={EQ:"==",NEQ:"!=",LT:"<",LTE:"<=",GT:">",GTE:">="};
Blockly.Arduino.logic_operation=function(){var a="AND"==this.getFieldValue("OP")?"&&":"||",b="&&"==a?Blockly.Arduino.ORDER_LOGICAL_AND:Blockly.Arduino.ORDER_LOGICAL_OR,c=Blockly.Arduino.valueToCode(this,"A",b)||"false",d=Blockly.Arduino.valueToCode(this,"B",b)||"false";return[c+" "+a+" "+d,b]};Blockly.Arduino.logic_negate=function(){var a=Blockly.Arduino.ORDER_UNARY_PREFIX;return["!"+(Blockly.Arduino.valueToCode(this,"BOOL",a)||"false"),a]};
Blockly.Arduino.logic_boolean=function(){return["TRUE"==this.getFieldValue("BOOL")?"true":"false",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.logic_null=function(){return["NULL",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.grove={};Blockly.Arduino.grove_led=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("STAT");Blockly.Arduino.setups_["setup_green_led_"+a]="pinMode("+a+", OUTPUT);";return"digitalWrite("+a+","+b+");\n"};Blockly.Arduino.grove_button=function(){var a=this.getFieldValue("PIN");Blockly.Arduino.setups_["setup_button_"+a]="pinMode("+a+", INPUT);";return["digitalRead("+a+")",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.grove_rotary_angle=function(){return["analogRead("+this.getFieldValue("PIN")+")",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.grove_tilt_switch=function(){var a=this.getFieldValue("PIN");Blockly.Arduino.setups_["setup_tilt_switch_"+a]="pinMode("+a+", INPUT);";return["digitalRead("+a+")",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.grove_piezo_buzzer=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("STAT");Blockly.Arduino.setups_["setup_piezo_buzzer_"+a]="pinMode("+a+", OUTPUT);";return"digitalWrite("+a+","+b+");\n"};Blockly.Arduino.grove_relay=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("STAT");Blockly.Arduino.setups_["setup_relay_"+a]="pinMode("+a+", OUTPUT);";return"digitalWrite("+a+","+b+");\n"};
Blockly.Arduino.grove_temporature_sensor=function(){var a=this.getFieldValue("PIN");return["round((1/(log((float)(1023-analogRead("+a+"))*10000/analogRead("+a+"))/10000)/3975+1/298.15)-273.15)",Blockly.Arduino.ORDER_ATOMIC]};
var _get_next_pin=function(a){var b=a,b=parseInt(b)?parseInt(a)+1:"A"+(parseInt(b.slice(1,b.length))+1);a=profile.default.digital.length;for(var c=!0,d=0;d<a;d++)profile.default.digital[d][1]==b&&(c=!1);return c?(alert("Grove Sensor needs PIN#+1 port, current setting is out of bound."),null):b};
Blockly.Arduino.grove_serial_lcd_print=function(){var a=this.getFieldValue("PIN"),b=Blockly.Arduino.valueToCode(this,"TEXT",Blockly.Arduino.ORDER_UNARY_POSTFIX)||"''",c=Blockly.Arduino.valueToCode(this,"TEXT2",Blockly.Arduino.ORDER_UNARY_POSTFIX)||"''",d=Blockly.Arduino.valueToCode(this,"DELAY_TIME",Blockly.Arduino.ORDER_ATOMIC)||"1000";Blockly.Arduino.definitions_.define_seriallcd="#include <SerialLCD.h>\n";Blockly.Arduino.definitions_.define_softwareserial="#include <SoftwareSerial.h>\n";var e=
_get_next_pin(a);Blockly.Arduino.definitions_["var_lcd_"+a]="SerialLCD slcd_"+a+"("+a+","+e+");\n";Blockly.Arduino.setups_["setup_lcd_"+a]="slcd_"+a+".begin();\n";e="slcd_"+a+".backlight();\n"+("slcd_"+a+".setCursor(0,0);\n");e+="slcd_"+a+".print("+b+");\n";e+="slcd_"+a+".setCursor(0,1);\n";e+="slcd_"+a+".print("+c+");\n";return e+="delay("+d+");\n"};
Blockly.Arduino.grove_serial_lcd_power=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("STAT");Blockly.Arduino.definitions_.define_seriallcd="#include <SerialLCD.h>\n";Blockly.Arduino.definitions_.define_softwareserial="#include <SoftwareSerial.h>\n";var c=_get_next_pin(a);Blockly.Arduino.definitions_["var_lcd"+a]="SerialLCD slcd_"+a+"("+a+","+c+");\n";a="slcd_"+a;return"ON"===b?a+".Power();\n":a+".noPower();\n"};
Blockly.Arduino.grove_serial_lcd_effect=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("STAT");Blockly.Arduino.definitions_.define_seriallcd="#include <SerialLCD.h>\n";Blockly.Arduino.definitions_.define_softwareserial="#include <SoftwareSerial.h>\n";var c=_get_next_pin(a);Blockly.Arduino.definitions_["var_lcd"+a]="SerialLCD slcd_"+a+"("+a+","+c+");\n";a="slcd_"+a;return"LEFT"===b?a+".scrollDisplayLeft();\n":"RIGHT"===b?a+".scrollDisplayRight();\n":a+".autoscroll();\n"};
Blockly.Arduino.grove_sound_sensor=function(){return["analogRead("+this.getFieldValue("PIN")+")",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.grove_pir_motion_sensor=function(){var a=this.getFieldValue("PIN");Blockly.Arduino.setups_["setup_input_"+a]="pinMode("+a+", INPUT);";return["digitalRead("+a+")",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.grove_line_finder=function(){var a=this.getFieldValue("PIN");Blockly.Arduino.setups_["setup_input_"+a]="pinMode("+a+", INPUT);";return["digitalRead("+a+")",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.grove_ultrasonic_ranger=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("UNIT");Blockly.Arduino.definitions_.define_ultrasonic="#include <Ultrasonic.h>\n";Blockly.Arduino.definitions_["var_ultrasonic"+a]="Ultrasonic ultrasonic_"+a+"("+a+");";return["cm"===b?"ultrasonic_"+a+".MeasureInCentimeters()":"ultrasonic_"+a+".MeasureInInches()",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.grove_motor_shield=function(){var a=this.getFieldValue("DIRECTION");Blockly.Arduino.setups_.setup_motor="pinMode(8,OUTPUT);//I1\n  pinMode(11,OUTPUT);//I2\n  pinMode(9,OUTPUT);//speedPinA\n  pinMode(12,OUTPUT);//I3\n  pinMode(13,OUTPUT);//i4\n  pinMode(10,OUTPUT);//speedPinB\n";var b="";"forward"===a?(Blockly.Arduino.definitions_.define_forward="void forward()\n{\n  analogWrite(9,127);//input a simulation value to set the speed\n  analogWrite(10,127);\n  digitalWrite(13,HIGH);//turn DC Motor B move clockwise\n  digitalWrite(12,LOW);\n  digitalWrite(11,LOW);//turn DC Motor A move anticlockwise\n  digitalWrite(8,HIGH);\n}\n",
b="forward();\n"):"right"===a?(Blockly.Arduino.definitions_.define_right="void right()\n{\n  analogWrite(9,127);//input a simulation value to set the speed\n  analogWrite(10,127);\n  digitalWrite(13,LOW);//turn DC Motor B move anticlockwise\n  digitalWrite(12,HIGH);\n  digitalWrite(11,LOW);//turn DC Motor A move anticlockwise\n  digitalWrite(8,HIGH);\n}\n\n",b="right();\n"):"left"===a?(Blockly.Arduino.definitions_.define_left="void left()\n{\n  analogWrite(9,127);//input a simulation value to set the speed\n  analogWrite(10,127);\n  digitalWrite(13,HIGH);//turn DC Motor B move clockwise\n  digitalWrite(12,LOW);\n  digitalWrite(11,HIGH);//turn DC Motor A move clockwise\n  digitalWrite(8,LOW);\n}\n\n",
b="left();\n"):"backward"===a?(Blockly.Arduino.definitions_.define_backward="void backward()\n{\n  analogWrite(9,127);//input a simulation value to set the speed\n  analogWrite(10,127);\n  digitalWrite(13,LOW);//turn DC Motor B move anticlockwise\n  digitalWrite(12,HIGH);\n  digitalWrite(11,HIGH);//turn DC Motor A move clockwise\n  digitalWrite(8,LOW);\n}\n\n",b="backward();\n"):"stop"===a&&(Blockly.Arduino.definitions_.define_stop="void stop()\n{\ndigitalWrite(9,LOW);// Unenble the pin, to stop the motor. this should be done to avid damaging the motor.\ndigitalWrite(10,LOW);\ndelay(1000);\n}\n\n",
b="stop();\n");return b};Blockly.Arduino.grove_thumb_joystick=function(){var a=this.getFieldValue("PIN"),b="0",b="y"===this.getFieldValue("AXIS")?_get_next_pin(a):a;return["analogRead("+b+")",Blockly.Arduino.ORDER_ATOMIC]};function hexToR(a){return parseInt(cutHex(a).substring(0,2),16)}function hexToG(a){return parseInt(cutHex(a).substring(2,4),16)}function hexToB(a){return parseInt(cutHex(a).substring(4,6),16)}function cutHex(a){return"#"==a.charAt(0)?a.substring(1,7):a}
Blockly.Arduino.grove_rgb_led=function(){var a=this.getFieldValue("PIN"),b=_get_next_pin(a);Blockly.Arduino.setups_["setup_input_"+a]="pinMode("+a+", OUTPUT);";Blockly.Arduino.setups_["setup_input_"+b]="pinMode("+b+", OUTPUT);";Blockly.Arduino.definitions_.define_uint8="#define uint8 unsigned char";Blockly.Arduino.definitions_.define_uint16="#define uint16 unsigned int";Blockly.Arduino.definitions_.define_uint32="#define uint32 unsigned long int";Blockly.Arduino.definitions_["define_clkproduce_"+
a]="void ClkProduce_"+a+"(void)\n{\n  digitalWrite("+a+", LOW);\n  delayMicroseconds(20);\n  digitalWrite("+a+", HIGH);\n  delayMicroseconds(20);\n}\n";Blockly.Arduino.definitions_["define_send32zero_"+a]="void Send32Zero_"+a+"(void)\n{\n  uint8 i;\n  for (i=0; i<32; i++)\n  {\n    digitalWrite("+b+", LOW);\n    ClkProduce_"+a+"();\n  }\n}\n";Blockly.Arduino.definitions_.define_taskanticode="uint8 TakeAntiCode(uint8 dat)\n{\n  uint8 tmp = 0;\n  if ((dat & 0x80) == 0)\n  {\n    tmp |= 0x02;\n  }\n  \n  if ((dat & 0x40) == 0)\n  {\n    tmp |= 0x01;\n  }\n  return tmp;\n}\n";
Blockly.Arduino.definitions_["define_datasend_"+a]="// gray data\nvoid DatSend_"+a+"(uint32 dx)\n{\n  uint8 i;\n  for (i=0; i<32; i++)\n  {\n    if ((dx & 0x80000000) != 0)\n    {\n      digitalWrite("+b+", HIGH);\n    }\n    else\n    {\n      digitalWrite("+b+", LOW);\n    }\n  dx <<= 1;\n  ClkProduce_"+a+"();\n  }\n}\n";Blockly.Arduino.definitions_["define_datadealwithsend_"+a]="// data processing\nvoid DataDealWithAndSend_"+a+"(uint8 r, uint8 g, uint8 b)\n{\n  uint32 dx = 0;\n  dx |= (uint32)0x03 << 30;             // highest two bits 1\uff0cflag bits\n  dx |= (uint32)TakeAntiCode(b) << 28;\n  dx |= (uint32)TakeAntiCode(g) << 26;\n  dx |= (uint32)TakeAntiCode(r) << 24;\n\n  dx |= (uint32)b << 16;\n  dx |= (uint32)g << 8;\n  dx |= r;\n\n  DatSend_"+
a+"(dx);\n}\n";b="Send32Zero_"+a+"(); // begin\n";if(0==this.itemCount_)return"";for(var c=0;c<this.itemCount_;c++)var d=this.getFieldValue("RGB"+c),b=b+("DataDealWithAndSend_"+a+"("+hexToR(d)+", "+hexToG(d)+", "+hexToB(d)+"); // first node data\n");return b+("Send32Zero_"+a+"();  // send to update data\n")};
Blockly.Arduino.grove_bluetooth_slave=function(){var a=this.getFieldValue("PIN"),b=_get_next_pin(a),c=this.getFieldValue("NAME");this.getFieldValue("PINCODE");var d=Blockly.Arduino.statementToCode(this,"RCV"),e=Blockly.Arduino.statementToCode(this,"SNT");Blockly.Arduino.definitions_.define_softwareserial="#include <SoftwareSerial.h>\n";Blockly.Arduino.definitions_["var_bluetooth_"+a]="SoftwareSerial blueToothSerial_"+a+"("+a+","+b+");\n";Blockly.Arduino.setups_["setup_bluetooth_"+a]="Serial.begin(9600);\n";
Blockly.Arduino.setups_["setup_bluetooth_"+a]+="  pinMode("+a+", INPUT);\n";Blockly.Arduino.setups_["setup_bluetooth_"+a]+="  pinMode("+b+", OUTPUT);\n";Blockly.Arduino.setups_["setup_bluetooth_"+a]+="  setupBlueToothConnection_"+a+"();\n";Blockly.Arduino.definitions_["define_setupBlueToothConnection_"+a]="void setupBlueToothConnection_"+a+"()\n{\n  blueToothSerial_"+a+".begin(38400); //Set BluetoothBee BaudRate to default baud rate 38400\n  blueToothSerial_"+a+'.print("\\r\\n+STWMOD=0\\r\\n"); //set the bluetooth work in slave mode\n  blueToothSerial_'+
a+'.print("\\r\\n+STNA='+c+'\\r\\n"); //set the bluetooth name as "'+c+'"\n  blueToothSerial_'+a+'.print("\\r\\n+STPIN=0000\\r\\n");//Set SLAVE pincode"0000"\n  blueToothSerial_'+a+'.print("\\r\\n+STOAUT=1\\r\\n"); // Permit Paired device to connect me\n  blueToothSerial_'+a+'.print("\\r\\n+STAUTO=0\\r\\n"); // Auto-connection should be forbidden here\n  delay(2000); // This delay is required.\n  blueToothSerial_'+a+'.print("\\r\\n+INQ=1\\r\\n"); //make the slave bluetooth inquirable \n  Serial.println("The slave bluetooth is inquirable!");\n  delay(2000); // This delay is required.\n  blueToothSerial_'+
a+".flush();\n}\n";return"char recvChar_"+a+";\nwhile(1) {\n  if(blueToothSerial_"+a+".available()) {//check if there is any data sent from the remote bluetooth shield\n    recvChar_"+a+" = blueToothSerial_"+a+".read();\n    Serial.print(recvChar_"+a+");\n"+d+"  }\n  if(Serial.available()){//check if there is any data sent from the local serial terminal, you can add the other applications here\n    recvChar_"+a+" = Serial.read();\n    blueToothSerial_"+a+".print(recvChar_"+a+");\n"+e+"  }\n}\n"};