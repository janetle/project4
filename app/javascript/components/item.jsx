import React from 'react';
import Slider from "react-slick";

function SimilarTaste (props){
	
	const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    const similarList = props.similarTaste.map((product,index)=> {
        return (
          	<div  key = {index} className = "similarTaste" >
              <div  className = "photo-similar">
                <p><img className = "img-fluid" src= {product.photo_url} id = {product.id} onClick ={props.selectItem}/> <br/>
                <strong>{product.name}</strong></p>
              </div>
            </div>
          )
    });

	return(
	 	<div>
      		<h2 className = "product-heading">Similar tastes</h2>
	        <Slider className = "products" {...settings}>
	          {similarList}
	        </Slider>
     	</div>
			)
}

function Item (props) {
	return (
		<div className = "outer"> 
			<div className = "wrapper">
				<div className = "image"><img className = "img-fluid" src= {props.currentItem.photo_url} /></div>
				<div className = "info">
					<p><strong>{props.currentItem.name}</strong></p>
					<p> ${props.currentItem.price}</p>
					<div>
						<select onChange={props.selectOnChange}>
						    <option>Select Quantity</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
						</select>
					<button id = {props.currentItem.id} className = "btn" 
							onClick = {props.addCart} >Add to cart</button>
					</div>
				</div>
			</div>

			<div>
				<ul className="nav nav-tabs">
				  <li className="nav-item">
				    <a className="nav-link active" href="#">Description</a>
				  </li>
				</ul>
			</div>

			<div className = "desc">{props.currentItem.description}</div>
			<SimilarTaste similarTaste = {props.similarTaste} selectItem = {props.selectItem}/>
		
		</div>
		)
	
}
export default Item; 