
var everyOther = function(arr, num){
	var new_arr = [];
	arr.forEach(function(elem){
		if( (arr.indexOf(elem) % 2) === 0){
			new_arr.push(elem + num);
		}else{
			new_arr.push(elem * num);
		}
	})
	return new_arr;
}

var array = [1,5,10,2,20,50];
var number = 8;

var new_arr = everyOther(array, number);
console.log(new_arr);