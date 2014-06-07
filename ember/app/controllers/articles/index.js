var ArticleIndexController = Ember.ObjectController.extend({
  newArticleUrl: '',

  actions: {
    submitNewArticle: function() {
      var newArticleUrl = this.get('newArticleUrl');
      console.log(newArticleUrl);
    }
  }
});

export default ArticleIndexController;

