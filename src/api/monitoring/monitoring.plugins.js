'use strict';

const monitoringCreateRoute = require('./monitoring-create.route');
const monitoringDetailRoute = require('./monitoring-detail.route');

function register(server) {
	server.route(monitoringCreateRoute);
	server.route(monitoringDetailRoute);
}

const plugin = {
	name: 'monitoring-api',
	version: '1.0.0',
	register,
};

exports.plugin = plugin;
