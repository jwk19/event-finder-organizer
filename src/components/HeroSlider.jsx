import React, { useEffect, useState } from 'react';
import '../Styles/HeroSlider.css';
import { Link } from 'react-router-dom';
import { useEvent } from '../Hooks/useEventStore';

const HeroSlider = () => {
  const { events } = useEvent((state) => ({
    events: state.events,
  }));
  const [heroData, setHeroData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setHeroData(events.slice(0, 3));
  }, [events]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [heroData.length]);

  return (
    <div className="hero-slider">
      {heroData.map((event, index) => (
        <>
          <input
            type='radio'
            name='slider'
            id={index.toString()}
            checked={index}
            readOnly
          />
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
          {/* <label htmlFor={`${index}`} className="nextButton">Next</label> */}
        </>
      ))}
    </div>
  );
};

export default HeroSlider;