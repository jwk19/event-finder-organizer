import { Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import HeroSlider from './components/HeroSlider';
// import EventCategories from './components/EventCategories';
// import EventList from './components/EventList';
// import EventDetail from './components/EventDetail';
// import Search from './components/Search';
// import EventList from './components/EventList';
// import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import ContactUs from './components/ContactUs';
import EventDetail from './components/EventDetail';
// import EventCategories from './components/EventCategories';
// import HeroSlider from './components/HeroSlider';
import Search from './components/Search';
import EventList from './components/EventList';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { useState } from 'react';
// import './App.css';

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
      <Route path="/signup" element={<SignUp />} />




      
    </Routes>
    <Footer />
    </>
  );
}

export default App;
