var words1 = ["Apple", "Cap'n", "Cinammon", "Cocoa", "Frosted", "Honey bunches of", "Raisin", "Shredded", "Toasted"];
var words2 = ["Bran", "Crunch", "Crisp", "Flakes", "Jacks", "Krispies", "Loops", "Pebbles", "Pops", "Puffs"];
var times = process.argv[2];

while (times > 0){
	var phrase1 = Math.floor(Math.random() * words1.length);
	var phrase2 = Math.floor(Math.random() * words2.length);
	console.log(words1[phrase1] + " " + words2[phrase2]);
	times--;
}