
var notifier = require('node-notifier');
var cowsay = require('cowsay');

process.stdin.on("data", function(input){
	var proc_input = input.toString().trim();
	var message = cowsay.say({'text':proc_input});
	notifier.notify({
		'title': "Notification:",
		'message': message,
	});
});