require 'active_record'

class House < ActiveRecord::Base
	def characters
		Character.where({house.id: self.id})
	end
end
