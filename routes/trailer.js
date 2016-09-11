var express = require('express');
var router = express.Router();

var viaplay = require('../controllers/viaplayApi');
var tmdb = require('../controllers/tmdbApi');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // console.log(req.query.m);
  return viaplay.getMovie()
    .then(function(movie) {
      return movie._embedded["viaplay:blocks"][0]._embedded["viaplay:product"].content.imdb.id;
    })
    .then(function(imdb_id) {
      return tmdb.getTrailerUrlByImdbId(imdb_id);
    })
    .catch(function(err) {
    })
    .done(function(trailerUrl) {
      res.status(200).send({ trailerUrl: trailerUrl });
    });

    next();
});

module.exports = router;
