
import React from 'react';

class Tea extends React.Component {
  
  render() {
    let tea = this.props.tea;
    let teaList = tea.map((product,index)=> {
      
      return (
        
          
          <div className = "item" >
            <div  className = "photo">
              <p><img src= {product.photo_url} id = {product.id} onClick ={this.props.showCurrentTea}/> <br/>
              <strong>{product.name}</strong></p>
            </div>
        
            <p>{product.description}</p>
            
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

export default Tea; 