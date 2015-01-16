var count = 1;
var arr = [];
while (count <= 100) {
	arr.push(count);
	count++;
}
console.log(arr[Math.floor(Math.random() * 99)])

var arr2 = [];
for (var i = 1; i <= 100; i++) {
	arr2.push(i);
}
console.log(arr2[Math.floor(Math.random() * 99)])

var fav_teams = ["Raiders", "Knicks", "Islanders", "Yankees","Mets"];

var ninjas = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
var counter = 0;
while (counter < ninjas.length){
	var name = ninjas[counter];
	console.log(name.toUpperCase());
	counter++;
}

// for loop syntax: 
// for (var i = 0; i < Things.length; i++) {
//	 Things[i]
// 
