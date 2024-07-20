exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex('device').del();
	await knex('device').insert([
		{
			id: 1,
			name: 'device 1',
			series: 'dsdsds-sas',
			model: '2019-06-11',
			description: 'ddddd',
		},
		{
			id: 2,
			name: 'device 1',
			series: 'dsdsds-sas1',
			model: '2019-06-11',
			description: 'ddddd',
		},
		{
			id: 3,
			name: 'device 1',
			series: 'dsdsds-sas2',
			model: '2019-06-11',
			description: 'ddddd',
		},
		{
			id: 4,
			name: 'device 1',
			series: 'dsdsds-sas4',
			model: '2019-06-11',
			description: 'ddddd',
		},
		{
			id: 5,
			name: 'device 1',
			series: 'dsdsds-sas5',
			model: '2019-06-11',
			description: 'ddddd',
		},
	]);
};
