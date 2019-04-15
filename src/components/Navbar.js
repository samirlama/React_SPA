import React from 'react';
import {Link , NavLink} from 'react-router-dom';
const Navbar = () => {
    return(
        <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul className="nav navbar-nav right">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </div>
</nav>
    )
}

export default Navbar;