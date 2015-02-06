class Book < ActiveRecord::Base
	belongs_to :author
	validates :title, presence: true
	validates :author_id, presence: true
	validates :status, presence: true
	validates :title, length: {
		maximum: 20,
		too_long: "Too long"
	}
	validates_length_of :title, minimum: 3
end
