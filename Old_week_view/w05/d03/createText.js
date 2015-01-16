
var fs = require("fs");

var file = process.argv[2];
var txt = process.argv[3];

fs.writeFile(file, txt, function(err){
	if(err){
		console.log(err);
	}else{
		console.log("It worked");
	}
})