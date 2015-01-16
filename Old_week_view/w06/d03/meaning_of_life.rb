
def meaning_of_life()
	42
end

puts "Do you want to know the meaning of life"
answer = gets.chomp
if answer == "y"
	puts meaning_of_life()
else
	puts "fine, you're life will forever be unfullfilled"
end
