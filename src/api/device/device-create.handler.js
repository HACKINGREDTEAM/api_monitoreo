'use strict';

const Boom = require('@hapi/boom');
const Device = require('../../models/Device');

async function handler(request, h) {
	try {
		const data = request.payload;
		const newDevice = await Device.create(data);
		return h.response(newDevice).code(201);
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

module.exports = handler;
