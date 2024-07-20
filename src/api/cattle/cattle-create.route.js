'use strict';

const Joi = require('joi');
const { failAction } = require('../shared/httpHelper');
const handler = require('./cattle-create.handler');

const route = {
	handler,
	method: 'POST',
	path: '/',
	options: {
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
				race: Joi.string(),
				color: Joi.string(),
				sex: Joi.string(),
				earringNumber: Joi.string(),
			}),
		},
	},
};

module.exports = route;
