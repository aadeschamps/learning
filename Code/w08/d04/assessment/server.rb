require 'sinatra'

get '/:lat/:lng' do
	lat = params[:lat].to_f
	lng = params[:lng].to_f
	erb :index, locals: {lat: lat, lng: lng}
end