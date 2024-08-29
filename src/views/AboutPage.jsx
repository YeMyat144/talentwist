import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function AboutPage() {
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

      <div className="row">
        <div className="col-md-6">
          <h1 className="display-4 mb-4">About StoryApp</h1>
          <p className="lead">
            Welcome to StoryApp, a platform designed to immerse you in interactive storytelling experiences.
            Explore our diverse range of stories, each offering unique paths and adventures.
          </p>
          <p>
            Our mission is to bring creativity and engagement to readers by offering interactive and
            dynamic storytelling experiences. Dive into our stories and see where your choices lead you!
          </p>
        </div>
        <div className="col-md-6">
          <img 
            src="https://via.placeholder.com/600x400?text=About+StoryApp" 
            alt="About StoryApp" 
            className="img-fluid rounded"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <h2 className="display-6">Our Team</h2>
          <ul className="list-unstyled">
            <li className="mb-3">
              <h5>John Doe</h5>
              <p>Founder & Lead Developer</p>
            </li>
            <li className="mb-3">
              <h5>Jane Smith</h5>
              <p>Creative Director</p>
            </li>
            <li>
              <h5>Emily Johnson</h5>
              <p>UI/UX Designer</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
