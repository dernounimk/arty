import React, { useState, useEffect } from 'react';
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Loader from './Components/Loader/Loader';
import ScrollToTop from './Components/ScrollToTop';
import Footer from './Components/Footer/Footer';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <ScrollToTop />
      {loading && <Loader />}
      <Nav cardLen={cartItem.length} />
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );

}

export default App;
