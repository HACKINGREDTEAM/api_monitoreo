'use strict';

const Joi = require('joi');
const { failAction } = require('../shared/httpHelper');
const handler = require('./cattle-detail.handler');
const pre = require('./cattle-pre');

const route = {
	handler,
	method: 'GET',
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
