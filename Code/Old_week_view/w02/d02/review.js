
/*
var removeEvens = function(arr){
	var new_arr = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] % 2 != 0){
			new_arr.push(arr[i]);
		}
	};
	return new_arr;
}

var a = [3,4,5,6,20,11];
var b = removeEvens(a);
console.log(b);

var mergeString = function(arr){
	var message = ""
	for (var i = 0; i < arr.length; i++) {
		message += "Hey there, " + arr[i] + ". ";
	};
	return message
}
var stooges = ["Larry", "Curly", "Moe"];
var stoogeString = mergeString(stooges);
console.log(stoogeString);

var mergeArray = function(arr1, arr2) {
	var new_arr = []
	for (var i = 0; i < arr1.length; i++) {
		new_arr.push(arr1[i]);
		new_arr.push(arr2[i]);
	}
	return new_arr;
}
var fun = ["pretzels", "cheez-its", "m&ms"];
var work = ["raisins", "dried apricots", "nuts"];
var trailMix = mergeArray(fun, work);
console.log(trailMix);

var mergeHashes = function(hash1, hash2){
	var keys1 = Object.keys(hash1);
	var keys2 = Object.keys(hash2);
	var new_obj = {};
	if(keys1.length >= keys2.length){
		var counter = 0;
		for (var i = 0; i < keys2.length; i++) {
			new_obj[keys1[i]] = hash1[keys1[i]];
			new_obj[keys2[i]] = hash2[keys2[i]];
			counter++;
		};
		for (var i = counter; i < keys1.length; i++) {
			new_obj[keys1[i]] = hash1[keys1[i]];
		}
	}else{
		var counter = 0;
		for (var i = 0; i < keys1.length; i++) {
			new_obj[keys1[i]] = hash1[keys1[i]];
			new_obj[keys2[i]] = hash2[keys2[i]];
			counter++;
		};
		for (var i = counter; i < keys2.length; i++) {
			new_obj[keys2[i]] = hash1[keys2[i]];
		}
	};
	return new_obj;
}
var blue = {
  "Heisenberg": "Hello, anyone home?",
  "Cap'n Cook": "Science, friend!",
  "James McGill": "Ring, ring!"
}
var ciudad = {
  "Vuente": "Salud!",
  "Gus": "One taste and you'll know.",
  "Tio": "Family is all."
}
var happyFamily = mergeHashes(blue, ciudad);
console.log(happyFamily);

var Sheep = function() {
	this.name = "sheep";
	this.species = "O.aries";
	this.genus = "Ovis";
	this.phylum = "Chordate";
	this.kingdom = "Animalia";
}

var BaseballPlayer = function(name, team){
	this.name = name;
	this.team = team;
}

var car = function(car_brand, model, color){
	this.car_brand = car_brand;
	this.model = model;
	this.color = color;
	this.gear = "parked";
	this.stopped = true;
	this.drive = function(){
		if(this.gear === "drive"){
			console.log(this.car_brand + " " + this.car_brand + 
			 " is alread in drive");
		}else{
			this.gear = "drive"
			console.log(this.car_brand + " " + this.car_brand + 
				 " is now in drive")
		}
	}
	this.accelerate = function(){
		if(this.gear === "parked"){
			console.log(this.car_brand + " " + this.model + 
			 " must first be put in drive");
		}else{
			this.stopped = true;
			console.log(this.car_brand + " " + this.model + 
			 " is now accelerating");
		}
	}
	this.stop = function() {
		if(this.stopped){
			console.log(this.car_brand + " " + this.model + 
			 " is already stopped");
		}else {
			this.stopped = true;
			console.log(this.car_brand + " " + this.model + 
			 " has stopped")
		}	
	}
	this.park = function(){
		if(this.stopped){
			if(this.gear === "parked"){
				console.log(this.car_brand + " " + this.model + 
			 " is already in park");
			}else{
				console.log(this.car_brand + " " + this.model + 
			 " is now in park");
			}
		}else{
			this.gear = "parked";
			console.log(this.car_brand + " " + this.model + 
			 " must be stopped first");
		}
	}
}

var FordFocus = new car("Ford", "Focus", "blue");
FordFocus.drive();
*/
var num = 10;
var countDown = function(){
	if(num > 0){
		process.stdout.write(num + "...");
		num--;
	}else{
		console.log("HAPPY NEW YEAR!!");
		clearInterval(timer);
	}
}

var timer = setInterval(countDown, 1000);