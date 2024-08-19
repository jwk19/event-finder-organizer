import React from 'react';
import { Link } from 'react-router-dom';
// import useAuthStore from './authStore';
import '../Styles/Navbar.css';
import { useNavigate } from 'react-router-dom'
import { useUser } from './userStore'
import supabase from './supabaseClient'
function Navbar() {
  const navigate = useNavigate()
  const { user,setUser, setIsLogedIn, isLogedIn } = useUser((state) => ({
    user:state.user,
    setUser: state.setUser,
    isLogedIn: state.isLogedIn,
    setIsLogedIn: state.setIsLogedIn
  }))

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()

    if (error) {
      console.error('Error logging out:', error)
    } else {
      setIsLogedIn(false)
      setUser([])
      navigate('/login')
    }
  }
  return (
    <nav className="navbar">
      <div className="logo">Event Finder</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search Events</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
        <li><Link to="/fav">favourites</Link></li>
        {isLogedIn ? (
          <>
            <li onClick={handleLogout}><Link to="/">Logout</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;