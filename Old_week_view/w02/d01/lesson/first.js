/*

var bulbasaur = {
	PokeID: 1,
	type: "Grass",
	move: "tackle",
}

// to get an element
bulbasaur.move;
bulbasaur["move"];

// changing
bulbasaur.move = "leer";

*/

var breakfest_club = {
	"Andrew Clark": "Emilio Estevez",
	"Richard Vernon": "Paul Gleason",
	"Brian Johnson": "Anthony Michael Hall",
	"John Bender": "Judd Nelson",
	"Claire Standish": "Molly Ringwald",
}

var search = function(name) {
	console.log( breakfest_club[name] );
}

var name = process.argv[2];
search(name);

var colors = {
  dan: "purple",
  lisa: "kale",
  carl: "green",
  lenny: "pink",
  tina: "maroon",
  ted: "yellow",
  crawford: "pink",
  kobe: "silver",
  david: "white",
  sean: "purple",
  nina: "black",
  robyn: "aqua",
  larry: "orange",
  sam: "purple"
}

var looper = Object.keys(colors);
for (var i = 0; i < looper.length; i++) {
	if ( (colors[looper[i]] === "pink") || 
		(colors[looper[i]] === "purple") ){
			console.log(looper[i]);
	}
};
