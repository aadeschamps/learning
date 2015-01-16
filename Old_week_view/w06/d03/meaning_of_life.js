

console.log("Do you want to know the meaning of life");
process.stdin.on("data", function(data){
	var answer = data.toString().trim()
	if(answer === "y"){
		console.log("42")
	}else{
		console.log("fine, be that way!")
	}
	process.stdin.pause();
});

