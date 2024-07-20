'use strict';

const Joi = require('joi');
const { failAction } = require('../shared/httpHelper');
const handler = require('./cattle-edit.handler');
const pre = require('./cattle-pre');

const route = {
	handler,
	method: 'PATCH',
	path: '/{id}',
	options: {
		pre: [
			{
				method: pre.validateById,
			},
		],
		validate: {
			failAction,
			payload: Joi.object({
				name: Joi.string().required().max(50),
				age: Joi.number()
					.integer()
					.positive()
					.required(),
				birthdate: Joi.string().required(),
				description: Joi.string(),
			}),
			params: Joi.object({
				id: Joi.number().required(),
			}),
		},
	},
};

module.exports = route;
