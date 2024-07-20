'use strict';

const Boom = require('@hapi/boom');
const MonitorSettings = require('../../models/MonitorSettings');
const Device = require('../../models/Device');

const { existingNotMonitorSettings, existingNotDevice } = require('../shared/error_codes');

async function getvalidateDeviceSerie(request) {
	try {
		const { serie } = request.payload;
		const data = await Device.getDeviceSerie(serie);
		return data || Boom.badRequest(existingNotDevice);
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

async function getvalidateMonitorSettings(request) {
	try {
		const { validateDeviceSerie } = request.pre;
		const data = await MonitorSettings.getDeviceId(validateDeviceSerie.id);
		if (data.length) {
			return data;
		}
		return Boom.badRequest(existingNotMonitorSettings);
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

const pre = {
	getvalidateDeviceSerie,
	getvalidateMonitorSettings,
};

module.exports = pre;
