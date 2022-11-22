/**
 * @license
 * Copyright 2020 Sébastien Canet
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview DS18B20 sensor temperature blocks for Blockly.
 * @author scanet@libreduc.cc (Sébastien Canet)
 */
 
'use strict';

goog.provide('Blockly.Arduino.hcsr04');

goog.require('Blockly.Arduino');

Blockly.Arduino['hcsr04_dist'] = function() {
  var hcsr04_trigger = this.getFieldValue('hcsr04_trigger');
  var hcsr04_echo = this.getFieldValue('hcsr04_echo');
  var hcsr04_tag = hcsr04_trigger + '_' + hcsr04_echo;
  Blockly.Arduino.includes_['hcsr04_include'] = '#include <HCSR04.h>';
  Blockly.Arduino.definitions_['hcsr04_def_' + hcsr04_trigger] = 'const byte hcsr04_trigger_' + hcsr04_trigger + ' = ' + hcsr04_trigger + ';';
  Blockly.Arduino.definitions_['hcsr04_def_' + hcsr04_echo] = 'const byte hcsr04_echo_' + hcsr04_echo + ' = ' + hcsr04_echo + ';';
  Blockly.Arduino.definitions_['hcsr04_def_' + hcsr04_tag] = 'UltraSonicDistanceSensor distanceSensor_' + hcsr04_tag + '(hcsr04_trigger_' + hcsr04_trigger + ', hcsr04_echo_' + hcsr04_echo + ');';
  var code = 'distanceSensor_' + hcsr04_tag + '.measureDistanceCm();'; 
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
