
import React from 'react';

class Products extends React.Component {
  
  render() {
    let products = this.props.products;
    
      let productList = products.map((product,index)=> {
        // let url = '/products/' + product.id;
        return (
          
          <div className = "item" >
              <div  className = "photo">
                <p><img src= {product.photo_url} id = {product.id} onClick ={this.props.selectItem}/> <br/>
                <strong>{product.name}</strong></p>
              </div>

            <div>
              <p>{product.description.substring(0,50)}...</p>
              <p>${product.price}</p>
              <p><button id = {product.id} onClick ={this.props.addCart}>Add to cart</button></p>
            </div>
          </div>
          
          )
        });

    
    return (
      <div>
        <h3>Our best seller</h3>
        <div className = "products">
          {productList}
        </div>
      </div>
        )
  }
}

export default Products; 