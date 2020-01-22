const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getAlbums: getAlbums,
  getAlbum: getAlbum,
  getSongs:getSongs
}
function getAlbums (db = connection) {
  return db('albumsTable')
}

function getAlbum (id, db = connection) {
  return db('albumsTable')
    .where('albumsTable.id', id)
    .join('songsTable', 'albumsTable.id', 'songsTable.albumsId')
}

function getSongs (db =connection) {
  return db('songsTable')
}