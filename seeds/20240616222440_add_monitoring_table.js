exports.seed = async function (knex) {
	// Deletes ALL existing entries
  const moment = require('moment');
	await knex('monitoring').del();
	await knex('monitoring').insert([
		{
			id: 1,
			monitor_settings_id: 1,
			monitoring_date: moment().local().format('YYYY-MM-DD HH:mm:ss'),
			frequency: 1,
      temperature: 99.5,
      latitude: -11.899313,
      longitude: -77.068642,
      description: 'temperatura 1'
		},
		{
			id: 2,
      monitor_settings_id: 1,
			monitoring_date: moment().local().format('YYYY-MM-DD HH:mm:ss'),
			frequency: 1,
      temperature: 99.5,
      latitude: -11.899313,
      longitude: -77.068642,
      description: 'temperatura 1'
		},
		{
      id: 3,
      monitor_settings_id: 1,
      monitoring_date: moment().local().format('YYYY-MM-DD HH:mm:ss'),      
      frequency: 1,
      temperature: 99.5,
      latitude: -11.899313,
      longitude: -77.068642,
      description: 'temperatura 1'
		},
    {
      id: 4,
      monitor_settings_id: 1,
      monitoring_date: moment().local().format('YYYY-MM-DD HH:mm:ss'),      
      frequency: 1,
      temperature: 99.5,
      latitude: -11.899313,
      longitude: -77.068642,
      description: 'temperatura 1'
		},
    {
      id: 5,
      monitor_settings_id: 1,
      monitoring_date: moment().local().format('YYYY-MM-DD HH:mm:ss'),      
      frequency: 1,
      temperature: 99.5,
      latitude: -11.899313,
      longitude: -77.068642,
      description: 'temperatura 1'
		},
    {
      id: 6,
      monitor_settings_id: 1,
      monitoring_date: moment().local().format('YYYY-MM-DD HH:mm:ss'),      
      frequency: 1,
      temperature: 99.5,
      latitude: -11.899313,
      longitude: -77.068642,
      description: 'temperatura 1'
		},
    {
      id: 7,
      monitor_settings_id: 1,
      monitoring_date: moment().local().format('YYYY-MM-DD HH:mm:ss'),      
      frequency: 1,
      temperature: 99.5,
      latitude: -11.899313,
      longitude: -77.068642,
      description: 'temperatura 1'
		},
    {
      id: 8,
      monitor_settings_id: 1,
      monitoring_date: moment().local().format('YYYY-MM-DD HH:mm:ss'),      
      frequency: 1,
      temperature: 99.5,
      latitude: -11.899313,
      longitude: -77.068642,
      description: 'temperatura 1'
		},
	]);
};
