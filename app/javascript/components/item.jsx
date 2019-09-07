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
							<select>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
							</select>
							<button className = "btn" onClick = {this.props.addCart} >Add to cart</button>
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