import React, { useEffect, useState } from 'react';
import '../Styles/Favorites.css';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = () => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  };

  return (
    <div className="favorites-page">
      <h2>Your Favorite Events</h2>
      <div className="favorites-list">
        {favorites.length > 0 ? (
          favorites.map((event, index) => (
            <div key={index} className="favorite-card">
              <h3>{event.name}</h3>
              <p>{event.dates.start.localDate}</p>
              <p>{event._embedded.venues[0].name}</p>
            </div>
          ))
        ) : (
          <p>No favorite events found.</p>
        )}
      </div>
    </div>
  );
}

export default Favorites;