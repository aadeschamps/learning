require 'httparty'
require 'sinatra'


get '/' do
	pictures = []
	tag = "snow"
	url = "https://api.instagram.com/v1/tags/#{tag}/media/recent?client_id=[key]"
	response = HTTParty.get(url)
	responses = response["data"]
	responses.each do |response|
		pictures << response["images"]["standard_resolution"]["url"]
	end
	erb :index, locals:{pictures: pictures}
end