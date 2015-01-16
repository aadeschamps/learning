var number = [2,3,4,5,6,7,8,9,"J","Q","K","A"];
var suit = ["Hearts", "Diamonds", "Spades", "Clubs"];

var counter = 0;
while(counter < number.length){
	var counter2 = 0;
	while(counter2 < suit.length){
		console.log(number[counter] + " of " + suit[counter2]);
		counter2++;
	}
	counter++;
}

var value_card_1 = number[Math.floor(Math.random() * 11)];
var suit_card_1 = suit[Math.floor(Math.random() * 3)];
var value_card_2 = number[Math.floor(Math.random() * 11)];
var suit_card_2 = suit[Math.floor(Math.random() * 3)];
console.log(value_card_1 + suit_card_1);
console.log(value_card_2 + suit_card_2);
if ( (value_card_1 === "J") || (value_card_1 === "Q") ||
	(value_card_1 === "K") ){
	value_card_1 = 10;
}else if(value_card_1 === "A"){
	value_card_1 = 1;
}
if ( (value_card_2 === "J") || (value_card_2 === "Q") ||
	(value_card_2 === "K") ){
	value_card_2 = 10;
}else if(value_card_2 === "A"){
	value_card_2 = 1;
}
var total = value_card_1 + value_card_2;

console.log("Your value: " + total);

counter = 0;
while(counter)
