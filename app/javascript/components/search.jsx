
import React from 'react';

class Search extends React.Component {
  
  render() {
    
    let searchResult = this.props.searchResult;
    let searchList = searchResult.map((product,index)=> {
      
      return (
        <div className = "item" >
         
            <div className = "photo">
              <p><img src= {product.photo_url} onClick ={this.props.selectItem}/> <br/>
              <strong>{product.name}</strong></p>
            </div>
         
          <div>
            <p>{product.description.substring(0,40)}...</p>
            <p>${product.price}</p>
            <p><button id = {product.id} onClick ={this.props.addCart}>Add to cart</button></p>
          </div>
        </div>
        )
      });
    return (
      <div className = "search-item">
       
         {searchList}
       
       
      </div>

        )
  };
}

export default Search; 