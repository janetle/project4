
import React from 'react';
function Header (props) {
    return (
      <div className ="header">
        <nav className="navbar navbar-one ">
          <a  className="navbar-brand" onClick = {props.home}>TeaLovers</a>
          <a className="nav-link" onClick = {props.selectTea}>All Categories</a>
          <a className="nav-link" onClick = {props.allProducts}>Products</a>
          <form onSubmit ={props.submitHandler} className="form-inline justify-content-end">
            <div className="form-control mr-sm-2" aria-label="Search">
              <input  className = "searchInput" type="search" placeholder="Search" onChange={props.changeHandler} />
              <button className = "imgbutton" type = "submit"> <img src = "/search-logo.svg" width = "35px" height = "35px"/></button>
            </div >
          </form>
          <a className="nav-link" onClick = {props.showCart}><img src = "/trolley.png" width = "40px" height = "40px"/>{props.cart.length}</a>
        </nav>
      </div>
    );
};

export default Header;

