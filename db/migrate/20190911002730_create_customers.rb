class CreateCustomers < ActiveRecord::Migration[6.0]
  def change
    create_table :customers do |t|
      t.string :title
      t.string :firstName
      t.string :lastName
      t.text :address
      t.integer :postalCode
      t.string :city
      t.string :email
      t.integer :phone

      t.timestamps
    end
  end
end
