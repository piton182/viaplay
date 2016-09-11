var chakram = require('chakram'),
    expect = chakram.expect,
    sinon = require('sinon'),
    viaplay = require('../controllers/viaplayApi'),
    Q = require('q');

describe("/trailer", function () {
  const host = "http://localhost",
        port = 3333,
        viaplayContentUrl = "https://content.viaplay.se";
  var server;

  before("", function() {
    server = require('http').createServer(require('../app'));
    server.listen(port);
    sinon.stub(viaplay, "getMovie").returns(Q.Promise(function(resolve) {
      resolve(require('./fixtures/movie.json'));
    }));
  });

  after("", function() {
    viaplay.getMovie.restore();
    server.close();
  });

  it("should return trailer url", function () {
    const movieResourceLink = "https://content.viaplay.se/pc­se/film/ted-2-2015";

    return chakram.get(`${host}:${port}/trailer?m=${movieResourceLink}`)
    .then(function(res) {
      expect(res).to.have.status(200);
      expect(res).to.have.header("content-type", "application/json; charset=utf-8");
      expect(res).to.comprise.of.json({
        trailerUrl: "https://www.youtube.com/watch?v=S3AVcCggRnU"
      });
    });
  });
});
