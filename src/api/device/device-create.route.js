'use strict';

const Joi = require('joi');
const { failAction } = require('../shared/httpHelper');
const handler = require('./device-create.handler');
const { getvalidateDeviceSerie } = require('./device-pre');

const route = {
	handler,
	method: 'POST',
	path: '/',
	options: {
		pre: [
			{
				assign: 'validateDeviceSerie',
				method: getvalidateDeviceSerie,
			},
		],
		validate: {
			failAction,
			payload: Joi.object({
				name: Joi.string().required(),
				series: Joi.string().required(),
				model: Joi.string().required(),
				description: Joi.string(),
			}),
		},
	},
};

module.exports = route;
