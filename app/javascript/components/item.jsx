import React from 'react';
import Slider from "react-slick";
class SimilarTaste extends React.Component{
	render(){
		const settings = {
	      dots: true,
	      infinite: true,
	      speed: 500,
	      slidesToShow: 3,
	      slidesToScroll: 3
	    };
	    let similarTaste = this.props.similarTaste;
        let similarList = similarTaste.map((product,index)=> {
	        return (
	          	<div className = "similarTaste" >
	              <div  className = "photo-similar">
	                <p><img src= {product.photo_url} id = {product.id} onClick ={this.props.selectItem}/> <br/>
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
}

class Item extends React.Component {
	
	render(){

	console.log(this.props)

		return (
			<div className = "outer"> 
				<div className = "wrapper">
					<div className = "image"><img src= {this.props.currentItem.photo_url} /></div>
					<div className = "info">
						<p><strong>{this.props.currentItem.name}</strong></p>
						<p> ${this.props.currentItem.price}</p>
						<div>
							<select onChange={this.props.selectOnChange}>
							    <option>Select Quantity</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
							</select>
						<button id = {this.props.currentItem.id} className = "btn" 
								onClick = {this.props.addCart} >Add to cart</button>
						</div>
					</div>
				</div>

				<div>
					<ul class="nav nav-tabs">
					  <li class="nav-item">
					    <a class="nav-link active" href="#">Description</a>
					  </li>
					</ul>
				</div>

				<div className = "desc">{this.props.currentItem.description}</div>
				<SimilarTaste similarTaste = {this.props.similarTaste} selectItem = {this.props.selectItem}/>
			
			</div>
			)
	}
}
export default Item; 