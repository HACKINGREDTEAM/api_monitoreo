'use strict';

const Joi = require('joi');
const { failAction } = require('../shared/httpHelper');
const handler = require('./monitorSettings-edit-flag.handler');
const {
	validateById, getvalidateDevice, getvalidateExistDevice, getvalidateExistCattle,
} = require('./monitorSettings-pre');

const route = {
	handler,
	method: 'PATCH',
	path: '/{id}/flag',
	options: {
		pre: [
			{
				method: validateById,
			},
		],
		validate: {
			failAction,
			payload: Joi.object({
				flagActive: Joi.boolean().required(),
			}),
			params: Joi.object({
				id: Joi.number().required(),
			}),
		},
	},
};

module.exports = route;
