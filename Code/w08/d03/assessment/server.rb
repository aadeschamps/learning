require 'sinatra'
require 'json'

get '/salad' do
	content_type :json
	salad = {
		name: "Basic Salad"
		ingredients: ["Lettuce", "Tomatoes", "Chicken", "Cheese", "Croutons"]
	}
	salad.to_json
end