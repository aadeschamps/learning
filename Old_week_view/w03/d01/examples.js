var counter = 0;

var hi = setInterval( function(){
	console.log("Hello");
	counter++;
	if(counter === 5){
		clearInterval(hi);
	}
}, 2000);