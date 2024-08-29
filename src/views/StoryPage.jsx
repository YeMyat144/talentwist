import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function StoryPage() {
  const { storyId } = useParams();
  const [currentNode, setCurrentNode] = useState(null);
  const [storyNodes, setStoryNodes] = useState([]);
  const [bookmark, setBookmark] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isMusicOn, setIsMusicOn] = useState(false);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(stories => {
        const story = stories.find(story => story.id === parseInt(storyId, 10));
        if (story) {
          setCurrentNode(story.startNode);
          setStoryNodes(story.nodes);
          const savedBookmark = localStorage.getItem(`bookmark-${storyId}`);
          setBookmark(savedBookmark);
          setProgress(0); 
        }
      });
  }, [storyId]);

  const handleChoice = (nextNodeId) => {
    const nextNode = storyNodes.find(node => node.id === nextNodeId);
    setCurrentNode(nextNode);
    setProgress(prevProgress => Math.min(prevProgress + 20, 100)); 
  };

  const handleBookmark = () => {
    if (currentNode) {
      localStorage.setItem(`bookmark-${storyId}`, currentNode.id);
      setBookmark(currentNode.id);
    }
  };

  const handleToggleMusic = () => {
    setIsMusicOn(prevState => !prevState);
  };
  
  return (
    <div className="container mt-5">
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <a className="navbar-brand" href="#">StoryApp</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/stories">Stories</Link>
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

      <div className="text-center mb-4">
        <img src={currentNode ? currentNode.coverImage : 'https://via.placeholder.com/800x400?text=Loading...'} alt="Story Cover" className="img-fluid mb-3" />
        <h1>{currentNode ? currentNode.title : 'Loading...'}</h1>
        <h5>By {currentNode ? currentNode.author : 'Loading...'}</h5>
      </div>

      <div className="mb-4">
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${progress}%` }}
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {progress}%
          </div>
        </div>
      </div>

      {currentNode && (
        <div>
          <p>{currentNode.text}</p>
          {currentNode.choices.map(choice => (
            <button
              key={choice.nextNode}
              className="btn btn-primary me-2"
              onClick={() => handleChoice(choice.nextNode)}
            >
              {choice.text}
            </button>
          ))}
          <button
            className="btn btn-secondary me-2"
            onClick={handleBookmark}
          >
            Bookmark
          </button>
          <button
            className="btn btn-info"
            onClick={handleToggleMusic}
          >
            {isMusicOn ? 'Turn Off Music' : 'Turn On Music'}
          </button>
        </div>
      )}


      <div className="mt-4">
        <Link to="/" className="btn btn-secondary">Return to Home</Link>
      </div>
    </div>
  );
}

export default StoryPage;
