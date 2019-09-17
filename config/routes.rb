Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
   root  'messages#index'
   resource :users, only: [:index,:edit, :update]
   resource :groups, only: [:new, :create,:edit,:update] do
    resource :messages, only: [:index,:create]


end
