
def check(num, word)
	if num%2 == 0
		return word
	else
		return word.reverse()
	end
end

puts "Input an integer"
num = gets.chomp.to_i
puts "Input a word"
word = gets.chomp

puts check(num, word)
