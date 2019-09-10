import React from 'react';

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
					  <li class="nav-item">
					    <a class="nav-link" href="#">Review</a>
					  </li>
					  
					</ul>
				</div>

				<div className = "desc">{this.props.currentItem.description}</div>
				<div>Similar taste</div>

			
			</div>
			)
	}
}
export default Item; 