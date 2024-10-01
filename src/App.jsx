import React, {useState, useEffect} from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import StoryPage from './views/StoryPage';
import { UserProvider } from './components/UserContext';
import SignUp from './views/SignUp';
import Login from './views/Login';
import HomePage from './views/HomePage';
import ProfilePage from './views/Profile';
import FavoritePage from './views/FavoritePage';
import 'bootstrap/dist/css/bootstrap.min.css';

import image1 from './assets/forest.jpg';
import image2 from './assets/haunted.jpg';
import image3 from './assets/space.jpg';
import image4 from './assets/lostcity.jpg';
import image5 from './assets/island.jpg';
import image6 from './assets/tunnel.jpg';
import image7 from './assets/under.jpg';
import image8 from './assets/time.jpg';
import image9 from './assets/pirate.jpg';
import image10 from './assets/cottage.jpg';

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
    {
      id: 1,
      title: 'The Dark Forest',
      category: 'Fantasy',
      description: 'A thrilling adventure into the heart of an enchanted forest full of mysteries and magic.',
      coverImage: image1,
    },
    {
      id: 2,
      title: 'The Haunted Mansion',
      category: 'Horror',
      description: 'Explore the dark corridors of the haunted mansion and uncover the secrets that lie within.',
      coverImage: image2,
    },
    {
      id: 3,
      title: 'The Space Odyssey',
      category: 'Fantasy',
      description: 'Join the crew of a spaceship on an epic journey through the cosmos.',
      coverImage: image3,
    },
    {
      id: 4,
      title: 'The Lost City',
      category: 'Horror',
      description: 'A suspenseful tale about explorers who discover an ancient city lost to time.',
      coverImage: image4,
    },
    {
      id: 5,
      title: 'The Mysterious Island',
      category: 'Adventure',
      description: 'An exciting adventure on a strange island filled with secrets.',
      coverImage: image5,
    },
    {
      id: 6,
      title: 'The Secret Tunnel',
      category: 'Adventure',
      description: 'Follow a group of friends as they explore a secret tunnel beneath their city.',
      coverImage: image6,
    },
    {
      id: 7,
      title: 'The Underwater Adventure',
      category: 'Adventure',
      description: 'Dive into the depths of the ocean to discover a world of underwater wonders.',
      coverImage: image7,
    },
    {
      id: 8,
      title: 'The Time Traveler',
      category: 'Fantasy',
      description: 'Travel through time and witness incredible moments in history.',
      coverImage: image8,
    },
    {
      id: 9,
      title: 'The Pirate Treasure',
      category: 'Fantasy',
      description: 'Set sail with pirates on the hunt for a legendary treasure.',
      coverImage: image9,
    },
    {
      id: 10,
      title: "The Witch's Cottage",
      category: 'Horror',
      description: 'Enter the dark and eerie cottage of a mysterious witch.',
      coverImage: image10,
    },
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
          {/* <Route 
            path="/" 
            element={<Home stories={stories} favorites={favorites} toggleFavorite={toggleFavorite} />} 
          />
          <Route path="/story/:storyId" element={<StoryPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route 
            path="/favorite" 
            element={<FavoritePage stories={stories} favorites={favorites} toggleFavorite={toggleFavorite} />} 
          /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home stories={stories} favorites={favorites} toggleFavorite={toggleFavorite} />} />
          <Route path="/favorite" element={<FavoritePage stories={stories} favorites={favorites} toggleFavorite={toggleFavorite} />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/story/:storyId" element={<StoryPage />} />
        </Routes>    
    </Router>
  );
}

export default App;