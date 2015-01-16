require 'sinatra'
get '/button_click' do
	erb :name, locals{name:name}	
end

get '/' do
	erb :index, locals:{name: params[:name]}
end