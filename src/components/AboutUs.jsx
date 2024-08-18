import React from 'react';
import '../Styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1 className="intro-heading animate-intro">Why Finding Events is Such a Trouble</h1>
      <p className="intro-text">
        In a world brimming with opportunities, finding the right event can feel like finding a needle in a haystack. 
        The endless scrolling, the uncertainty of dates, and the frustration of missing out on something exciting 
        can be overwhelming. This is where <span className="highlight">Event Finder & Organizer</span> comes in - 
        a revolutionary solution designed to make your event discovery and planning effortless.
      </p>

      <div className="story">
        <h2 className="story-heading animate-story">The Developers Behind the Magic</h2>
        <p className="story-text">
          Meet the team of four visionary developers who transformed the chaotic world of event discovery into a 
          seamless experience.
        </p>

        <div className="developer-contributions">
          <div className="developer animate-cindy">
            <h3>Cindy Akumu</h3>
            <p>
              Cindy, the <span className="highlight">Architect</span> of User Experience, envisioned a platform 
              where users could find and organize events with just a few clicks. Her intuitive design and deep 
              understanding of user needs have set a new standard in the event discovery process.
            </p>
          </div>

          <div className="developer animate-abdalla">
            <h3>Abdalla Farah</h3>
            <p>
              Abdalla, the <span className="highlight">Mastermind</span> of Backend Engineering, ensured that the 
              platform's infrastructure was robust, secure, and scalable. His expertise in handling large-scale 
              databases and APIs has been the backbone of Event Finder & Organizer's success.
            </p>
          </div>

          <div className="developer animate-tony">
            <h3>Tony Audo</h3>
            <p>
              Tony, the <span className="highlight">Guru</span> of Real-Time Data, integrated cutting-edge 
              technology to provide users with the most up-to-date information on events. His work ensures that 
              no opportunity is ever missed, keeping users informed and engaged.
            </p>
          </div>

          <div className="developer animate-james">
            <h3>James Kahwai</h3>
            <p>
              James, the <span className="highlight">Innovator</span> in Automation, developed intelligent 
              algorithms that personalize event recommendations. His contributions have made Event Finder & Organizer 
              not just a tool, but a personal assistant that understands your preferences and curates experiences 
              just for you.
            </p>
          </div>
        </div>
      </div>

      <div className="collaboration-quote animate-quote">
        <p>“Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, 
        and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.”</p>
      </div>
    </div>
  );
};

export default AboutUs;
