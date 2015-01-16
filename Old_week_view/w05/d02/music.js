var http = require("http");
var h1 = process.argv[2];
var domain = "http://localhost:3000";
// var domain = "http://alex.princesspeach.nyc:3000";
var msg = "";

var Artist = function(name, album_list, url_name){
	this.name = name;
	this.albums = album_list;
	this.url_name = url_name;
	this.createHTML = function(path){
		var downPath = path;
		var upPath = path;
		upPath = "/" + upPath.join("/");
		downPath.splice(downPath.length - 1);
		downPath = "/" + downPath.join("/");
		var backLink = "<a href='" + domain + downPath + "'>Back</a>";
		// console.log(backLink);
		var html = "<html><body><h1>" + this.name +"</h1><ul>";
		this.albums.forEach(function(album){
			var albumPath = upPath + "/" + album.url_name;
			// console.log(albumPath);
			linkAlbum = "<a href='" + domain + albumPath + "'>" + album.name + "</a>";
			html+= "<li>" + linkAlbum + "</li>";
		});
		html += "</ul>" + backLink + "</body></html>";
		return html;
	};
};
var Album = function(aName, songs, url_name){
	this.name = aName;
	this.songs = songs;
	this.url_name = url_name;
	this.createHTML = function(path){
		var downPath = path;
		downPath.splice(downPath.length - 1);
		downPath = "/" + downPath.join("/");
		var backLink = "<a href='" + domain + downPath + "'>Back</a>";
		var html = "<html><body><h1>" + this.name +"</h1><ul>";
		this.songs.forEach(function(song){
			html+= "<li>" + song + "</li>";
		});
		html += "</ul>" + backLink + "</body></html>";
		return html;
	};
};

var album1 = new Album("Enema of the State", ["Whats My Age Again", "Going Away To College", "Aliens Exist", "Adam's Song"], "enema_of_the_state");
var album2 = new Album("Dude Ranch", ["Damnit", "Boring", "Josie"], "dude_ranch");
var blink182 = new Artist("Blink 182", [album1, album2], "blink182");
var album3 = new Album("Commit this to Memory", ["Everything is Alright", "Resolution", "Feel like Rain"], "commit_this_to_memory");
var album4 = new Album("Even if it Kills Me", ["Last Night", "Calling all Cops", "Hello Hellicopter"], "even_if_it_kills_me");
var motion_city_soundtrack = new Artist("Motion City Soundtrack", [album3, album4], "motion_city_soundtrack");
var album5 = new Album("Hound of Love", ["Cloudbustin", "Hello Earth", "Jig of Life"], "hounds_of_love");
var album6 = new Album("Never For Ever", ["Babooshka", "Egypt", "Violin"], "never_for_ever");
var kate_bush = new Artist("Kate Bush", [album5, album6], "kate_bush");
var artists = [blink182, motion_city_soundtrack, kate_bush];

var server = http.createServer(function(request, response){
	var path = request.url;
	// console.log(path);
	var s_path = path.split("/");
	s_path.splice(0,1);
	// console.log(s_path);
	if(s_path[0] === "artists" ){
		if(s_path.length === 1){
			var html = "<html><body><h1>Artists</h1><ul>";
			artists.forEach(function(artist){
				var artistPath = path + "/" + artist.url_name;
				var artist_url = "<a href='" + domain + artistPath + "'>" + artist.name + "</a>";
				// console.log(artistPath);
				html+= "<li>" + artist_url + "</li>";
			});
			html += "</ul></body></html>";
			msg = html;
		}else if(s_path.length > 1){
			// s_path.splice(0,1);
			// console.log(s_path);
			artists.forEach(function(artist){
				// console.log(artist.url_name);
				if(s_path[1] === artist.url_name){
					if(s_path.length === 2){
						msg = artist.createHTML(s_path);
					}else if(s_path.length > 2){
						artist.albums.forEach(function(album){
							if(album.url_name === s_path[2] && s_path.length === 3){
								msg = album.createHTML(s_path);
							};
						});
					};
				};
			});
		};
	}
	if(msg === ""){
		msg = "404 error: does not exist";
	}
	response.end(msg)
	msg = "";
});

server.listen(3000);










	// Old Code, USELESS


// var Artists = function(name, album1, song11, song12, song13, album2, song21, song22, song23){
// 	this.name = name;
// 	this.album1 = {name:album1, 
// 		song1: song11, 
// 		song2: song12, 
// 		song3: song13,
// 		this.getSongs = function(){
// 			return [song1, song2, song3];
// 		};
// 	};
// 	this.album2 = {name:albume1, 
// 		song1:song21, 
// 		song2:song22, 
// 		song3:song23,
// 		this.getSongs = function(){
// 			return [song1, song2, song3];
// 		};
// 	};
// 	this.getAlbums = function(){
// 		return [album1, album2];
// 	};
// }

// var blink182 = new Artists("Blink 182", "Enema of the State", "Whats my age again", "Going Away to College", "Aliens Exist", "Dude Ranch", "Damnit", "Boring", "Josie");
// var motion_city_soundtrack = new Artist("Motion City Sountrack", "Commit this to Memory", "Everything is Alright", "Resolution", "Feel like Rain",
// 	"Even is if kills Me", "Last Night", "Calling all Cops", "Hello Helicopter");
// var strokes = new Artists("The Strokes", "Room on Fire", "Reptilia", "Automatic Stop", "Under Control")

