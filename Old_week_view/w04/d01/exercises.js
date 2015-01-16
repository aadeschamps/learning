/*console.log("Type in your input");

process.stdin.on("data", function(input){	
	var newdata = input.toString().trim().toLowerCase();
	if (newdata === "hello"){
		console.log("hi!")
	}else{
		console.log("right right...");
	}
});

console.log("Press enter to continue");
process.stdin.on("data", function(input){
	var proc_input = input.toString().trim().toLowerCase();
	if (proc_input === "exit"){
		process.exit();
	}else{
		console.log("Press enter to continue");
	}
});*/

var joke1 = "Why did the cookie go to the hospital?... because he felt crummy!";
var joke2 = "Why did the chicken cross the road?... to get to the other side!";
var joke3 = "What do you call it when Batman skips church?... Christian Bale!";

var jokes = [joke1, joke2, joke3];

var ran = Math.floor(Math.random() * jokes.length);
console.log(jokes[ran]);
console.log("Want to hear another? (y/n)")
process.stdin.on("data", function(input){
	var proc_input = input.toString().trim().toLowerCase();
	if (proc_input === "n"){
		process.exit();
	}else{
		var ran = Math.floor(Math.random() * jokes.length);
		console.log(jokes[ran]);
		console.log("Want to hear another? (y/n)")
	}
});
