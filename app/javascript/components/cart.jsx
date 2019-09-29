
import React from 'react';
import Table from 'react-bootstrap/Table';
class Cart extends React.Component {
  render() {
    let products = this.props.cart;
    let subtotal = 0;
    let gst = 0;
    let total = 0;
    let delivery = 10;
    let productList = products.map((product,index)=> {
      console.log(index)
      let price = parseFloat(product.product.price);
      let quantity = parseInt(product.quantity);
      if(quantity > 8) {
        quantity = 8;
        alert("If you are purchasing in bulk, please contact our customer service for discounted prices.")
      }
      let amount = price * quantity;
      subtotal = subtotal + amount;
      if (subtotal >= 40) {delivery = 0;};
      gst = (subtotal * 0.07);
      total =(subtotal + gst + delivery);
      return (
        <tr key = {index}>
           <td><img src = {product.product.photo_url} /></td>
           <td>{product.product.name}</td>
           <td>
             <select value = {quantity} onChange={this.props.changeQuantity} id={index}>
                
                <option  value="1">1</option>
                <option  value="2">2</option>
                <option  value="3">3</option>
                <option  value="4">4</option>
                <option  value="5">5</option>
                <option  value="6">6</option>
                <option  value="7">7</option>
                <option  value="8">8</option>
              </select> 
           </td>
           <td>${price}</td>
         
             
           <td><button id = {index} onClick = {this.props.removeItem}>Remove</button></td>
           <td>${amount}</td>
        </tr>
        )
      });

    if (products.length === 0){ 
      return (
        <div className = "cart">
            <h1 className = "cart-heading">Shopping Cart</h1>
            <div>There's no item in your cart.</div>
            <a href =""  onClick = {this.props.allProducts}>  ← back to shopping</a>
        </div>
      )
    } else {
        return (
          <div className = "cart">
            <h1 className = "cart-heading">Shopping Cart</h1>
            <p>Free delivery for purchase above $40.</p>
            <Table  >
              <thead>
                <tr>
                  <th>Product</th>
                  <th >Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Remove</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                 {productList}
                 <tr>
                   <td colSpan="3"></td>
                   <td colSpan="2"><strong>Subtotal:</strong></td>
                   <td> ${subtotal}</td>
                 </tr>
                  <tr>
                   <td colSpan="3"></td>
                   <td colSpan="2"><strong>GST (7%):</strong> </td>
                   <td>${gst.toFixed(2)}</td>
                   <td></td>
                 </tr>
                  <tr>
                   <td colSpan="3"></td>
                   <td colSpan="2"><strong>Delivery fee </strong></td>
                   <td>${delivery}</td>
                 </tr> 
                 <tr>
                   <td colSpan="3"></td>
                   <td colSpan="2"><strong>Total:</strong></td>
                   <td>${total}</td>
                 </tr>
               </tbody>
            </Table>  
            <div className = "checkout-option">
              <a href ="" onClick = {this.props.allProducts}>  ← Continue shopping</a>
              <a href = "/charges/new">Proceed to checkout → </a>
            </div> 
          </div>
            )
      }
    }
}
export default Cart; 