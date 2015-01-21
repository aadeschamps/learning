require 'sinatra'
require 'httparty'
require 'json'

get '/' do
	pictures = []
	erb :index, locals:{pictures: pictures}
end

get '/city' do
	pictures = []
	city = params[:city]
	state = params[:state]
	puts city
	city.gsub!(" ", "+")
	g_url = "https://maps.googleapis.com/maps/api/geocode/json?address=#{city},#{state}&key=[key]"
	resp = HTTParty.get(g_url)
	geo = resp["results"][0]["geometry"]["location"]
	lat = geo["lat"]
	lng = geo["lng"]
	i_url = "https://api.instagram.com/v1/media/search?client_id=[key]&lat=#{lat}&lng=#{lng}"
	i_response = HTTParty.get(i_url);
	puts i_url
	responses = i_response["data"]
	responses.each do |response|
		pictures << response["images"]["standard_resolution"]["url"]
	end
	erb :index, locals: {pictures: pictures}
end