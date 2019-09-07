
import React from 'react';


class Header extends React.Component {

  render() {
    return (
      <div>
       <nav className="navbar navbar-light fixed-top bg-white ">
          <a className="navbar-brand" href = "/">JustTea</a>
          <form className="form-inline justify-content-end">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.props.changeHandler} />
            <img src = "/search-logo.svg" width = "40px" height = "40px" onClick={this.props.submitHandler} />
          </form>
           <a className="nav-link" onClick = {this.props.showCart}><img src = "/trolley.png" width = "40px" height = "40px"/>{this.props.cart.length}</a>
          <a className="nav-link">My Account</a>

        </nav>
        <nav className="navbar navbar-light bg-light justify-content-between">
          <a className="navbar">Tea</a>
          
          <a className="nav-link">Learn tea</a>
          <a className="nav-link">About</a>
          <a className="nav-link">Visit us</a>

        </nav>

      </div>
    );
  }
};

export default Header;