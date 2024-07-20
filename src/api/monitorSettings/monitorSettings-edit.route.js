'use strict';

const Joi = require('joi');
const { failAction } = require('../shared/httpHelper');
const handler = require('./monitorSettings-edit.handler');
const {
	validateById, getvalidateDevice, getvalidateExistDevice, getvalidateExistCattle,
} = require('./monitorSettings-pre');

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
			params: Joi.object({
				id: Joi.number().required(),
			}),
		},
	},
};

module.exports = route;
