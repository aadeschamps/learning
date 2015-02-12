

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
		if(is_photo != 'http://'){
			return 'no photo url';
		}
		if(attr.content === undefined){
			return 'no content';
		}
	}
})


