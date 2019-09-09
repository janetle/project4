
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

      let price = parseFloat(product.product.price);
      let quantity = parseInt(product.quantity);
      let amount = price * quantity;
      subtotal = subtotal + amount;
      if (subtotal >= 40) {delivery = 0;};
      gst = (subtotal * 0.07);
      total =(subtotal + gst + delivery);

      
      return (
        <tr>
           <td><img src= {product.product.photo_url} /></td>
           <td>{product.product.name}</td>
           <td>{quantity}
              <select onChange={this.props.selectOnChange}>\
                
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select></td>
           <td>${price}</td>
           <td><button id = {product.id} onClick = {this.props.removeItem}>Remove</button></td>
           <td>${amount}</td>
        </tr>
        )
      });
    return (
      <div className = "cart">
        <h1 className = "cart-heading">Shopping Cart</h1>
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
               <td colSpan="2">Subtotal:</td>
               <td> ${subtotal}</td>
              
             </tr>
              <tr>
               <td colSpan="3"></td>
               <td colSpan="2">GST (7%): </td>
               <td>${gst}</td>
               <td></td>
             </tr>
              <tr>
               <td colSpan="3"></td>
               <td colSpan="2">Deliver fee</td>
               <td>${delivery}</td>
               
             </tr> 
             <tr>
               <td colSpan="3"></td>
               <td colSpan="2">Total:</td>
               <td>${total}</td>
               
             </tr>
         
           </tbody>
        </Table>   
      </div>
        )
  }
}
export default Cart; 