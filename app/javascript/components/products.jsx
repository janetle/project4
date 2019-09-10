
import React from 'react';
import Slider from "react-slick";


class Products extends React.Component {
  
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
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
              <p>
                <select onChange={this.props.selectOnChange}>\
                  <option>Select Quantity</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </p>
              <p><button id = {product.id} onClick ={this.props.addCart}>Add to cart</button></p>
            </div>
          </div>
          
          )
        });

    
    return (
      <div>
      <h2 className = "product-heading">Our best sellers</h2>
        <Slider className = "products" {...settings}>

          {productList}
       
        </Slider>
      </div>
        )
  }
}

export default Products; 




