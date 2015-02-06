# Getting Started with rails

'''
	$ rails new blog
'''

This command creates a new application with all folders that you need. It will create a folder with the name of the application (in this case blog) in your current directroy with everything in it

## Creating Models

'''
	$ rails generate model Post 
'''

## Rake

in order to see what you can do with rake type:

'''
	$ rake -T
'''

Rake is essentially a tool that allows you to do a lot of commands. We'll talk about a few useful ones below.


## Running Migrations




## Rails console

You can use the rails console by writing 

'''
	$ rails console
'''

You can now generate data in your models using the .create method on model names.


## Using the seed.rb file

Go to the db folder and find the seed.rb file. You can insert normal seed operations in here such as .create. 

In order to run our seed file type:

'''
	$ rake db:seed
'''

## General Flow of how it works

requests go to the routes file
(in this case /posts)
the route links to a controller
(in this case #index)
the controller gives you the view

## Routes

Routes can be generated dynamically by going to the routes folder. To create the basic CRUD operation routes for a given model type

''' ruby
	Rails.application.routes.draw do
		resources :posts
'''

running $ rake routes will give you a list of routes that it generated for you. This will also give you the controllers and actions each route is linked to.

You can also specify the '/' route by indicating root above the resources line.

''' ruby
	root 'posts#index'
'''
The above line makes a '/' route that takes you to the get posts page.

## creating controllers

To create a controller for a specific model go to the controllers folder and create a new file. we called this post_controller.rb. 

''' ruby
	class PostController < ApplicationController
		def index
		end
	end
'''
You need to use the name PostController in order for rails to know which to link it to (similar to the models and the db). 

## creating a view

Go to the views folder and make a new directory that is named after the model. In our case: post. Touch a new document with a .html.erb extention (in our case: index.html/erb). 


## Validation

Validating what is being put into your model is key. Here is how you do it:

``` ruby
	class Post < ActiveRecords::Base
		validate :author, presence: true
		validate :author, length: {
			maximumum: 5,
			too_long: 'too long dude'
		}
		validate_
```

## Partials, Layouts

#### Yields

You can add in yields to your layout pages

``` html
	<%= yield :footer %>
```
Now everytime you have the same thing in your erb's, it inserts them into wherever you put the above code.

You can also import a folder into your .htmt.erb by:

``` html
	<%= render /layouts/filename, post:@post %>
```
You just need a _filename.html.erb in your layouts folder

## Rendering

You can render things other than erb files.

``` ruby

	render plain: 'plain text'
	render html 'html here'.html_safe
	render inline: ' erb html can go here'
	render json someJsonStuff

```


