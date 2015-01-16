var button = document.getElementById("search-submit");

button.innerHTML = "Let me Yahoo that for you";

var push = function(){
	alert("I don't think yahoo is ever used as a verb, just google it damnit!");
}
button.addEventListener("click", push);