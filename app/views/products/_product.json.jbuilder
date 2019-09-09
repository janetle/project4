json.extract! product, :id, :name, :photo_url, :description, :price, :created_at, :updated_at, :tea
json.url product_url(product, format: :json)

