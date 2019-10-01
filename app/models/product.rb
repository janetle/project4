class Product < ApplicationRecord
	belongs_to :tea
	has_and_belongs_to_many :types
end
