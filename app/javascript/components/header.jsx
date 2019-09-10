
import React from 'react';


class Header extends React.Component {

  render() {
    return (
      <div class ="header">
        
        <nav className="navbar navbar-one  bg-white">
          <a className="navbar-brand" onClick = {this.props.home}>TeaLovers</a>
           <a className="nav-link" onClick = {this.props.selectTea}>All Categories</a>
           <a className="nav-link" onClick = {this.props.allProducts}>Products</a>
         
            <form className="form-inline justify-content-end">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.props.changeHandler} />
              <img src = "/search-logo.svg" width = "35px" height = "35px" onClick={this.props.submitHandler} />
            </form>
             <a className="nav-link" onClick = {this.props.showCart}><img src = "/trolley.png" width = "40px" height = "40px"/>{this.props.cart.length}</a>
            <a className="nav-link">My Account</a>
        
        </nav>
       
       

      </div>
    );
  }
};

export default Header;