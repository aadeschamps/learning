require 'sinatra'

magic = [
"It is certain",
"It is decidedly so",
"Without a doubt",
"Yes definitely",
"You may rely on it",
"As I see it yes",
"Most likely",
"Outlook good",
"Yes", "Signs point to yes",
"Reply hazy try again",
"Ask again later",
"Better not tell you now",
"Cannot predict now",
"Concentrate and ask again",
"Don't count on it",
"My reply is no",
"My sources say no",
"Outlook not so good",
"Very doubtful"
]
coin = [
"heads",
"tails"
]
rps = [
"rock",
"paper",
"scissor"
]

get '/coin_toss' do
	side = coin[rand(0..1)]
	msg = "<p>The coin came up " + side + "</p>"
	erb :index, locals:{msg: msg}
end
get '/dice_roll' do
	num  = rand(1..6)
	msg = "<p>Rolled a dice, came up " + numto_s + "</p>"
	erb :index, locals:{msg: msg}
end 
get '/magic8ball/:id' do
	num = rand(0.. (magic.length - 1) )
	question = "<p>" + params[:id] + "</p>"
	answer = "<p>" + magic[num] + "</p>"
	msg = question + answer
	erb :index, locals:{msg: msg}
end

get '/rps/:id' do
	choice = params[:id]
	player = "<p>You chose: " + choice + "</p>"
	c_choice = rand(0.. ( rps.length - 1 ) )
	comp = "<p>Computer chose: " + rps[c_choice] + "</p>"
	p_choice = rps.index(choice)
	diff = p_choice - c_choice
	if diff == -1 || diff == 2
		win = "<p>You lose...</p>"
	elsif diff == 1 || diff == -2
		win = "<p>YOU WIN</p>"
	else
		win = "<p>Its a tie then!</p>"
	end
	msg = player + comp + win
	erb :index, locals:{msg: msg}
end

