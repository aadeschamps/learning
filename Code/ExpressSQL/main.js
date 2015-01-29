//
var addAllPets = function(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://localhost:3000/pets');
	xhr.addEventListener('load', function(){
		var pets = JSON.parse(xhr.responseText);
		pets.forEach(function(pet){
			addPet(pet);
		});
	});
	xhr.send();
};

// adds pets to the unordered list
var addPet = function(pet){
	var li = document.createElement('li');
	setLiToPet(li, pet);
	var ul = document.getElementById('petsList');
	ul.appendChild(li);
};

// adds the edit fields for a pet

var editPet = function(li, name, type){
	li.innerHTML = '';
	var id = li.id.substring(3);
	var nameField = document.createElement('input');
	nameField.setAttribute('type', 'text');
	nameField.value = name;
	li.appendChild(nameField);

	var isA = document.createTextNode(' is a ');
	li.appendChild(isA);

	//pet type input text field

	var typeField = document.createElement('input');
	typeField.setAttribute('type', 'text');
	typeField.value = type;
	li.appendChild(typeField);

	// add update button

	var updateButton = document.createElement('button');
	updateButton.innerHTML = "Update";
	updateButton.addEventListener('click', function(){
		var newName = nameField.value;
		var newType = typeField.value;
		updatePet(li,newName,newType);
	});
	li.appendChild(updateButton);
};

var updatePet = function(li, newName, newType){
	var id = li.id.substring(3);
	var xhr = new XMLHttpRequest();
	xhr.open('PUT', 'http://localhost:3000/pet/' + id);
	xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
	xhr.addEventListener('load', function(){
		var returnedPet = JSON.parse(xhr.responseText)
		setLiToPet(li,returnedPet);
	});
	var updatedPet = { name: newName, type: newType};
	xhr.send(JSON.stringify(updatedPet));
}

// Adds id, name, and type to each li
function setLiToPet(li, pet){
	li.setAttribute('id', 'pet' + pet.id);
	li.innerHTML = "";

	var petText = pet.name + " is a " + pet.type + " ";
	var petTextNode = document.createTextNode(petText);
	li.appendChild(petTextNode);

	var edit = document.createElement('button');
	edit.innerHTML = "Edit";
	edit.addEventListener('click', function(){
		editPet(li, pet.name, pet.type);
	});
	li.appendChild(edit);
	var deleteButton = document.createElement('button');
	deleteButton.innerHTML = "Delete";
	deleteButton.addEventListener('click', deletePet);
	li.appendChild(deleteButton);
}

addAllPets();

var add = document.getElementById('add');
add.addEventListener('click', function(){
	var newName = document.getElementById('newPetName');
	var newType = document.getElementById('newPetType');

	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'http://localhost:3000/pet');
	xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
	xhr.addEventListener('load', function(){
		var returnedPet = JSON.parse(xhr.responseText);
		addPet(returnedPet);
		newName.value = '';
		newType.value = '';
	});
	var newPet = { name: newName.value, type: newType.value };
	console.log(newPet);
	xhr.send(JSON.stringify(newPet));
});


// deletes a pet using the API
var deletePet = function(){
	var li = this.parentNode;
	var id = li.id.substring(3);
	var xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'http://localhost:3000/pet/' + id);
	xhr.addEventListener('load', function(){
		if(JSON.parse(xhr.responseText)['deleted'] === true){
			li.remove();
		}
	})
	xhr.send();
}
