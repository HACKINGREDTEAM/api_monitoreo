'use strict';

const Joi = require('joi');
const { failAction } = require('../shared/httpHelper');
const handler = require('./device-list.handler');

const route = {
	handler,
	method: 'GET',
	path: '/',
	options: {
		validate: {
			failAction,
			query: Joi.object({
				name: Joi.string()
					.allow(null)
					.description('This is a description'),
				serie: Joi.string().allow(null),
				model: Joi.string().allow(null),
			}),
		},
	},
};

module.exports = route;
