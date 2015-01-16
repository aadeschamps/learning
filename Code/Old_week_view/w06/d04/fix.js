var arg = process.argv[2].toLowerCase();
var vowelcheck = 0;
var vowelspot = [];
var vowelCount = 0;
for(var i = 0; i<arg.length; i++) {
	if (arg[i] === "a" || arg[i] === "e" || arg[i] === "i" || arg[i] === "o" || arg[i] === "u") {
	vowelCount ++;
	vowelspot.push(i);
	}
	if (i === arg.length - 1 && vowelCount > 1){
		console.log(vowelspot);
		for(var j = 0; j<vowelspot.length; j++) {
			if (vowelspot[j] - vowelspot[j + 1] === -1 ) {
				console.log("nope");
				break;
			}else if (j === vowelspot.length - 1){
				console.log("it checks out");
			}
		}
	}
}