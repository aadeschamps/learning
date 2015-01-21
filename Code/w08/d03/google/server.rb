require 'sinatra'
require 'httparty'
require 'json'

# url = "http://api.randomuser.me/"
# response = HTTParty.get(url)
# location = response['results'][0]['user']['location']
# puts location
# # street = location['street']
# city = location['city']
# city.gsub!(" ", "+")
# # state = location['state']
# # zip = location['zip']
# g_url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + city + "&key=AIzaSyA1V3Iv90cabyxssHCpmvN9XUPW9vE0GN0"
# resp = HTTParty.get(g_url)
# geo = resp["results"][0]["geometry"]["location"]
# lat = geo["lat"]
# lng = geo["lng"]
# puts lat
# puts lng

get '/page' do
	erb :index, locals:{}
end

get '/city/:city' do
	city = params[:city]
	# puts city
	city.gsub!(" ", "+")
	g_url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + city + "&key=[key]"
	resp = HTTParty.get(g_url)
	puts resp
	geo = resp["results"][0]["geometry"]["location"]
	lat = geo["lat"]
	lng = geo["lng"]
	puts lat
	puts lng
	content_type :json
	geo = {
		lat: lat.to_s,
		lng: lng.to_s
	}
	geo.to_json
end