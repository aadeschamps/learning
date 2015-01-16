var input = process.argv[2];
var counter = 0;
var o_count = 0;
while (counter <= input.length){
	if (input[counter] === "o"){
		o_count++;
	}
	counter++;
}
if (o_count === 2){
	console.log("valid");
}else{
	console.log("invalid");
}