
var title = process.argv[2];
var director = process.argv[3];
var rating = parseInt(process.argv[4]);


var Movie = function(title, director){
	this.title = title;
	this.director = director;

	this.addRating = function(rating){
		if (rating === 0){
			console.log("Unfortunately, it gets two thumbs down");
		}else if (rating === 1){
			console.log("One thumb up, one thumb down");
		}else if (rating === 2){
			console.log("TWO THUMBS UP!!!");
		}else {
			console.log("Rating must be between 0 and 2");
		}
	}
}

var new_movie = new Movie(title, director);
console.log(new_movie.title +" came out this past weekend, it was directed by " + 
	new_movie.director);
new_movie.addRating(rating);