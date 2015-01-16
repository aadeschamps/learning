var doublePrint = function(num){
	console.log(num * 2);
}
doublePrint(3);

var doublePrintArrays = function(arr){
	arr.forEach(function(elem){
		console.log(elem * 2);
	});
}
doublePrintArrays([1,2,3]);

var doublePrintRet = function(arr){
	var new_array = []
	arr.forEach(function(elem){
		new_array.push(elem * 2);
	});
	return new_array;
}

console.log(doublePrintRet([1,2,3]))