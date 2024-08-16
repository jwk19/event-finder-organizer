
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchSearch } from './Api';
import '../Styles/Search.css';

function Search({setEvent,event}) {
  const [query, setQuery] = useState('');
  const [events, setEvents] = useState([]);

     async function handleSearch(){
        let data = await fetchSearch(query)
        setEvents(data)
        console.log(events)
     }
     function handleClick(data){
      setEvent(data)
      console.log(event)
      navigate('/view-event')
     }
     const navigate = useNavigate()
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search events"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div className="search-results">
        {events.length===0?'':events.map(event => (
          <div key={event.id} className="search-card" onClick={()=>handleClick(event)}>
            <h3>{event.name}</h3>
            <p>{event.dates.start.localDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
