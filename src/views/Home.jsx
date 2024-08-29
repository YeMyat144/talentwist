import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const stories = [
    { id: 1, title: 'The Dark Forest', category: 'Fantasy' },
    { id: 2, title: 'The Treasure Hunt', category: 'Adventure' },
    { id: 3, title: 'The Dragon\'s Lair', category: 'Fantasy' },
    { id: 4, title: 'The Haunted Mansion', category: 'Horror' },
    { id: 5, title: 'The Mysterious Island', category: 'Adventure' },
  ];

  const categories = ['Fantasy', 'Adventure', 'Horror'];

  const filteredStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <a className="navbar-brand" href="#">StoryApp</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search stories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <h2 className="text-center mb-4">Featured Stories</h2>
        <div className="row">
          {filteredStories.slice(0, 3).map(story => (
            <div key={story.id} className="col-md-4 mb-3">
              <div className="card">
                <img src={`https://via.placeholder.com/300?text=${story.title}`} className="card-img-top" alt={story.title} />
                <div className="card-body">
                  <h5 className="card-title">{story.title}</h5>
                  <p className="card-text">A brief description of {story.title}.</p>
                  <Link to={`/story/${story.id}`} className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
