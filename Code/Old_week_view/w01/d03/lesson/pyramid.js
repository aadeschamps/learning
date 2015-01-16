var num = parseInt(process.argv[2]);
var num2 = (num - 1);
var counter = 1;
var amount = 1;
if (num === 1){
	console.log("^");
}else{
	while (counter <= (num)){
		var in_loop = num2;
		var spaces = "";
		var string = "";
		while(in_loop >= 0){
			spaces = spaces + " ";
			in_loop--;
		}
		in_loop = amount;
		while(in_loop > 0){
			string = string + "^";
			in_loop--;
		}
		var row = spaces + string + spaces;
		console.log(row);
		counter++;
		amount+= 2;
		num2--;
	}
}