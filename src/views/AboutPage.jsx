import React from 'react';  
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';  

function AboutPage() {  
  return (  
    <div className="container mt-4">  

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
      <div className="grid md:grid-cols-2 gap-8 mb-8">  
        <div>  
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">About StoryApp</h2>  
          <p className="text-gray-600 mb-4">  
            Welcome to StoryApp, a platform designed to immerse you in interactive storytelling experiences.  
            Explore our diverse range of stories, each offering unique paths and adventures.  
          </p>  
          <p className="text-gray-600">  
            Our mission is to bring creativity and engagement to readers by offering interactive and  
            dynamic storytelling experiences. Dive into our stories and see where your choices lead you!  
          </p>  
        </div>  
        <div>  
          <img   
            src="https://via.placeholder.com/600x400?text=About+StoryApp"   
            alt="About StoryApp"   
            className="w-full rounded-lg shadow"  
          />  
        </div>  
      </div>  

      <div>  
        <h2 className="text-2xl font-semibold text-gray-800">Our Team</h2>  
        <ul className="list-disc pl-5 text-gray-600">  
          <li className="mb-2">  
            <strong>John Doe</strong> - Founder & Lead Developer  
          </li>  
          <li className="mb-2">  
            <strong>Jane Smith</strong> - Creative Director  
          </li>  
          <li>  
            <strong>Emily Johnson</strong> - UI/UX Designer  
          </li>  
        </ul>  
      </div>  
    </div>  
  );  
}  

export default AboutPage;