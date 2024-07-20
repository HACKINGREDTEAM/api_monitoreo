'use strict';

function defaultFields() {
	const defaultProperties = {
		createdAt: {
			type: ['string'],
			format: 'date-time',
		},
		deletedAt: {
			type: ['string', 'null'],
			default: null,
			format: 'date-time',
		},
		flagActive: {
			type: 'boolean',
			default: true,
		},
		updatedAt: {
			type: ['string'],
			format: 'date-time',
		},
	};
	return defaultProperties;
}

const methods = {
	defaultFields,
};

module.exports = methods;
