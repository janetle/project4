Rails.application.routes.draw do
  get 'teas/index'
  devise_for :users
  get 'onepage/index'
  resources :products

  root 'onepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
