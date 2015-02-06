require 'sinatra'
require 'json'
require 'bcrypt'

my_password = BCrypt::Password.create("penguin");


use Rack::Session::Pool, :cookie_only => false

def authenticated?
  session[:valid_user] == true
end

get '/' do
  send_file 'index.html'
end

post '/session' do
  if params["password"] === BCrypt::Password.new(my_password)
    session[:valid_user] = true
    redirect '/secret_page'
  else
    redirect '/'
  end
end

get '/secret_page' do
  if authenticated?
    return 'Hello! <a href = "http://localhost:4567/secret_page2">Secret Page 2</a>'
  else
    redirect '/'
  end
end

get '/secret_page2' do
  if authenticated?
    return 'Hello! <a href = "http://localhost:4567/secret_page">Secret Page</a>'
  else
    redirect '/'
  end
end