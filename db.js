const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getAlbums: getAlbums
}

function getAlbums (db = connection) {
  return db('albumsTable')
}