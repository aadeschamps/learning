var phone_number = process.argv[2];

if((!isNaN(phone_number)) && (phone_number.length === 10)){
	console.log("Valid");
}else{
	console.log("Invalid");
}

