var request = require('request');
var url = "http://api.randomuser.me/";
request(url, function(error, response, body){
	if(!error && response.statusCode == 200){
		data = JSON.parse(body);
		var name = data.results[0].user.name.first;
		var email = data.results[0].user.email;
		console.log(name + ": " + email);
	};
});