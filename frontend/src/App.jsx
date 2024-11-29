// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderBadas from './pages/parts/HeaderBadas';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Catalog from './pages/parts/Catalog';
import About from './pages/parts/About';
import Register from './pages/parts/Register';
import Profile from './pages/parts/Profile';
import Login from './pages/parts/Login';


//import ServiceList from './parts/ServiceList';



// алтернативные цвета: #6f91ff

const App = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/services/')
      .then(response => setServices(response.data))
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  return (  
  <>  
  <HeaderBadas />
    <Router>
      <div>
        <Routes>
          <Route title="каталог" path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/cabinet" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  
  </>
  );
}
export default App;