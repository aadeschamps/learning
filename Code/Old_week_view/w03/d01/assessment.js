
var Person = function(name, age){
	this.name = name;
	this.age = age;

	this.birthday = function(){
		this.age++;
	}
}

var me = new Person("Alex", 24);

console.log(me);

me.birthday();

console.log(me);
