import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '../src/components/home';
import Aboutus from '../src/components/aboutus';
import Contactus from '../src/components/contactus';
import Navbar from '../src/components/navbar';
import Event from '../src/components/events';
import OurTeam from '../src/components/team';
import FooterPage from '../src/components/footer';
import { useEffect } from 'react';
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Events" element={<Event />} />
        <Route path="/OurTeam" element={<OurTeam />} />
        <Route path="/AboutUs" element={<Aboutus />} />
        <Route path="/Contactus" element={<Contactus />} />
      </Routes>
      <ScrollToTop />
      {/* <FooterPage /> */}
    </BrowserRouter>
  </div>
  );
}

export default App;
