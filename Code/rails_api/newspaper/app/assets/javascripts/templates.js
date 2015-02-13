
show_one = [
	'<h3><a href="/articles/<%=article.id%>"><%=article.headline%></a></h3>',
	'<button class="btn-default" data-toggle="collapse" data-target="#article<%=article.id%>">Show Content</button>',
	'',
	'<br>',
	'<div class="row collapse col-md-12 text-center" id="article<%=article.id%>"> by <%= article.content %>',
	'<%= article.content %>',
	'<br>',
	'<img src="<%=article.photo_url%>" class="center-block img-circle">',
	'<br></div>'
].join("");



$(document).ready(function() {
var ArticlesView = Backbone.View.extend({
	el: '#all-articles',

	initialize: function(){
		this.listenTo(this.collection, 'sync', this.render);
	},

	render: function(){
		var el = this.$el;
		el.html('');
		this.collection.each(function(article){
			el.append(new ArticleView({model: article}).render().el);
		});
		return this;
	}
});

var ArticleView = Backbone.View.extend({
	tagName: 'div',
	className: 'row col-md-12 text-center',
	template: _.template(show_one),

	render: function(){
		this.$el.html(this.template({article: this.model.toJSON()}));
		return this
	}	
});

var CreateArticleView = Backbone.View.extend({
	el: '#new-article',
	events: {'click #addArticleButton': 'createArticle'},

	createArticle: function(){
		console.log('hello');
		var headlineField = $('#newArticleHeadline');
		var contentField = $('#newArticleContent');
		var photoField = $('#newArticlePhoto');
		var newArticle = new Article({
			headline: headlineField.val(),
			content: contentField.val(),
			photo_url: photoField.val()
		});
		console.log(this.collection.create(newArticle));
		headlineField.val('');
		contentField.val('');
		photoField.val('');
	}
});


var createArticle = new CreateArticleView({collection: articles});
var articlesView = new ArticlesView({collection: articles});

articles.fetch();

});
