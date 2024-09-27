import React, {useState, useEffect} from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import StoryPage from './views/StoryPage';
import ProfilePage from './views/Profile';
import FavoritePage from './views/FavoritePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter(favId => favId !== id)
        : [...prevFavorites, id]
    );
  };

  const stories = [
    { id: 1, title: 'The Dark Forest', category: 'Fantasy', coverImage: 'black' },
    { id: 2, title: 'The Haunted Mansion', category: 'Horror' },
    { id: 3, title: 'The Space Odyssey', category: 'Fantasy' },
    { id: 4, title: 'The Lost City', category: 'Horror' },
    { id: 5, title: 'The Mysterious Island', category: 'Adventure' },
    { id: 6, title: 'The Secret Tunnel', category: 'Adventure' },
    { id: 7, title: 'The Underwater Adventure', category: 'Adventure' },
    { id: 8, title: 'The Time Traveler', category: 'Fantasy' },
    { id: 9, title: 'The Pirate Treasure', category: 'Fantasy' },
    { id: 10, title: 'The Witch\'s Cottage', category: 'Horror' },
  ];

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);
  
  return (
    <Router>
        <Routes>
          <Route 
            path="/" 
            element={<Home stories={stories} favorites={favorites} toggleFavorite={toggleFavorite} />} 
          />
          <Route path="/story/:storyId" element={<StoryPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route 
            path="/favorite" 
            element={<FavoritePage stories={stories} favorites={favorites} toggleFavorite={toggleFavorite} />} 
          />
        </Routes>    
    </Router>
  );
}

export default App;