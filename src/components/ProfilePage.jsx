import React from 'react';
import useAuthStore from '../authStore';
import { Link } from 'react-router-dom';
import '../Styles/ProfilePage.css';

function ProfilePage() {
  const user = useAuthStore((state) => state.user);
  const signOut = useAuthStore((state) => state.signOut);

  if (!user) {
    return <div>Please log in to access your profile.</div>;
  }

  return (
    <div className="profile-page">
      <div className="side-menu">
        <ul>
          <li><Link to="/profile/favorites">Favorite Events</Link></li>
          <li><Link to="/profile/search">Search Events</Link></li>
          <li><button onClick={signOut}>Logout</button></li>
        </ul>
      </div>
      <div className="profile-content">
        <h2>Welcome, {user.email}</h2>
        {/* Here you can add routes to render Favorite Events or Search form */}
      </div>
    </div>
  );
}

export default ProfilePage;
