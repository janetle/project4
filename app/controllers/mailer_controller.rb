class MailerController < ApplicationController
  def index
  end

  def new
  	@mailer = Mailer.new
  end

  def create 
  	@mailer = Mailer.new(mailer_params)

    respond_to do |format|
      if @mailer.save
        format.html { redirect_to @mailer, notice: 'Mailer was successfully created.' }
        format.json { render :show, status: :created, location: @mailer }
      else
        format.html { render :new }
        format.json { render json: @mailer.errors, status: :unprocessable_entity }
      end
    end
  end
end
