'use strict';

const Joi = require('joi');
const { failAction } = require('../shared/httpHelper');
const handler = require('./monitoring-detail.handler');

const route = {
	handler,
	method: 'GET',
	path: '/{monitorSettingsId}',
	options: {
		validate: {
			failAction,
			params: Joi.object({
				monitorSettingsId: Joi.number().required(),
			}),
		},
	},
};

module.exports = route;
