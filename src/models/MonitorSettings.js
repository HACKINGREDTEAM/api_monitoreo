'use strict';

const { Model } = require('objection');
const baseModel = require('./base');
const helper = require('./helper');

class MonitorSettings extends baseModel {
	static get tableName() {
		return 'monitor_settings';
	}

	static get relationMappings() {
		return {
			Cattle: {
				relation: Model.BelongsToOneRelation,
				modelClass: `${__dirname}/Cattle.js`,
				join: {
					from: 'monitor_settings.cattle_id',
					to: 'cattle.id',
				},
			},
			Device: {
				relation: Model.BelongsToOneRelation,
				modelClass: `${__dirname}/Device.js`,
				join: {
					from: 'monitor_settings.device_id',
					to: 'device.id',
				},
			},
		};
	}

	static get jsonSchema() {
		const defaultProperties = helper.defaultFields();
		const schema = {
			type: 'object',
			required: ['deviceId', 'cattleId'],
			properties: {
				deviceId: {
					type: 'integer',
				},
				cattleId: {
					type: 'integer',
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
		return ['id', 'device_id', 'cattle_id', 'description'];
	}

	static getDeviceId(deviceId) {
		return this.query()
			.withGraphFetched('Device')
			.select(this.defaultColumns())
			.where('device_id', deviceId)
			.where('flag_active', 1);
	}

	static getById(id) {
		return this.query()
			.withGraphFetched('[Device, Cattle]')
			.select(this.defaultColumns())
			.findById(id);
	}

	static create(data) {
		return this.query().insert(data);
	}

	static getAll(filter = {}) {
		return this.query()
			.withGraphFetched('[Device, Cattle]')
			.select(this.defaultColumns())
			.skipUndefined()
			.hapiFilter(filter);
	}

	static removeById(id) {
		return this.query().softDelete().where('id', id);
	}

	static edit(id, data) {
		return this.query().patch(data).where('id', id);
	}
}

module.exports = MonitorSettings;
