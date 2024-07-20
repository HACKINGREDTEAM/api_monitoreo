'use strict';

const Joi = require('joi');
const { failAction } = require('../shared/httpHelper');
const handler = require('./users-create.handler');
const pre = require('./users-pre');

const route = {
	handler,
	method: 'POST',
	path: '/',
	options: {
		pre: [
			{
				method: pre.validateByUsername,
			},
		],
		validate: {
			failAction,
			payload: Joi.object({
				username: Joi.string().required().max(12),
				password: Joi.string().required().max(24),
				confirmPassword: Joi.string()
					.valid(Joi.ref('password'))
					.meta({ disableDropdown: true }),
				email: Joi.string()
					.email({ tlds: { allow: false } })
					.required(),
				group: Joi.string(),
				description: Joi.string(),
			}).with('password', 'confirmPassword'),
		},
	},
};

module.exports = route;
