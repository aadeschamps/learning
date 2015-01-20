require 'sinatra'
require 'json'

movies = {theaters: ["Ace Ventura", "Dumb and Dumber", "The Mask"]}
ratings = {movies: [ {name: "Ace Ventura", rating: 4}, {name: "Dumb and Dumber", rating: 2}, {name: "The Mask", rating: 7}  ] }


get '/' do
	content_type :json
	data = {msg: "Hello World"}
	data.to_json
end

get '/top_theaters' do
	content_type :json
	movies.to_json
end

get '/top_dvd' do
	content_type :json
	ratings.to_json
end
