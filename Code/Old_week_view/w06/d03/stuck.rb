

puts "type in integer between 1 and 100"
num1 = gets.chomp.to_i
puts "type in another integer"
num2 = gets.chomp.to_i
ran_num = rand(100) + 1
puts ran_num

if num1 > num2
	big = num1
	small = num2
else
	num2 > num1
	big = num2
	small = num1
end

if ran_num >= big
	puts "too hot"
	numbers = [small, big, ran_num]
elsif ran_num <= small
	puts "too cold"
	numbers = [ran_num, small, big]
else
	puts "just right"
	numbers = [small, ran_num, big]
end
puts numbers