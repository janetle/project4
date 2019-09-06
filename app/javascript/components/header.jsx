
import React from 'react';


class Header extends React.Component {
  constructor() {
    super();
  }

 
  render() {
    return (
      <div>
       <nav className="navbar navbar-light bg-light justify-content-between">
          <a className="navbar-brand">Navbar</a>
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
           <a className="nav-link">Cart</a>
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