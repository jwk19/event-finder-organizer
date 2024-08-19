
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchEvents } from './Api';
import '../Styles/EventList.css';
import { useEvent } from '../Hooks/useEventStore';
import HeroSlider from './HeroSlider';

function EventList({event,setEvent}) {
  const navigate = useNavigate()
  const {events,setEvents}= useEvent((state)=>({
    events:state.events,
    setEvents:state.setEvents

  }))
  useEffect(() => {
    const getEvents = async () => {
      const data = await fetchEvents();
      setEvents(data._embedded.events);
    };
    getEvents();
  }, []);
  function handleClick(data){
    setEvent(data)
    console.log(data)
    navigate('/view-event')

  }
  return (
    <div className="event-list">
      <HeroSlider/>
      <h2>Upcoming Events</h2>
      <div className="events-container">
        {events.map(event => (
          <div key={event.id} className="event-card" onClick={()=>handleClick(event)}>
            <img src={event.images[0].url} alt={event.name} />
            <div className="event-info">
              <h3>{event.name}</h3>
              <p>{event.dates.start.localDate}</p>
              <p>{event._embedded.venues[0].name}</p>
              <table>
                <thead>
                  <th>currency</th>
                  <th>min</th>
                  <th>max</th>
                  <th>type</th>
                </thead>
                <tbody>
                  {/* {events.priceRanges.map((single)=>{
                    return (
                      <tr>
                    <td>{single.currency}</td>
                    <td>{single.min}</td>
                    <td>{single.max}</td>
                    <td>{single.type}</td>
                  </tr>
                    )
                  })} */}
                  
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventList;