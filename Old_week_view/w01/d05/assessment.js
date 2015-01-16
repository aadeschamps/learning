for (var i = 10; i <= 100; i+=10) {
	console.log(i);
};


var word = process.argv[2];

for (var i = 0; i < word.length; i++) {
	if ( (i % 2) === 0){
		console.log(word[i]);
	}
};
for (var i = 0; i < word.length; i+=2) {
	console.log(word[i]);	
};