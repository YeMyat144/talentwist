import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import StoryPage from './views/StoryPage';
import AboutPage from './views/AboutPage';
import ContactPage from './views/ContactPage';
import ProfilePage from './views/Profile';
import FavoritePage from './views/FavoritePage';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  
  return (
    <Router>
      <Navbar /> 
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story/:storyId" element={<StoryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/favorite" element={<FavoritePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;