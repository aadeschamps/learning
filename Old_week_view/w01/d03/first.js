var day = process.argv[2];

if ( (day === "Saturday") || (day === "Sunday")){
	console.log("It's the weekend! Woooo!");
} else if ((day === "Monday") ||(day === "Tuesday") || (day === "Wednesday") || (day === "Thursday") || (day === "Friday")) {
	console.log("Its a weekday... booo!");
} else {
	console.log("Invalid Input");
}
