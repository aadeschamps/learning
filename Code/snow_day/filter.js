

function zeroFront(array){
	for (var i = 0; i < array.length; i++) {
		if (array[i] == 0){
			for (var x = 0; x < array.length; x++) {
				if (array[x] != 0){
					array[i] = array[x];
					array[x] = 0;
					break;
				}
			};
		}
	};
	return array;
};

var array = [1,1,0,1,0,0,1,0,0,1];

console.log(zeroFront(array));