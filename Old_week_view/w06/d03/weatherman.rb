
def weatherman(cond, temp)
	if cond == "rainy"
		if temp == "cold"
			return "Better stay inside"
		elsif temp == "hot"
			return "sounds like a gross combination"
		else
			return "invalid temp"
		end
	elsif cond == "sunny"
		if temp == "hot"
			return "maybe best to go swimming"
		else
			return "invalid temp"
		end
	elsif cond == "windy"
		if temp == "cold"
			return "bundle up!"
		elsif temp == "hot"
			return "tornado warning!"
		else
			return "invalid temp"
		end
	else
		return "invalid condition"
	end
end

puts "What is the weather condition?"
condition = gets.chomp
puts "What is the temperature?"
temperature = gets.chomp

puts weatherman(condition, temperature)