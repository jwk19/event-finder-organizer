import React from 'react';
import '../Styles/Navbar.css';

function Navbar() {

  return (
    <nav className="navbar">
      <div className="logo">Event Finder</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search Events</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
        
      </ul>
    </nav>
  );
}

export default Navbar;