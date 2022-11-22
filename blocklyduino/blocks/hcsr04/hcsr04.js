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

goog.provide('Blockly.Constants.hcsr04');

goog.require('Blockly.Blocks');
goog.require('Blockly');

//var hcsr04MediaFolder = "./blocklyduino/blocks/hcsr04/";

Blockly.Blocks['hcsr04_dist'] = {
	init: function() {
		this.appendDummyInput()
			.setAlign(Blockly.ALIGN_LEFT)
			.appendField(Blockly.Msg.HCSR04_TEXT)
			.appendField(Blockly.Msg.HCSR04_TRIGGER)
			.appendField(new Blockly.FieldTextInput('1'), 'hcsr04_trigger')
			.appendField(Blockly.Msg.HCSR04_ECHO)
			.appendField(new Blockly.FieldTextInput('2'), 'hcsr04_echo');
		this.setOutput(true, 'float');
		this.setTooltip(Blockly.Msg.HCSR04_TOOLTIP);
		this.setStyle('ds18b20_blocks');
	}
};

