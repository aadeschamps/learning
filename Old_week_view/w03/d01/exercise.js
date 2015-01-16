
var callInFive = function(func){
	setTimeout(func, 5000);
}


callInFive(function(){console.log("Hello")});