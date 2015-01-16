# nintendo = ["Mario", "Luigi", "Peach", "Toad"]

# nintendo.each do |characters|
# 	puts characters
# end

# console = {
# 	"Nintendo" => ["mario", "luigi", "peach", "toad"],
# 	"Sega" => ["sonic", "tails", "robotonic"],
# 	"Sony" => ["Crash Bandicoot", "Nathan Drake", "Solid Snake"]
# }

# console.each do |key, value|
# 	puts "#{key} has the following characters: #{value}"
# end

characters = ["Mario", "Luigi", "Peach",
  "Toad", "Sonic", "Tails",
  "Robotnick", "Crash Bandicoot", "Nathan Drake",
  "Solid Snake"]

characters.each do |character|
	puts character.scan(/.*[C,c].*/)
end

c = characters.select do |word|
	word.upcase.include?("C")
end
puts c

characters.map! {|char| char.upcase}
puts characters
