
import React from 'react';

class Cart extends React.Component {
  
  render() {
    let products = this.props.cart;
    let productList = products.map((product,index)=> {
      let url = '/products/' + product.id;
      return (
        
        <div className = "item" >
          <a href = {url}>

            <div className = "photo">
                <p><img src= {product.photo_url} /> <br/>
                <strong>{product.name}</strong></p>
            </div>
          </a>
            
            <p>${product.price}</p>
        
        </div>
        
        )
      });
    return (
      <div className = "products">
        {productList}
      </div>
        )
  }
}

export default Cart; 