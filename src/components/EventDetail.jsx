import React, { useState } from 'react';
import '../Styles/EventDetail.css';

function EventDetail({ event }) {
  const [showModal, setShowModal] = useState(false);

  const addToFavorites = (event) => {
    // Get existing favorites from local storage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Add new event to favorites
    favorites.push(event);

    // Save updated favorites to local storage
    localStorage.setItem('favorites', JSON.stringify(favorites));

    // Show the modal
    setShowModal(true);
    
    // Automatically hide the modal after 2 seconds
    setTimeout(() => setShowModal(false), 2000);
  };

  return (
    <div className="event-detail">
      <h2>{event.name}</h2>
      <img src={event.images[0].url} alt={event.name} />
      <p>{event.dates.start.localDate}</p>
      <p>{event._embedded.venues[0].name}</p>
      <p>{event.info}</p>
      <button onClick={() => addToFavorites(event)}>Add to Favorites</button>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Event added to favorites!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventDetail;