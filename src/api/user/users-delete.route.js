'use strict';

const Joi = require('joi');
const { failAction } = require('../shared/httpHelper');
const handler = require('./users-delete.handler');
const pre = require('./users-pre');

const route = {
	handler,
	method: 'DELETE',
	path: '/{id}',
	options: {
		pre: [
			{
				method: pre.validateById,
			},
		],
		validate: {
			failAction,
			params: Joi.object({
				id: Joi.number().required(),
			}),
		},
	},
};

module.exports = route;
