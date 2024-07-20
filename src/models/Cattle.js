'use strict';

const baseModel = require('./base');
const helper = require('./helper');

class Cattle extends baseModel {
	static get tableName() {
		return 'cattle';
	}

	static get jsonSchema() {
		const defaultProperties = helper.defaultFields();
		const schema = {
			type: 'object',
			properties: {
				name: {
					type: 'string',
				},
				age: {
					type: 'integer',
				},
				birthdate: {
					type: 'string',
					format: 'date',
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
		return ['id', 'name', 'age', 'birthdate', 'description'];
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
}

module.exports = Cattle;
