var Q = require('q');
var client = require('request-json').createClient('https://api.themoviedb.org/3/');

module.exports = {
  _apiKey: "f3f95069cd00cd8d6c7df5da2e1e802e", // TODO
  getTrailerUrlByImdbId(imdb_id) {
    const self = this;
    return Q.Promise(function(resolve, reject) {
      client.get(`find/${imdb_id}?api_key=${self._apiKey}&external_source=imdb_id`, function (err, res, body) {
        if (!err && res.statusCode == 200) {
          const movieId = body["movie_results"][0].id;
          client.get(`movie/${movieId}?api_key=${self._apiKey}&append_to_response=trailers`, function (err, res, b2) {
            if (!err && res.statusCode == 200) {
              const youtubeVideoId = b2.trailers.youtube[0].source;
              resolve(`https://www.youtube.com/watch?v=${youtubeVideoId}`);
            } else {
              // TODO
              reject(new Error());
            }
          });
        } else {
          // TODO
          reject(new Error());
        }
      });
    });
  }
}
