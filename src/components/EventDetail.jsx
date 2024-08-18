import '../Styles/EventDetail.css';
import useAuthStore from './authStore';

function EventDetail({ event }) {
  console.log(event);
  
  // Access the addFavorite function from the Zustand store
  const addFavorite = useAuthStore((state) => state.addFavorite);

  return (
    <div className="event-detail">
      <h2>{event.name}</h2>
      <img src={event.images[0].url} alt={event.name} />
      <p>{event.dates.start.localDate}</p>
      <p>{event._embedded.venues[0].name}</p>
      <p>{event.info}</p>
      <button onClick={() => addFavorite(event)}>Add to Favorites</button> 
    </div>
  );
}

export default EventDetail;
