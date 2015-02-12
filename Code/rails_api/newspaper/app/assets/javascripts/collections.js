

var ArticlesCollection = Backbone.Collection.extend({
	model: Article,
	url: 'http://localhost:3000/articles'
});

var articles = new ArticlesCollection();



var newArticle = new Article({
  headline: "Spiders attack!",
  content: "After spiders killed my parents, I decided to become a crime fighter",
  photo_url: "http://img3.wikia.nocookie.net/__cb20100419210629/marvel_dc/images/1/14/Superman_0002.jpg"
});
console.log(newArticle);

articles.create(newArticle, {
	success: function(response){
		articles.set('id', respone.toJSON().id);
		console.log(articles.toJSON());
		articles.save();
	}
});