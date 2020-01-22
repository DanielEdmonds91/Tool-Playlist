
exports.up = function(knex) {
  return knex.schema.createTable('albumsTable', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.integer('year')
    table.string('cover')
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('albumsTable')
};
