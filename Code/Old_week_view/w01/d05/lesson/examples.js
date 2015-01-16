var double_func = function(num){
	return (num * 2);
}
console.log(double_func(8));


var max = function(num1, num2, num3){
	var array = [num1, num2, num3];
	var max = num1;
	/*for (var i = 0; i < array.length; i++) {
		if (array[i] > max){
			max = array[i];
		}
	};*/
	if (num2 >= num1){
		max = num2;
	}
	if(max <= num3){
		max = num3;
	}
	return max;
}
var num1 = parseInt(process.argv[2]);
var num2 = parseInt(process.argv[3]);
var num3 = parseInt(process.argv[4]);
console.log( max(num1, num2, num3) );

// can do this with comparing 3 with 2 function: 
// max( max(5,10), 15)

var area_rect = function(width, height){
	return (width * height);
}

var peri_rect = function(width, height){
	return ( width + width + height + height);
}

var area_circ = function(radius){
	return (Math.PI * radius * radius);
}

console.log( area_rect(num1, num2) );
console.log( peri_rect(num1, num2) );
console.log( area_circ(num3) );

/*
	passing a function to a function example	
*/
var a = function(op){
	var result = op(10);
	console.log(result);
};
a(double_func);

// Timeout examples:
var z = function(){
	console.log("Hey!");
};
setTimeout(z, 2000);
setInterval(z, 2000);
console.log("Woah");