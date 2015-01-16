var leonardo = {
	name: "Leonardo",
	color: "blue",
	weapons: "ninjato",
	namedAfter: "Leonardo Da Vinci",
	likesPizza: true,
	pizzaEaten: false,
	eatPizza: function(){
		if (this.pizzaEaten){
			console.log("Leanoardo has already eaten pizza")
			this.pizzaEaten = false;
		} else {
			console.log("Leonardo is eating pizza");
			this.pizzaEaten = true;
		}
	}
}

var michelangelo = {
	name: "Michelangelo",
	color: "orange",
	weapons: "nunchucks",
	namedAfter: "Michelangelo Buonaroti",
	likesPizza: true
}

var raphael = {
	name: "Raphael",
	color: "red",
	weapons: "sai",
	namedAfter: "Raffaello Sanzio da Urbino",
	likesPizza: true
}

var donatello = {
	name: "Donatello",
	color: "purple",
	weapons: "bo",
	namedAfter: "Donato di Niccolo di Betto Bardi",
	likesPizza: true
}

var turtles = [leonardo, michelangelo, raphael, donatello];

for (var i = 0; i < turtles.length; i++) {
	console.log(turtles[i].name + " wears a " + turtles[i].color + " bandana, " +
  "his weapon is " + turtles[i].weapon + ", he is named after " +
  turtles[i].namedAfter + ", and he likes pizza.");
};

leonardo.eatPizza();
leonardo.eatPizza();
leonardo.eatPizza();
leonardo.eatPizza();
leonardo.eatPizza();
