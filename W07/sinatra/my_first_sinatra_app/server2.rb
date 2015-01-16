require 'sinatra'

get '/tortilla/:id' do
	id = params[:id]
	if id == "guac"
		msg = "<h1>AHHH!</h1>"
	elsif id == "rice"
		msg = "<h1>MMMMM</h1>"
	else
		msg = "<p>Well, #{id} is good on a tortilla, too!</p>" 
	end
	erb :index, locals:{msg: msg}	
end
get '*' do
	msg = "<h3>Sorry, we only serve burritos here!</h3>"
	erb :index, locals:{msg: msg}
end