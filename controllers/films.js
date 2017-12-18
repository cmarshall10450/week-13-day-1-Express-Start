//since we don't have a database we'll use our front end models at the moment
const express = require('express')
const Film = require('../client/src/models/film')
const Review = require('../client/src/models/review')
const getFilms = require('../client/src/models/films')
const films = getFilms()

const router = new express.Router()

router.get('/', function (req, res) {
  res.json({ films })
})

router.get('/:id', function (req, res) {
  const film = films[req.params.id]
  res.json({ film })
})

router.get('/:id/reviews', function (req, res) {
  const film = films[req.params.id]
  res.json({ reviews: film.reviews })
})

router.post('/', function (req, res) {
  const film = new Film({
    title: req.body.title,
    actors: req.body.actors || [],
    reviews: req.body.reviews || []
  })

  films.push(film)

  res.json({ films })
})

router.post('/:id/reviews', function (req, res) {
  const film = films[req.params.id]
  const review = new Review({
    comment: req.body.comment,
    rating: req.body.rating,
    author: req.body.author
  })

  film.reviews.push(review)

  res.json({ films })
})

router.put('/:id', function (req, res) {
  const film = films[req.params.id]

  for (let key in req.body) {
    film[key] = req.body[key]
  }

  res.json({ films })
})

router.delete('/:id', function (req, res) {
  films.splice(req.params.id, 1)
  res.json({ films })
})

module.exports = router