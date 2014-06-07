var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.resource('articles', function() {
  });
  this.route('article', 'article/:article_id');
});

export default Router;
