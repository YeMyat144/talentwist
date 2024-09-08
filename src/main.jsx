import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './views/Home';
import StoryPage from './views/StoryPage';
import AboutPage from './views/AboutPage';
import ContactPage from './views/ContactPage';
import ProfilePage from './views/Profile';
import FavoritePage from './views/FavoritePage';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story/:storyId" element={<StoryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/favorite" element={<FavoritePage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
