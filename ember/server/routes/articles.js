var apiParseUrl = require('./api/parseUrl');
var apiEmbedlyExtract = require('./api/embedlyWrapper');

module.exports = function(app) {
  //Parse the url
  app.get('/api/parseUrl', apiParseUrl);
  app.get('/api/embedly/extract', apiEmbedlyExtract);

  app.get('/api/articles', function(req, res) {
    res.send('hello');
  });
};
