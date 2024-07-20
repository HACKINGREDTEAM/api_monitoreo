'use strict';

const Boom = require('@hapi/boom');
const MonitorSettings = require('../../models/MonitorSettings');
const Device = require('../../models/Device');
const Cattle = require('../../models/Cattle');

const {
	existingNotMonitorSettings, existingDevice, existingNotDevice, existingNotCattle,
} = require('../shared/error_codes');

async function validateById(request) {
	try {
		const { id } = request.params;
		const data = await MonitorSettings.getById(id);
		return data || Boom.badRequest(existingNotMonitorSettings);
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

async function getvalidateDevice(request) {
	try {
		const { deviceId } = request.payload;
		const data = await MonitorSettings.getDeviceId(deviceId);
		if (data.length) {
			return Boom.badRequest(existingDevice);
		}
		return data;
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

async function getvalidateExistDevice(request) {
	try {
		const { deviceId } = request.payload;
		const data = await Device.getById(deviceId);
		return data || Boom.badRequest(existingNotDevice);
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}
async function getvalidateExistCattle(request) {
	try {
		const { cattleId } = request.payload;
		const data = await Cattle.getById(cattleId);
		return data || Boom.badRequest(existingNotCattle);
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

const pre = {
	validateById,
	getvalidateDevice,
	getvalidateExistDevice,
	getvalidateExistCattle,
};

module.exports = pre;
