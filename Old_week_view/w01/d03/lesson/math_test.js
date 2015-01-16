var guess = parseInt(process.argv[2]);
var comp_num = Math.floor(Math.random() * 10);
if (comp_num === guess){
	console.log("Sucess!");
}else {
	console.log("Sorry, we were looking for " + comp_num);
}