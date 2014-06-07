var apiParseUrl = require('./api/parseUrl');
var apiEmbedlyExtract = require('./api/embedlyWrapper');

module.exports = function(app) {
 	app.get('/articles', function(req, res) {
    	res.send('hello');
  	});

  	//Parse the url
	app.get('/api/parseUrl', apiParseUrl);
	app.get('/api/embedly/extract', apiEmbedlyExtract);

};
