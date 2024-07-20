'use strict';

const Boom = require('@hapi/boom');
const Device = require('../../models/Device');

async function handler(request) {
	try {
		const list = await Device.getAll(request.query);
		return list;
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

module.exports = handler;
