
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('liquors').del()
    .then(function () {
      // Inserts seed entries
      return knex('liquors').insert([
        {name: 'Titos', type:'vodka', abv: 40, like: true },
        {name: 'Captain Morgan', type: 'rum', abv: 37.5, like: true },
        {name: 'Jack Daniels', type: 'whiskey', abv: 40, like: false}
      ]);
    });
};
