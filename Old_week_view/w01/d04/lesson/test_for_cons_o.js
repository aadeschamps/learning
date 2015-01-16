var input = process.argv[2];
var counter = 0;
var o_count = 0;
var oo_count = 0;
while (counter <= input.length){
	if (input[counter] === "o"){
		o_count++;
	}else {
		if (o_count === 2){
			oo_count++;
		}
		o_count = 0;
	}
	counter++;
}
if (oo_count === 1){
	console.log("valid");
}else{
	console.log("invalid");
}