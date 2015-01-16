var Turtle = function(name, color, weapon){
	this.name = name;
	this.color = color;
	this.weapon = weapon;
	this.likePizza = true;
	this.pizzaEaten = false;
	this.eatPizza = function(){
		if (this.pizzaEaten){
			console.log(this.name +" has already eaten pizza")
			this.pizzaEaten = false;
		} else {
			console.log(this.name + " is eating pizza");
			this.pizzaEaten = true;
		}
	}
}

var leonardo = new Turtle("Leonardo", "blue", "ninjato");
var michelangelo = new Turtle("Michelangelo", "orange", "nunchucks");
var raphael = new Turtle("Alex", "red", "sai");
var donatello = new Turtle("Donatello", "purple", "bo");
var trey = new Turtle("Trey", "black", "gun")
var turtles = [leonardo, michelangelo, raphael, donatello, trey];
console.log(turtles);