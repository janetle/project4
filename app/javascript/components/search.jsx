
import React, {useState} from 'react';

function Search (props) {  
  const searchList = props.searchResult.map((product,index)=> {
    return (

      <div key = {index} className = "item" >
        <div className = "photo">
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
      )
    });

  const noResult = ()=> {
    if(props.searchResult.length === 0){
      return (
        <div>
          <h3> Sorry! The item you're searching for is unavailable.</h3>
          <a href ="/"  >  ← back to main page</a>
        </div>
    )};
  }
  
  
  return (

    <div className = "product-all">
      {noResult()}
      <div className = "all">
        {searchList}
      </div>
    </div>
      )
  
}
export default Search; 