
import React from 'react';

function AllProducts (props) {
  
  const productList = props.products.map((product,index)=> {
    return (
      
      <div key = {index} className = "item" >
        <div  className = "photo">
          <p><img src= {product.photo_url} id = {product.id} onClick ={props.selectItem}/> <br/>
          <strong>{product.name}</strong></p>
        </div>

        <div>
          <p>{product.description.substring(0,40)}...</p>
          <p>${product.price}</p>
          <p>
            <select onChange={props.selectOnChange}>\
              <option>Select Quantity</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p><button id = {product.id} onClick ={props.addCart}>Add to cart</button></p>
        </div>
      </div>
      
      );
    });
    
  return (
    <div className = "product-all">
      <h2 className = "product-heading">Our best Teas</h2>
      <div className = "all">
        {productList}
      </div>
    </div>
      )
  
}

export default AllProducts; 




