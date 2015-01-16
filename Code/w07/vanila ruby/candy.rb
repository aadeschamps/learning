
candies = ["Starbust", "Lifesavers", "Snickers", "Milky Way", "Three Muskateers", "Skittles"]

candies.map! {|candy| candy.upcase}

candies.each do |candy|
	p candy
end

p "What is your favorite letter?"
letter = gets.chomp
letter.upcase!
p "Looking for best candy match for you..."
p "Beep"
p "Beep"
p "Beep"

match = candies.select{|candy| candy.include?(letter)}

if match.length == 0
	p "No candies for you!"
else
	string = ""
	match.each {|candy| string += (candy + " ")}
	p "You should have any of the following: " + string
end