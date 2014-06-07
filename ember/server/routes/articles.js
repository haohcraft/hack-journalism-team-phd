module.exports = function(app) {
  app.get('/articles', function(req, res) {
    res.send('hello');
  });
};
