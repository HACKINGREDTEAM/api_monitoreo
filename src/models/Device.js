'use strict';

const baseModel = require('./base');
const helper = require('./helper');

class Device extends baseModel {
	static get tableName() {
		return 'device';
	}

	static get jsonSchema() {
		const defaultProperties = helper.defaultFields();
		const schema = {
			type: 'object',
			properties: {
				name: {
					type: 'string',
				},
				series: {
					type: 'string',
				},
				model: {
					type: 'string',
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
		return ['id', 'name', 'series', 'model', 'description'];
	}

	static getById(id) {
		return this.query().findById(id);
	}

	static create(data) {
		return this.query().insert(data);
	}

	static getAll(filter = {}) {
		return this.query()
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

	static getDeviceSerie(serie) {
		return this.query()
			.select(this.defaultColumns())
			.where('series', serie)
			.where('flag_active', 1)
			.first();
	}
}

module.exports = Device;
