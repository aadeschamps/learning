var item = process.argv[2];

if(item === "fruit salad" || item === "tofurkey"){
	console.log("This cuisine is vegan friendly");
}else if(item === "pork chops" || item === "steak"){
	console.log("Vegans beware!");
}else{
	console.log(item + " is not on the menu");
}