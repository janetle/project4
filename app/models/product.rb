class Product < ApplicationRecord
	belongs_to :tea
	has_and_belongs_to_many :types




  def self.search(term)
    if term
      where(['lower(name) LIKE ? OR lower(description) LIKE ?', "%#{term.downcase}%", "%#{term.downcase}%"])
    
    end
  end
end
