

var Article = Backbone.Model.extend({
	defaults: {
		headline: 'Forgot a headline',
	},
	initialize: function(){
		console.log('hey, you created me');
		this.on('change', function(){
			console.log('Stop the presses!!!');
		})
		this.on('change:content', function(){
			console.log('who that that through?')
		})
	},
	validate: function(attr){
		if(attr.headline === undefined){
			return 'no headline';
		}
		is_photo = attr.photo_url.substring(0,7)
		console.log(is_photo);
		if(is_photo != 'http://'){
			return 'no photo url';
		}
		if(attr.content === undefined){
			return 'no content';
		}
	}
})


var newArticle = new Article({
  headline: "Spiders attack!",
  content: "After spiders killed my parents, I decided to become a crime fighter",
  photo_url: "http://img3.wikia.nocookie.net/__cb20100419210629/marvel_dc/images/1/14/Superman_0002.jpg"
});
console.log(newArticle);
newArticle.save();