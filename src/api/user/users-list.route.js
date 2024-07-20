'use strict';

const Joi = require('joi');
const { failAction } = require('../shared/httpHelper');
const handler = require('./users-list.handler');

const route = {
	handler,
	method: 'GET',
	path: '/',
	options: {
		validate: {
			failAction,
			query: Joi.object({
				username: Joi.string()
					.allow(null)
					.description('This is a description'),
				group: Joi.string().allow(null),
			}),
		},
	},
};

module.exports = route;
