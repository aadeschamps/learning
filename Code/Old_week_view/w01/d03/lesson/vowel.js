var input = process.argv[2];
var counter = 0;

while (counter < input.length){
	if ( (input.charAt(counter) === "a") || (input.charAt(counter) === "e") ||
		(input.charAt(counter) === "i") || (input.charAt(counter) === "o") ||
		(input.charAt(counter) === "u") ){
		console.log(input.charAt(counter));
	}
	counter++;
}