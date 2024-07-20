'use strict';

const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const usersRoute = require('./user/users.plugins');
const loginRoute = require('./login/login.plugins');
const cattleRoute = require('./cattle/cattle.plugins');
const deviceRoute = require('./device/device.plugins');
const monitorSettingsRoute = require('./monitorSettings/monitorSettings.plugins');
const monitoringRoute = require('./monitoring/monitoring.plugins');

const swaggerOptions = {
	info: {
		title: 'Hapi Template API Documentation',
		description: 'This is a sample example of API documentation.',
	},
	securityDefinitions: {
		jwt: {
			type: 'apiKey',
			name: 'Authorization',
			in: 'header',
			'hapiSwagger.keyPrefix': 'Bearer ',
		},
	},
	security: [{ jwt: [] }],
};

const plugins = [
	Inert,
	Vision,
	{
		plugin: HapiSwagger,
		options: swaggerOptions,
	},
	{
		plugin: usersRoute,
		routes: {
			prefix: '/user',
		},
	},
	{
		plugin: loginRoute,
		routes: {
			prefix: '/login',
		},
	},
	{
		plugin: cattleRoute,
		routes: {
			prefix: '/cattle',
		},
	},
	{
		plugin: deviceRoute,
		routes: {
			prefix: '/device',
		},
	},
	{
		plugin: monitorSettingsRoute,
		routes: {
			prefix: '/monitor-settings',
		},
	},
	{
		plugin: monitoringRoute,
		routes: {
			prefix: '/monitoring',
		},
	},
];

module.exports = plugins;
