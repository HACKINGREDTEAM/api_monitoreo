exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cattle').del()
  await knex('cattle').insert([
      {
          id: 1,
          name: 'Vaca 1',
          age: 5,
          birthdate: '2019-06-11',
      },
      {
        id: 2,
        name: 'Vaca 2',
        age: 5,
        birthdate: '2019-06-11',
    },
    {
      id: 3,
      name: 'Vaca 3',
      age: 5,
      birthdate: '2019-06-11',
  },
  ]);
};
