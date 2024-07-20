'use strict';

const Joi = require('joi');
const { failAction } = require('../shared/httpHelper');
const handler = require('./cattle-list.handler');

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
				age: Joi.number().allow(null),
			}),
		},
	},
};

module.exports = route;
