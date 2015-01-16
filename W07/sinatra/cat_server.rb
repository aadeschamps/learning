require 'sinatra'

get '/:width/:height' do
	height = params[:height].to_i
	# heights = (height...height+15)
	width = params[:width].to_i
	erb :cats, locals:{ height:height, width:width }
end