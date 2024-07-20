'use strict';

const errorCodes = {
	moduleNotFound: 'MODULE_NOT_FOUND',
	userNotFound: 'USER_NOT_FOUND',
	existingUsername: 'USERNAME_ALREADY_EXISTS',
	vatNotFound: 'VAT_NOT_FOUND',
	existingVat: 'VAT_ALREADY_EXISTS',
	existingNotCattle: 'CATTLE_NOT_EXISTS',
	existingNotDevice: 'DEVICE_NOT_EXISTS',
	existingNotMonitorSettings: 'MONITORSETTINGS_NOT_EXISTS',
	existingCattle: 'CATTLE_EXISTS',
	existingDevice: 'DEVICE_EXISTS',
};

module.exports = errorCodes;
