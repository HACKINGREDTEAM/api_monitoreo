'use strict';

const Boom = require('@hapi/boom');
const Cattle = require('../../models/Cattle');

async function handler(request) {
	try {
		const data = request.payload;
		const edit = await Cattle.edit(request.params.id, data);
		return edit;
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

module.exports = handler;
