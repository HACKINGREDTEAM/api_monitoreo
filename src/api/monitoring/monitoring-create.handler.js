'use strict';

const Boom = require('@hapi/boom');
const Monitoring = require('../../models/Monitoring');
const moment = require('moment-timezone');

async function handler(request, h) {
	try {
		const data = request.payload;
		const { validateMonitorSettings } = request.pre;
		delete data.serie;
		delete data.monitoringDate;
		data.monitoringDate = moment().local().format('YYYY-MM-DD HH:mm:ss');
		data.monitorSettingsId = validateMonitorSettings[0].id;
		data.description = `Los datos de monitoreo seregistor a las ${data.monitoringDate} con una frecuencia de ${data.frequency}. La temperatura registrada fue de ${data.temperature} grados Celsius. Además, se registraron las coordenadas geográficas en ${data.latitude} grados de latitud y ${data.longitude} grados de longitud.`;
		const newMonitoring = await Monitoring.create(data);
		return h.response(newMonitoring).code(201);
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

module.exports = handler;
