
import React from 'react';

class Products extends React.Component {
  constructor() {
    super();
  }

  render() {
    let products = this.props.products;
    let productList = products.map((product,index)=> {
      return (
        
        <div className = "item" >
          <div className = "photo">
            <a href = "/products">
              <img src= {product.photo_url} />
              <p>{product.name}</p>

            </a>
          </div>
          <p>{product.description.substring(0,50)}...</p>
          <p>${product.price}</p>

          <button>Add to cart</button>
        </div>
        
        )
      });
    return (
      <div class = "products">
        {productList}
      </div>
        )
  }
}

export default Products; 