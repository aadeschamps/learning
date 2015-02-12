class ArticlesController < ApplicationController
  protect_from_forgery with: :null_session

  def spa
  end

  def index
    @articles = Article.all
    respond_to do |format|
      format.html {render :index}
      format.json { render json: @articles}
    end
  end

  def new
    @article = Article.new
  end

  def create
    @article= Article.create(article_params)
    if @article
      render json: @article
    end

  end

  def show
    @article = Article.find_by(id: params[:id])
    if @article
      render json: @article
    else
      render status: 400, nothing: true
    end
  end

  def destroy
    @article = Article.find_by(id: params[:id])
    if @article.destroy
      render json: @article
    end
    redirect_to articles_path
  end

  def edit
    @article = Article.find_by(id: params[:id])
  end

  def update
    @article = Article.find_by(id: params[:id])
    @article.update(article_params)
    if @article.update
      render json: @article
    end
    redirect_to article_path(@article)
  end


  private
    def article_params
      params.require(:article).permit(:headline, :content, :photo_url)
    end

end
