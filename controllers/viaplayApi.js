var Q = require('q');
var client = require('request-json').createClient('https://content.viaplay.se/');

module.exports = {
  getMovie: function(movie) {
    return Q.Promise(function(resolve, reject) {
      client.get(`pc­-se/film/${movie}`, function (err, res, body) {
        if (err || res.statusCode == 404) {
          // TODO
          reject(new Error());
        } else {
          resolve(body);
        }
      });
    });
  }
}
