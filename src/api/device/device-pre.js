'use strict';

const Boom = require('@hapi/boom');
const Device = require('../../models/Device');

const { existingNotDevice, existingDevice } = require('../shared/error_codes');

async function validateById(request) {
	try {
		const { id } = request.params;
		const data = await Device.getById(id);
		return data || Boom.badRequest(existingNotDevice);
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}
async function getvalidateDeviceSerie(request) {
	try {
		const { series } = request.payload;
		const data = await Device.getDeviceSerie(series);
		if (data) {
			return Boom.badRequest(existingDevice);
		}
		return true;
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

async function getvalidateDeviceId(request) {
	try {
		const { series } = request.payload;
		const { id } = request.params;
		const data = await Device.getDeviceSerie(series);
		if (id === data.id) {
			return data;
		}
		return Boom.badRequest(existingNotDevice);
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}
const pre = {
	validateById,
	getvalidateDeviceSerie,
	getvalidateDeviceId,
};

module.exports = pre;
