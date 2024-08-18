import React, { useEffect, useState } from 'react';
import '../Styles/HeroSlider.css';
import { Link } from 'react-router-dom';
import useAuthStore from './authStore';
import { useEvent } from '../Hooks/useEventStore';
const HeroSlider = () => {
    const {events,setEvents}= useEvent((state)=>({
        events:state.events,
        setEvents:state.setEvents
    
      }))

  // Fetch the events using the existing logic
  const fetchEvents = async () => {
    
    if (!error) {
      setEvents(data.slice(0, 3)); // Take the first 3 events
      console.log(events);
    } else {
      console.error("Failed to fetch events", error);
    }
  };
  useEffect(() => {
    
console.log (events);
    fetchEvents();
  }, []);

  return (
    <div className="hero-slider">
      {events.map((event, index) => (
        <>
       <input type='radio' name='slider' id={index}/>
        <div key={index} className={`hero-slide slide-${index + 1}`}>
          <img src={event.images[0].url} alt={event.name} className="hero-image" />
          <div className="slide-content">
            <h2>{event.name}</h2>
            <p>{event.dates.start.localDate}</p>
            <div className="slide-actions">
              <Link to={`/event/${event.id}`} className="btn see-event">See Event</Link>
              <a href="#search-events" className="btn search-events">Search Events</a>
            </div>
          </div>
        </div>
        <label htmlFor={index+1} className="nextButton">next</label>
        </>
      ))}
    </div>
  );
};

export default HeroSlider;
