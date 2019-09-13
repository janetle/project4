
import React from 'react';

class CurrentTea extends React.Component {
  
  render() {
    console.log(this.props);
    let tea = this.props.currentTea;
    console.log(tea.name)
    let teaList = tea.map((product,index)=> {
      
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
      <div className = "tea">
        <div className = "tea-intro">
           <strong>Tea</strong>
          <p className ="tea-text">Tea is one of the oldest herbal remedies in existence, dating back more than 4700 years, when infusions of the plant Camellia Sinensis were first brewed in China. Although modern medicine has diminished tea’s credibility as a cure-all solution, the benefits of tea still remain relevant today.</p>
        </div>
        <div className = "products">
          {teaList}
        </div>
      </div>
        )
  }
}

export default CurrentTea; 