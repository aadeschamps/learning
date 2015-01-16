var Pokemon = function(name, pokeId, type) {
	this.name = name;
	this.pokeId = pokeId;
	this.type = type;
}

var ivysaur = new Pokemon("Ivysaur", 2, "grass");
console.log(ivysaur);