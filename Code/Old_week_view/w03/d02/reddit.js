
var array = document.querySelectorAll(".title.may-blank");
var array2 = document.querySelectorAll(".title.may-blank");
var new_array = [];
var temp_array = [];
var length = array.length;
for (var i = 0; i < array.length; i++) {
	temp_array.push(array[i])
};

for (var i = 0; i < length; i++) {
	var ran = Math.floor(Math.random()*temp_array.length);
	console.log(ran);
	new_array.push(temp_array[ran]);
	temp_array.splice(ran,1);
};

for (var i = 0; i < array2.length; i++) {
	array2[i].innerHTML = new_array[i].innerHTML;
};