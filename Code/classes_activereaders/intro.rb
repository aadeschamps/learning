class Turtle
	attr_accessor :name, :color, :weapon
	def initialize (name, color, weapon)
		@name = name
		@color = color
		@weapon = weapon
	end
	def to_s
		"Hi my name is #{@name}"
	end
end

don = Turtle.new("Donatello", "Purple", "Bo")
leo = Turtle.new("Leonardo", "Blue", "Swords")
raph = Turtle.new("Raphael", "red", "sai")
mich = Turtle.new("michaelangelo", "orange", "nunchucks")

puts leo

class Animal
	attr_accessor :name, :owner, :type
	def initialize (name, owner, type)
		@name = name
		@owner = owner
		@type = type
	end
end

class Dog < Animal
	def initialize(name, owner)
		super(name, owner, "cat")
	end
	def bark
		puts "bark"
	end
end

class Cat < Animal
	def initialize(name, owner)
		super(name, owner, "dog")
	end
	def meow
		puts "meow"
	end
end

class Food
	def eat
		puts "eating now"
	end
end

class Pizza < Food
	def taste
		puts "Cowabunga"
	end
end