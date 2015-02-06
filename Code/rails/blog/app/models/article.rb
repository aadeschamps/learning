class Article < ActiveRecord::Base
	belongs_to :author
	validates :headline, presence: true
	validates :content, presence: true
	validates :author_id, presence: true
	validates :photo_url, presence: true
	validates :author, length: {
		maximum: 25,
		too_long: 'way too long of a name'
	}
	validate_length_of :author, minimum: 2
end
