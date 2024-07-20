'use strict';

const Joi = require('joi');
const { failAction } = require('../shared/httpHelper');
const handler = require('./device-edit.handler');
const { getvalidateDeviceId, validateById } = require('./device-pre');

const route = {
	handler,
	method: 'PATCH',
	path: '/{id}',
	options: {
		pre: [
			{
				method: validateById,
			},
			{
				assign: 'validateDeviceId',
				method: getvalidateDeviceId,
			},
		],
		validate: {
			failAction,
			payload: Joi.object({
				name: Joi.string(),
				series: Joi.string(),
				model: Joi.string(),
				description: Joi.string(),
			}),
			params: Joi.object({
				id: Joi.number().required(),
			}),
		},
	},
};

module.exports = route;
