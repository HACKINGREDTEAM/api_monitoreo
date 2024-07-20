'use strict';

const Joi = require('joi');
const { failAction } = require('../shared/httpHelper');
const handler = require('./users-edit.handler');
const pre = require('./users-pre');

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
				password: Joi.string().max(24),
				confirmPassword: Joi.string().valid(Joi.ref('password')),
				email: Joi.string().email({ tlds: { allow: false } }),
				group: Joi.string(),
				description: Joi.string(),
			}).with('password', 'confirmPassword'),
			params: Joi.object({
				id: Joi.number().required(),
			}),
		},
	},
};

module.exports = route;
