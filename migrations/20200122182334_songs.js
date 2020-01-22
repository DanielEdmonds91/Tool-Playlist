
exports.up = function(knex) {
    return knex.schema.createTable('songsTable', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('length')
    table.integer('albums_id')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('songsTable')
};
