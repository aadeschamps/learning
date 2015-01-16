

var Hockey_player = function(goals, assists, points, shots){
	this.goals = goals;
	this.assists = assists;
	this.points = points;
	this.shots = shots;
}

var rick_nash = new Hockey_player(14, 7, 21, 73);
console.log(rick_nash);