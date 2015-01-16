
puts "type in a word"
word = gets.chomp
word = word.split("")
vowels = ["a","e","i","o","u"]
vowel_count = 0
consonants = ""
count = 0
is_vowel = false
is_vowels = true

for letter in word
	is_cons = true
	for vowel in vowels
		if(letter == vowel)
			vowel_count += 1
			is_cons = false
		end
	end
	if vowel_count == 1
		for vowel in vowels
			if(word[count+1] == vowel)
				vowel_count+=1
			end
		end
	end
	if is_cons
		consonants+=letter
	end
	count+=1
	if vowel_count > 0
		is_vowel = true
	end
	if vowel_count == 2
		is_vowels = false
	end
	vowel_count = 0
end

if(is_vowels && is_vowel)
	puts "checks out, consonants: #{consonants}"
else
	puts "nope"
end