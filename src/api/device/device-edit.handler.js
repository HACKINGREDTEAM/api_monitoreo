'use strict';

const Boom = require('@hapi/boom');
const Device = require('../../models/Device');

async function handler(request) {
	try {
		const data = request.payload;
		const edit = await Device.edit(request.params.id, data);
		return edit;
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

module.exports = handler;
