
import React from 'react';
function Header (props) {
    return (
      <div className ="header">
        <nav className="navbar navbar-one ">
          <a  className="navbar-brand" onClick = {props.home}>TeaLovers</a>
          <a className="nav-link" onClick = {props.selectTea}>All Categories</a>
          <a className="nav-link" onClick = {props.allProducts}>Products</a>
          <form className="form-inline justify-content-end">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={props.changeHandler} />
            <img src = "/search-logo.svg" width = "35px" height = "35px" onClick={props.submitHandler} />
          </form>
          <a className="nav-link" onClick = {props.showCart}><img src = "/trolley.png" width = "40px" height = "40px"/>{props.cart.length}</a>
        </nav>
      </div>
    );
};

export default Header;

