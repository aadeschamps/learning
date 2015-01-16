# puts "What state are you from?"
# state = gets.chomp.upcase
# if state == "NY"
# 	puts "Welcome to the Empire State"
# elsif state == "NJ"
# 	puts "You must merge well"
# else
# 	puts "Where is #{state}?"
# end

# i=0
# while i<10
# 	puts i
# 	i += 1
# end

# numbers = [1,2,3,4,5]
# for number in numbers
# 	puts number
# end

# hash = {
# 	a:1,
# 	b:2
# }
# for x in hash
# 	puts x[1]
# end

def generate_welcome_string(name)
	prefix = "Hello "
	postfix = ". Have a nice day"
	welcome_string = prefix + name + postfix
	return welcome_string
	# returns last state used, so dont need some of this
end

puts generate_welcome_string("Alex");
