Event Finder & Organizer
========================

Event Finder & Organizer is a web application designed to help users discover, save, and organize events happening around them. The app fetches data from the Ticketmaster API to display upcoming events and allows users to search for events based on location, category, or date. Users can also save their favorite events to a personalized list and manage their event-related activities.

Table of Contents
-----------------

-   [Project Overview](#project-overview)
-   [Features](#features)
-   [Technologies Used](#technologies-used)
-   [Installation and Setup](#installation-and-setup)
-   [Usage](#usage)
-   [Components Overview](#components-overview)
-   [Contributors](#contributors)
-   [License](#license)

Project Overview
----------------

In a world filled with opportunities, finding the right event can often feel like finding a needle in a haystack. The Event Finder & Organizer app solves this problem by offering an intuitive platform that simplifies the process of discovering and organizing events. Whether you're looking for concerts, sports events, or workshops, this app has got you covered.

Features
--------

-   **Event Discovery**: Search for events by location, category, or date.
-   **Personalized Favorites**: Save your favorite events to a personalized list.
-   **User Authentication**: Secure login and signup functionalities powered by Supabase.
-   **Responsive Design**: Fully responsive and accessible across different devices.
-   **Hero Slider**: Dynamic slider showcasing top events with animated borders.
-   **Developer Contributions**: Learn about the developers who made this project possible.

Technologies Used
-----------------

-   **React**: JavaScript library for building user interfaces.
-   **Supabase**: Backend as a service providing authentication, database, and storage.
-   **Zustand**: Lightweight state management library.
-   **Ticketmaster API**: Used to fetch event data.
-   **CSS**: Styling and animations.

Installation and Setup
----------------------

### Prerequisites

Ensure you have the following installed on your machine:

-   Node.js and npm
-   A Supabase account with the necessary credentials
-   Ticketmaster API key

### Steps

1.  **Clone the Repository**

    `git clone https://github.com/jwk19/event-finder-organizer.git
    cd event-finder-organizer`

2.  **Install Dependencies**

    `npm install`

3.  **Set Up Environment Variables**

    Create a `.env` file in the root directory with the following environment variables:

    `VITE_SUPABASE_URL=your-supabase-url
    VITE_SUPABASE_KEY=your-supabase-key
    VITE_TICKETMASTER_API_KEY=your-ticketmaster-api-key`

4.  **Run the Development Server**

    `npm run dev`

5.  **Access the Application**

    Open your browser and navigate to `http://localhost:5173` to access the application.

Usage
-----

### Main Features

1.  **Event Discovery**

    -   Use the search function to find events by location, category, or date.
    -   The HeroSlider dynamically displays the top 3 events from the API.
2.  **Saving Favorite Events**

    -   Sign up or log in to save events to your personalized list.
    -   Manage your favorite events through the profile page.
3.  **Bug Reporting**

    -   Users can report bugs using the contact form on the "Contact Us" page.

### Search Events

-   Scroll down from the HeroSlider to access the search section, where you can search for more events based on various criteria.

Components Overview
-------------------

-   **HeroSlider**: Displays the top 3 events with an animated border and action buttons.
-   **Navbar**: Provides navigation links for Home, Search Events, About Us, and Contact Us.
-   **EventList**: Lists events fetched from the Ticketmaster API.
-   **EventDetail**: Displays detailed information about a selected event.
-   **ProfilePage**: User profile page with access to favorite events and a search form.
-   **ContactUs**: Page with developer information and a bug reporting form.
-   **AboutUs**: Page with an introduction to the project and developer contributions.

Contributors
------------

This project was developed by a team of four talented software engineers:

-   **Cindy Akumu**
-   **Abdalla Farah**
-   **Tony Audo**
-   **James Kahwai**


Trello
------------

Use the link provided below to join the Trello board for this project.

https://trello.com/invite/b/66b9ed0823d53daebf2c135c/ATTI2a10e205f972a4ad94d13dc36666a2234A15DFE4/event-finder-organizer-web-app

Project Slides
------------

Use the link provided below to view our project presentation slides.

https://www.canva.com/design/DAGOO63ya24/wWi_u48vhFPxfKLbz2dVXg/edit?utm_content=DAGOO63ya24&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

License
-------

This project is licensed under the MIT License. See the LICENSE file for details.