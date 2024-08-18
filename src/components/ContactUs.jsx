import React, { useState } from 'react';
import '../Styles/ContactUs.css';

const ContactUs = () => {
  const [bugReport, setBugReport] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBugReport((prevReport) => ({
      ...prevReport,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send bug report via email or API
    console.log('Bug report submitted:', bugReport);
    alert('Thank you for your report! We will look into it.');
    setBugReport({ name: '', email: '', message: '' }); // Clear the form
  };

  const developers = [
    {
      name: 'Abdalla Farah',
      email: 'abdalla999farah@gmail.com',
      avatar: 'https://as1.ftcdn.net/v2/jpg/05/71/35/08/1000_F_571350807_CpzPdIH64mtVOJ935wPI0wjdr45VQmKo.webp',
    },
    {
      name: 'Cindy Akumu',
      email: 'cindyakumu@gmail.com',
      avatar: 'https://as2.ftcdn.net/v2/jpg/06/29/56/11/1000_F_629561109_etlogXo35Bs7OwBcfWtu85aWtb89RKIa.jpg',
    },
    {
      name: 'Tony Audo',
      email: 'tonyaudo@gmail.com',
      avatar: 'https://as1.ftcdn.net/v2/jpg/05/71/35/08/1000_F_571350807_CpzPdIH64mtVOJ935wPI0wjdr45VQmKo.webp',
    },
    {
      name: 'James Kahwai',
      email: 'viralwebdigital@gmail.com',
      avatar: 'https://as1.ftcdn.net/v2/jpg/05/71/35/08/1000_F_571350807_CpzPdIH64mtVOJ935wPI0wjdr45VQmKo.webp',
    },
  ];

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>
        If you have any questions or feedback, please reach out to our
        developers. Thank you:
      </p>
      <div className="developer-cards">
        {developers.map((dev, index) => (
          <div key={index} className="developer-card">
            <img src={dev.avatar} alt={`${dev.name}'s avatar`} className="avatar" />
            <h3>{dev.name}</h3>
            <p>Email: <a href={`mailto:${dev.email}`}>{dev.email}</a></p>
          </div>
        ))}
      </div>

      {/* Bug Report Form */}
      <h2>Report a Bug</h2>
      <form onSubmit={handleSubmit} className="bug-report-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={bugReport.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={bugReport.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Describe the bug..."
          value={bugReport.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit Bug Report</button>
      </form>

      {/* Famous Quote */}
      <div className="bug-quote">
        <p>“It’s not a bug; it’s an undocumented feature.”</p>
      </div>
    </div>
  );
};

export default ContactUs;