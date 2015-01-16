
puts "type in a sentenct"
sent = gets.chomp
words = sent.split(" ")

count = 0
for word in words
	if (word.length%2 == 0 && count%3 == 0)
		puts word
	end
	count+=1
end