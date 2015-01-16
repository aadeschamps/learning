
var fs = require("fs");

var name1 = process.argv[2];
var name2 = process.argv[3];
var new_name = process.argv[4];
var txt1;
var txt2;

var read = function(){

	fs.readFile(name1,function(err, data){
		if(err){
			console.log("error");
		}else{
			txt1 = data.toString();
			txt1 = txt1.split("\n");
		}
	});

	fs.readFile(name2,function(err, data){
		if(err){
			console.log(err);
		}else{
			txt2 = data.toString().split("\n");
			write(); //important part
		}
	});
};

read();

var write = function(){
	var text3 = [];

	if(txt1.length > txt2.length){
		var all = txt1.length;
	}else{
		var all = txt2.length;
	};

	console.log(all);

	for (var i = 0; i < all; i++) {
		console.log(i);
		if(i < txt1.length){
			text3.push(txt1[i]);
		}
		if(i < txt2.length){
			text3.push(txt2[i]);
		}
	};

	text3 = text3.join("\n");

	fs.writeFile(new_name, text3, function(err){
		if(err){
			console.log(err);
		}else{
			console.log("it worked");
		}
	});
};
