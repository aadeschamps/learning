require 'HTTParty'
require 'pry'
url = "http://api.randomuser.me/"
response = HTTParty.get(url)
binding.pry