
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import EventDetail from './components/EventDetail';
import Search from './components/Search';
import EventList from './components/EventList';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Login from './components/Login';
// import SignUp from './components/SignUp';
import { useState } from 'react';
// import ProfilePage from './components/ProfilePage';
// import Favorites from './components/Favorites';

import './App.css';
import Favorites from './components/Favorites';

function App() {
  const [event, setEvent] = useState(null);
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<EventList setEvent={setEvent} event={event} />} />
      <Route path="/search" element={<Search setEvent={setEvent} event={event}/>} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/view-event" element={<EventDetail event={event} />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/login" element={<Login />} />
      <Route path="/fav" element={<Favorites />} />
      {/* <Route path="/signup" element={<SignUp />} /> */}
      {/* <Route path="/profile" element={<ProfilePage />} /> */}
      {/* <Route path="/profile/favorites" element={<Favorites />} /> */}
      {/* <Route path="/profile/search" element={<Search />} /> */}




      
    </Routes>
    <Footer />
    </>
  );
}

export default App;