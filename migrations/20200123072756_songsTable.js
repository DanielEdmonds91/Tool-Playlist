exports.up = function(knex) {
  return knex.schema.createTable('songsTable', table => {
    table.increments('id').primary()
    table.string('name')
    table.integer('length')
    table.integer('albumsId')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('songsTable')
}
