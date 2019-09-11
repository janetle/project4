json.extract! customer, :id, :title, :firstName, :lastName, :address, :postalCode, :city, :email, :phone, :created_at, :updated_at
json.url customer_url(customer, format: :json)
