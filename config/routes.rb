Rails.application.routes.draw do
  get 'mailer/index'
  get 'mailer/new'
  get 'mailer/create'
  resources :customers
  get 'charges/new'
  get 'charges/create'
  get 'teas/index'
  devise_for :users
  get 'onepage/index'
  resources :products, :charges
  
  root 'onepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
