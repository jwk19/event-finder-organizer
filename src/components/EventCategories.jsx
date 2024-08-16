
import React, { useEffect, useState } from 'react';
import { fetchEventCategories } from './Api';
import '../Styles/EventCategories.css';

function EventCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchEventCategories();
      setCategories(data.classifications);
    };
    getCategories();
  }, []);

  return (
    <div className="event-categories">
      <h2>Event Categories</h2>
      <div className="categories-list">
        {categories.map(category => (
          <div key={category.id} className="category-card">
            {category.segment.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventCategories;
