'use strict';

const Joi = require('joi');
const { failAction } = require('../shared/httpHelper');
const handler = require('./monitorSettings-create.handler');
const { getvalidateDevice, getvalidateExistDevice, getvalidateExistCattle } = require('./monitorSettings-pre');

const route = {
	handler,
	method: 'POST',
	path: '/',
	options: {
		pre: [
			{
				assign: 'validateExistDevice',
				method: getvalidateExistDevice,
			},
			{
				assign: 'validateExistCattle',
				method: getvalidateExistCattle,
			},
			{
				assign: 'validateDevice',
				method: getvalidateDevice,
			},
		],
		validate: {
			failAction,
			payload: Joi.object({
				deviceId: Joi.number()
					.integer()
					.positive()
					.allow(null),
				cattleId: Joi.number()
					.integer()
					.positive()
					.allow(null),
				description: Joi.string(),
			}),
		},
	},
};

module.exports = route;
