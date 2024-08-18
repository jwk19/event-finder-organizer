import React, { useEffect } from 'react';
import useAuthStore from '../authStore';
import '../Styles/Favorites.css';

function Favorites() {
  const { favorites, fetchFavorites } = useAuthStore();

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  return (
    <div className="favorites-page">
      <h2>Your Favorite Events</h2>
      <div className="favorites-list">
        {favorites.map((event) => (
          <div key={event.event_id} className="favorite-card">
            <h3>{event.event_name}</h3>
            <p>{event.event_date}</p>
            <p>{event.event_venue}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
