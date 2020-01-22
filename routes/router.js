const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAlbums()
    .then(albums => {
      res.render('albumsView', {albums:albums})
    })
})

module.exports = router
