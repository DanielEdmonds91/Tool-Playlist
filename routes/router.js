const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAlbums()
    .then(albums => {
      console.log(albums)
      res.render('albumsView', {albums:albums})
    })
})

router.get('/album/:id', (req, res) => {
  db.getAlbum(req.params.id)
   .then( album => {
     let albumData = {
       title: album[0].title,
       albums: album
     }
     res.render('albumSongView', albumData)
   })
})

router.get('/songs', (req, res) => {
  db.getSongs()
   .then (songs => {
     res.render('songsView', {songs:songs})
   })




})



module.exports = router
