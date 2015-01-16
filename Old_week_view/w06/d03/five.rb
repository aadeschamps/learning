def mult_five?(num)
	if(num%5 == 0)
		return true
	else
		return false
	end
end

puts "Enter a number, or type quit to quit"
number = gets.chomp
continue = true
if number === "quit"
	continue = false
end

while (continue)
	if mult_five?(number.to_i)
		puts "#{number} is a multiple of 5" 
	else
		puts "#{number} is not a multiple of 5"
	end

	number = gets.chomp
	if number == "quit"
		continue = false
	else
		puts "Enter a number or type quit to quit"
	end
end

