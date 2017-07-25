
exports.up = function(knex, Promise) {
  return knex.schema.createTable('liquors',function(table){
    table.increments()
    table.text('name').notNullable();
    table.text('type').notNullable();
    table.float('abv').notNullable();
    table.boolean('like').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('liquors')
};
