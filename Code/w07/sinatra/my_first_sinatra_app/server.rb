require 'sinatra'

get '/' do
	name = "Alex"
	erb :index, locals:{name: name}
end
get '/goodbye' do
	not_a_name = 'goodbye'
	erb :index, locals:{name: not_a_name}
end
get '/:id' do
	puts params[:id]
	path = params[:id]
	repeated = ""
	counter = 0
	while counter < path.length
		repeated += path
		counter+=1
	end
	erb :index, locals:{name:repeated}
end