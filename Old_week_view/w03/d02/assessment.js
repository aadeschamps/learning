

var addNumbers = function(num1, num2){
	return num1 + num2;
}

console.log(addNumbers(3,5));


var addNumberArrays = function(arr1, arr2){
	var new_arr = []
	for (var i = 0; i < arr1.length; i++) {
		var num = arr1[i] + arr2[i];
		new_arr.push(num);
	};
	return new_arr;
}

var new_arr = addNumberArrays( [1,2,3], [2,3,4]);
console.log(new_arr);