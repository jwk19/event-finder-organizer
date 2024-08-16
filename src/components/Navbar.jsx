import React from 'react';
import { Link } from 'react-router-dom';
import useAuthStore from './authStore';
import '../Styles/Navbar.css';

function Navbar() {
    const user = useAuthStore((state) => state.user);
  const signOut = useAuthStore((state) => state.signOut);
  return (
    <nav className="navbar">
      <div className="logo">Event Finder</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search Events</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
        {user ? (
          <>
            <li><Link to="/" onClick={signOut}>Logout</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
