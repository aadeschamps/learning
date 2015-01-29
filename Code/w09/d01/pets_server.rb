require 'sinatra'
require 'sqlite3'

db = SQLite3::Database.new "petulance.db"


get '/pets' do
	pets = db.execute("SELECT * FROM pets")
	erb :index, locals: {pets:pets}
end

get '/pet/:id' do
	id = params[:id].to_i
	thispet = db.execute("SELECT * FROM pets WHERE id=(?)", id)
	erb :show, locals: {thispet: thispet}
end

put '/pet/:id' do
	id = params[:id].to_i
	db.execute("UPDATE pets SET name=(?) WHERE id=(?)", params["newname"], id)
	redirect '/pets'
end

post '/pet' do
	newpet = [params["name"], params["type"]]
	db.execute("INSERT INTO pets (name, type) VALUES (?,?)", newpet)
	redirect '/pets'
end

delete '/pet/:id' do
	id = params[:id].to_i
	db.execute("DELETE FROM pets WHERE id=(?)", id)
	redirect '/pets'
end