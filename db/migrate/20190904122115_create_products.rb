class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :photo_url
      t.text :description
      t.float :price
      t.references :tea
      t.references :type

      t.timestamps
    end
  end
end
