
import React from 'react';

class Products extends React.Component {
  
  render() {
    let products = this.props.products;
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

          <div>
            <p>{product.description.substring(0,50)}...</p>
            <p>${product.price}</p>
            <p><button id = {product.id} onClick ={this.props.addCart}>Add to cart</button></p>
          </div>
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

export default Products; 