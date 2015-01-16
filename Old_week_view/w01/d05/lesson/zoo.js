var zoo = ['elephant', 'alligator', 'panda', 
'lion', 'monkey', 'koala', 'tiger', "t-rex", 
"puffins", "dodo", "Crawford","penguins"]

var add = function(name, zoo_animals){
	zoo_animals.push(name);
	return zoo_animals;
}

var remove = function(name, zoo_animals){
	zoo_animals.splice(zoo_animals.indexOf(name), 1);
	return zoo_animals;
}

var switch_pos = function(name1, name2, zoo_animals){
	var index1 = zoo_animals.indexOf(name1);
	var index2 = zoo_animals.indexOf(name2);
	zoo_animals[ index1 ] = name2;
	zoo_animals[ index2 ] = name1;
	return zoo_animals;
}

var sort = function(zoo_animals){
	return zoo_animals.sort();
}

var reverse_sort = function(zoo_animals){
	zoo_animals.sort();
	zoo_animals.reverse();
	return zoo_animals;
}

console.log();
var new_array = add("animal", ['elephant', 'alligator', 'panda', 
'lion', 'monkey', 'koala', 'tiger', "t-rex", 
"puffins", "dodo", "Crawford","penguins"]);
console.log(new_array);
new_array = switch_pos("elephant", "penguins", ['elephant', 'alligator', 'panda', 
'lion', 'monkey', 'koala', 'tiger', "t-rex", 
"puffins", "dodo", "crawford","penguins"])
console.log(new_array);
new_array = remove("penguins", new_array);
console.log(new_array);
new_array = sort(new_array);
console.log(new_array);
new_array = reverse_sort(new_array);
console.log(new_array);