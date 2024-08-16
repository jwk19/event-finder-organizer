import '../Styles/EventDetail.css';


function EventDetail({event}) {
    console.log(event);
  return (
    <div className="event-detail">
      <h2>{event.name}</h2>
      <img src={event.images[0].url} alt={event.name} />
      <p>{event.dates.start.localDate}</p>
      <p>{event._embedded.venues[0].name}</p>
      <p>{event.info}</p>
    </div>
  );
}

export default EventDetail;
