var suit = ["Hearts", "Diamonds", "Spades", "Clubs"];

var deck = [];
for (var i = 0; i < 4; i++) {
	var array = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
	var new_array = [];
	while (array.length > 0){
		var index = Math.floor(Math.random() * (array.length))
		new_array.push(array[index]);
		array.splice(index, 1);
	}
	deck.push(new_array);
};
console.log(deck);
var counter = 0;
while(deck.length > 0){
	if( (deck[0].length === 1 ) && ( deck.length === 1 )){
		console.log("End! HHOOOOOORRRRRAAAYYY");
		deck.splice(0);
	}else{
		var value = 0;
		for (var i = 0; i < 3; i++) {
			var random1 = Math.floor(Math.random() * (deck.length))
			var random2 = Math.floor(Math.random() * (deck[random1].length))
			if ( (deck[random1][random2] === "J") || (deck[random1][random2] === "Q") || 
				(deck[random1][random2] === "K") ){
			value += 10;
			}else if(deck[random1][random2] === "A"){
				value += 1;
			}else{
				value += deck[random1][random2];
			}
			var string = deck[random1][random2] + " of " + suit[random1];
			console.log(string);
			counter++;
			console.log(counter);
			deck[random1].splice(random2, 1);
			if(deck[random1].length === 0){
				deck.splice(random1, 1);
				suit.splice(random1, 1);
			}
		};
		console.log("Total value: " + value);
		if(value > 21){
			console.log("Bust! Try again!");
		}else if (value === 0){
			console.log("You win!");
		}else{
			console.log("Close");
		}
	}
}