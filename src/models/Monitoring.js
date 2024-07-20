'use strict';

const { Model } = require('objection');
const baseModel = require('./base');
const helper = require('./helper');

class Monitoring extends baseModel {
	static get tableName() {
		return 'monitoring';
	}

	static get relationMappings() {
		return {
			MonitorSettings: {
				relation: Model.BelongsToOneRelation,
				modelClass: `${__dirname}/MonitorSettings.js`,
				join: {
					from: 'monitoring.monitor_settings_id',
					to: 'monitor_settings.id',
				},
			},
		};
	}

	static get jsonSchema() {
		const defaultProperties = helper.defaultFields();
		const schema = {
			type: 'object',
			required: ['monitorSettingsId'],
			properties: {
				monitorSettingsId: {
					type: 'integer',
				},
				monitoringDate: {
					type: ['string'],
					format: 'date-time',
				},
				frequency: {
					type: 'integer',
				},
				temperature: {
					type: ['number', 'null'],
				},
				latitude: {
					type: ['number', 'null'],
				},
				longitude: {
					type: ['number', 'null'],
				},
				description: {
					type: 'string',
				},
				...defaultProperties,
			},
		};
		return schema;
	}

	static get namedFilters() {
		return {
			selectColumns: (builder) => builder.select(this.defaultColumns()),
		};
	}

	static defaultColumns() {
		return [
			'monitor_settings_id',
			'monitoring_date',
			'frequency',
			'temperature',
			'latitude',
			'longitude',
			'description',
		];
	}

	static create(data) {
		return this.query().insert(data);
	}

	static getAll(filter = {}) {
		return this.query()
			.withGraphFetched('[MonitorSettings.[Device, Cattle]]')
			.select(this.defaultColumns())
			.skipUndefined()
			.hapiFilter(filter);
	}

	static getMonitorSettingsId(monitorSettingsId) {
		return this.query()
			.withGraphFetched('[MonitorSettings.[Device, Cattle]]')
			.select(this.defaultColumns())
			.where('monitor_settings_id', monitorSettingsId);
	}
}

module.exports = Monitoring;
