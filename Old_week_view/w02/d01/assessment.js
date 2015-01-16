var id = function(name, age, func){
	var message = name + " is " + age + " years old.";
	console.log(message);
	func(age);
}

var bouncer = function(age){
	if (age >= 21){
		console.log("Come in!");
	} else {
		console.log("Psh! nice try bud!");
	}
}

id("Alex", 24, bouncer);