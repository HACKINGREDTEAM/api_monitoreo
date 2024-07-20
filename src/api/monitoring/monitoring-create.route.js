'use strict';

const Joi = require('joi');
const { failAction } = require('../shared/httpHelper');
const handler = require('./monitoring-create.handler');
const { getvalidateDeviceSerie, getvalidateMonitorSettings } = require('./monitoring-pre');

const route = {
	handler,
	method: 'POST',
	path: '/',
	options: {
		auth: false,
		pre: [
			{
				assign: 'validateDeviceSerie',
				method: getvalidateDeviceSerie,
			},
			{
				assign: 'validateMonitorSettings',
				method: getvalidateMonitorSettings,
			},
		],
		validate: {
			failAction,
			payload: Joi.object({
				monitoringDate: Joi.string(),
				frequency: Joi.number().required(),
				temperature: Joi.number().required(),
				latitude: Joi.number().required(),
				longitude: Joi.number().required(),
				serie: Joi.string().required(),
			}),
		},
	},
};

module.exports = route;
