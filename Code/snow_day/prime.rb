

primes = [];
for i in 1..100 do
	if i <= 2
		primes << i
		puts i
	else
		isPrime = true
		# puts i
		primes.each do |prime|
			if ((i % prime) == 0) && (prime != 1)
				isPrime = false
			end
			# puts isPrime
		end
		if isPrime
			puts i
			primes << i
		end
	end
end
