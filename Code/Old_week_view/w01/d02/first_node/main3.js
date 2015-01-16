var num1 = parseInt(process.argv[2]);
var num2 = parseInt(process.argv[3]);
var num3 = parseInt(process.argv[4]);


if(num1 > num2 && num1 > num3){
	console.log(num1 + " is the biggest");
} else if(num2 > num1 && num2 > num3){
	console.log(num2 + " is the biggest");
} else if(num3 > num2 && num3 > num1){
	console.log(num3 + " is the biggest");
}else{
	console.log("two or more are the same");
}

if(num1 > num2){
	if(num1 > num3){
		console.log(num1 + " is the biggest");
	} else if(num1 == num3){
		console.log("Two numbers are the same: " + num1)
	}
}else if(num2 > num1){
	if(num)
}