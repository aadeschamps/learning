# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

alvin = Author.create(name: 'alvin', email: 'alvin@alvin.com',
	bio: 'sells stuff', hair: true)

Article.create(headline: 'This just in: Im a headline', author: alvin,
 content: 'Headlines are actually headlines these days, how crazy of an idea',
 photo_url: 'http://www.kbradyservice.com/nixonvs/wp-content/uploads/2015/01/Daily-News-headline-newspapers.jpg')

Article.create(headline: 'This is also a headling, amazing!', author: alvin,
	content: 'it just so happens that headlines are not headlines, very contradictory',
	photo_url: 'http://www.shoemoney.com/wp-content/uploads/2014/03/blog2.jpg')

