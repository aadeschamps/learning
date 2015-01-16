
var fib_arr = [];

for (var i = 0; i < 100; i++) {
	if (i <= 1){
		fib_arr.push(i);
	}else{
		var new_num = fib_arr[i-2] + fib_arr[i-1];
		fib_arr.push(new_num);
	}
};
console.log(fib_arr);