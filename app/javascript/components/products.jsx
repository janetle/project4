
import React from 'react';
import Slider from "react-slick";

function Products (props) {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
    
  const productList = props.products.map((product,index)=> {
    return (

      <div key = {index} className = "item" >
        <div  className = "photo">
          <p><img src= {product.photo_url} id = {product.id} onClick ={props.selectItem}/> <br/>
          <strong>{product.name}</strong></p>
        </div>

        <div>
          <p className = "item-desc">{product.description.substring(0,40)}...</p>
          <p>${product.price}</p>
          <p><button id = {product.id} onClick ={props.addCart}>Add to cart</button></p>
        </div>
      </div>
      
      )
    });
    
  return (
    <div>
      <h2 className = "product-heading">Our best sellers</h2>
      <Slider  {...settings}>
        {productList}
      </Slider>
    </div>
      )
};

export default Products; 




