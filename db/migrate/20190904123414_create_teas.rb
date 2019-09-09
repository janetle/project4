class CreateTeas < ActiveRecord::Migration[6.0]
  def change
    create_table :teas do |t|
      t.string :name
      t.string :photo_url
      t.string :description

      t.timestamps
    end
  end
end
