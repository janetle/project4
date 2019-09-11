
import React from 'react';
import Slider from "react-slick";

class Search extends React.Component {
  
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    let searchResult = this.props.searchResult;
    let searchList = searchResult.map((product,index)=> {
      
      return (
        <div className = "item" >
          <a >
            <div className = "photo">
              <p><img src= {product.photo_url} /> <br/>
              <strong>{product.name}</strong></p>
            </div>
          </a>
          <div>
            <p>{product.description.substring(0,40)}...</p>
            <p>${product.price}</p>
            <p><button id = {product.id} onClick ={this.props.addCart}>Add to cart</button></p>
          </div>
        </div>
        )
      });
    return (
      <div>
        <Slider  {...settings}>

         {searchList}
       
        </Slider>
      </div>

        )
  };
}

export default Search; 