import React from 'react';
import './ContactUs.css'; 

const ContactUs = () => {
  const developers = [
    { name: 'Abdalla farah', email: 'abdalla999farah@gmail.com' },
    { name: 'cindy akumi', email: 'cindy.akumu@student.moringaschool.com' },
    { name: 'tony udo', email: 'tonyaudo@gmail.com' },
    { name: 'james kahwa', email: 'viralwebdigital@gmail.com' },

  ];

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>If you have any questions or feedback, please reach out to our developers,Thank you:</p>
      <ul>
        {developers.map((dev, index) => (
          <li key={index}>
            <strong>{dev.name}:</strong> <a href={`mailto:${dev.email}`}>{dev.email}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactUs;
