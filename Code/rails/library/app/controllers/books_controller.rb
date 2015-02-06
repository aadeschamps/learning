
class BooksController < ApplicationController

	def index
		@books = Book.all()
	end

	def show
		@book = Book.find(params[:id])
	end

	def update
		@book = Book.find(params[:id])
		if @book.status
			@book.update(status: false)
		else
			@book.update(status: true)
		end
		redirect_to @book
	end	

	def book_params
		params.require(:book).permit(:status)
	end

end