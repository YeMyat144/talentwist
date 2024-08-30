// src/views/StoryPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Story from '../components/Story';
import 'bootstrap/dist/css/bootstrap.min.css';

function StoryPage() {
  const { storyId } = useParams();
  const [currentNode, setCurrentNode] = useState(null);
  const [storyNodes, setStoryNodes] = useState([]);

  useEffect(() => {
    const stories = {
      1: {
        title: 'The Dark Forest',
        author: 'John Doe',
        coverImage: '/assets/black.jpeg',
        startNode: {
          id: 1,
          text: 'You find yourself in a dark forest. Two paths lie ahead.',
          choices: [
            { text: 'Take the left path', nextNode: 2 },
            { text: 'Take the right path', nextNode: 3 },
          ],
        },
        nodes: [
          {
            id: 2,
            text: 'You took the left path and found a treasure!',
            choices: [{ text: 'Open the treasure chest', nextNode: 4 }],
          },
          {
            id: 3,
            text: 'You took the right path and encountered a dragon!',
            choices: [{ text: 'Fight the dragon', nextNode: 5 }],
          },
          {
            id: 4,
            text: 'The chest is full of gold. You win!',
            choices: [],
          },
          {
            id: 5,
            text: 'The dragon is too powerful. You run away safely.',
            choices: [],
          },
          {
            id: 6,
            text: 'You find a secret tunnel. Where does it lead?',
            choices: [],
          },
        ],
      },
      2: {
        title: 'The Haunted Mansion',
        author: 'Jane Smith',
        coverImage: '/assets/horse.jpeg',
        startNode: {
          id: 1,
          text: 'You stand before a haunted mansion. The door creaks open.',
          choices: [
            { text: 'Enter the mansion', nextNode: 2 },
            { text: 'Walk away', nextNode: 3 },
          ],
        },
        nodes: [
          {
            id: 2,
            text: 'You step inside and hear whispers.',
            choices: [{ text: 'Investigate the sound', nextNode: 4 }],
          },
          {
            id: 3,
            text: 'You decide to leave, but something pulls you back!',
            choices: [{ text: 'Struggle to break free', nextNode: 5 }],
          },
          {
            id: 4,
            text: 'A ghostly figure appears. It’s harmless.',
            choices: [],
          },
          {
            id: 5,
            text: 'You break free and escape the mansion. Safe!',
            choices: [],
          },
          {
            id: 6,
            text: 'You find an old diary on the floor. It holds dark secrets.',
            choices: [],
          },
        ],
      },
      3: {
        title: 'The Space Odyssey',
        author: 'Alex Johnson',
        coverImage: 'https://via.placeholder.com/800x400?text=The+Space+Odyssey',
        startNode: {
          id: 1,
          text: 'You’re on a spaceship headed to Mars. A warning light flashes.',
          choices: [
            { text: 'Check the control panel', nextNode: 2 },
            { text: 'Ignore it and proceed', nextNode: 3 },
          ],
        },
        nodes: [
          {
            id: 2,
            text: 'The oxygen levels are dropping! What do you do?',
            choices: [{ text: 'Fix the leak', nextNode: 4 }],
          },
          {
            id: 3,
            text: 'The warning was false. You continue safely.',
            choices: [],
          },
          {
            id: 4,
            text: 'You manage to fix the leak just in time.',
            choices: [],
          },
          {
            id: 5,
            text: 'You discover an alien life form in the cargo hold.',
            choices: [],
          },
          {
            id: 6,
            text: 'The spaceship lands on Mars. Mission accomplished!',
            choices: [],
          },
        ],
      },
      4: {
        title: 'The Lost City',
        author: 'Emily Brown',
        coverImage: 'https://via.placeholder.com/800x400?text=The+Lost+City',
        startNode: {
          id: 1,
          text: 'You discover the entrance to a lost city in the jungle.',
          choices: [
            { text: 'Enter the city', nextNode: 2 },
            { text: 'Camp outside', nextNode: 3 },
          ],
        },
        nodes: [
          {
            id: 2,
            text: 'Inside, you find ancient ruins.',
            choices: [{ text: 'Explore the ruins', nextNode: 4 }],
          },
          {
            id: 3,
            text: 'You decide to camp and explore in the morning.',
            choices: [],
          },
          {
            id: 4,
            text: 'You uncover a hidden chamber with treasure.',
            choices: [{ text: 'Take the treasure', nextNode: 5 }],
          },
          {
            id: 5,
            text: 'The chamber collapses, but you escape with the treasure!',
            choices: [],
          },
          {
            id: 6,
            text: 'You find an ancient map leading to more adventures.',
            choices: [],
          },
        ],
      },
      5: {
        title: 'The Underwater Adventure',
        author: 'Chris Taylor',
        coverImage: 'https://via.placeholder.com/800x400?text=The+Underwater+Adventure',
        startNode: {
          id: 1,
          text: 'You dive into the ocean to explore a sunken ship.',
          choices: [
            { text: 'Swim towards the ship', nextNode: 2 },
            { text: 'Explore the coral reef nearby', nextNode: 3 },
          ],
        },
        nodes: [
          {
            id: 2,
            text: 'You find the ship filled with treasure.',
            choices: [{ text: 'Take the treasure', nextNode: 4 }],
          },
          {
            id: 3,
            text: 'You find a hidden cave in the reef.',
            choices: [{ text: 'Enter the cave', nextNode: 5 }],
          },
          {
            id: 4,
            text: 'The treasure is cursed, and strange things start happening.',
            choices: [],
          },
          {
            id: 5,
            text: 'Inside the cave, you find a pearl of immense value.',
            choices: [],
          },
          {
            id: 6,
            text: 'You safely return to the surface with your findings.',
            choices: [],
          },
        ],
      },
      6: {
        title: 'The Enchanted Forest',
        author: 'Sarah Johnson',
        coverImage: 'https://via.placeholder.com/800x400?text=The+Enchanted+Forest',
        startNode: {
          id: 1,
          text: 'You enter a magical forest filled with mystical creatures.',
          choices: [
            { text: 'Follow the fairy', nextNode: 2 },
            { text: 'Explore the hidden cave', nextNode: 3 },
          ],
        },
        nodes: [
          {
            id: 2,
            text: 'The fairy leads you to a hidden waterfall.',
            choices: [{ text: 'Drink from the waterfall', nextNode: 4 }],
          },
          {
            id: 3,
            text: 'Inside the cave, you find a glowing crystal.',
            choices: [{ text: 'Touch the crystal', nextNode: 5 }],
          },
          {
            id: 4,
            text: 'Drinking from the waterfall grants you magical powers.',
            choices: [],
          },
          {
            id: 5,
            text: 'Touching the crystal transports you to another realm.',
            choices: [],
          },
          {
            id: 6,
            text: 'You encounter a mischievous gnome who offers you a quest.',
            choices: [],
          },
        ],
      },
      7: {
        title: 'The Time Traveler',
        author: 'Michael Anderson',
        coverImage: 'https://via.placeholder.com/800x400?text=The+Time+Traveler',
        startNode: {
          id: 1,
          text: 'You discover a time machine hidden in an old attic.',
          choices: [
            { text: 'Travel to the past', nextNode: 2 },
            { text: 'Travel to the future', nextNode: 3 },
          ],
        },
        nodes: [
          {
            id: 2,
            text: 'You find yourself in ancient Egypt during the time of the pharaohs.',
            choices: [{ text: 'Explore the pyramids', nextNode: 4 }],
          },
          {
            id: 3,
            text: 'You arrive in a futuristic city filled with advanced technology.',
            choices: [{ text: 'Interact with the robots', nextNode: 5 }],
          },
          {
            id: 4,
            text: 'Inside the pyramid, you discover a hidden treasure.',
            choices: [{ text: 'Take the treasure', nextNode: 6 }],
          },
          {
            id: 5,
            text: 'The robots offer you a chance to join their society.',
            choices: [],
          },
          {
            id: 6,
            text: 'Taking the treasure triggers a curse that sends you back to the present.',
            choices: [],
          },
        ],
      },
      8: {
        title: 'The Magical Kingdom',
        author: 'Emma Wilson',
        coverImage: 'https://via.placeholder.com/800x400?text=The+Magical+Kingdom',
        startNode: {
          id: 1,
          text: 'You stumble upon a hidden portal that leads to a magical kingdom.',
          choices: [
            { text: 'Meet the wise wizard', nextNode: 2 },
            { text: 'Explore the enchanted forest', nextNode: 3 },
          ],
        },
        nodes: [
          {
            id: 2,
            text: 'The wise wizard grants you a magical amulet.',
            choices: [{ text: 'Wear the amulet', nextNode: 4 }],
          },
          {
            id: 3,
            text: 'In the forest, you encounter talking animals.',
            choices: [{ text: 'Listen to the animals', nextNode: 5 }],
          },
          {
            id: 4,
            text: 'Wearing the amulet gives you the ability to fly.',
            choices: [],
          },
          {
            id: 5,
            text: 'The animals reveal a hidden treasure map.',
            choices: [],
          },
          {
            id: 6,
            text: 'You meet the queen of the magical kingdom and become her trusted advisor.',
            choices: [],
          },
        ],
      },
      9: {
        title: 'The Pirate Treasure',
        author: 'David Thompson',
        coverImage: 'https://via.placeholder.com/800x400?text=The+Pirate%27s+Treasure',
        startNode: {
          id: 1,
          text: 'You receive a mysterious map leading to a hidden pirate treasure.',
          choices: [
            { text: 'Sail to the deserted island', nextNode: 2 },
            { text: 'Search for clues in the old tavern', nextNode: 3 },
          ],
        },
        nodes: [
          {
            id: 2,
            text: 'On the island, you encounter a group of friendly dolphins.',
            choices: [{ text: 'Follow the dolphins', nextNode: 4 }],
          },
          {
            id: 3,
            text: 'In the tavern, you find a secret message hidden in a bottle.',
            choices: [{ text: 'Decode the message', nextNode: 5 }],
          },
          {
            id: 4,
            text: 'The dolphins guide you to a hidden underwater cave.',
            choices: [{ text: 'Enter the cave', nextNode: 6 }],
          },
          {
            id: 5,
            text: 'Decoding the message reveals the location of the buried treasure.',
            choices: [],
          },
          {
            id: 6,
            text: 'Inside the cave, you discover the pirate long-lost treasure.',
            choices: [],
          },
        ]
      },


    };
    

    const story = stories[storyId];
    if (story) {
      setCurrentNode(story.startNode);
      setStoryNodes(story.nodes);
    }
  }, [storyId]);

  const handleChoice = (nextNodeId) => {
    const nextNode = storyNodes.find(node => node.id === nextNodeId);
    setCurrentNode(nextNode);
    // Update progress
    setProgress(prevProgress => Math.min(prevProgress + 20, 100)); // Example increment
  };
  return (
    <div className="container mt-5">
      {/* Navigation Bar */}
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

      {/* Story Content and Choices */}
      {currentNode ? (
    <div className="card shadow-lg">
      <div className="card-body">
        <h5 className="card-title mb-4">{currentNode.text}</h5>
        <div className="list-group">
          {currentNode.choices.map((choice, index) => (
            <button
              key={index}
              className="list-group-item list-group-item-action"
              onClick={() => handleChoice(choice.nextNode)}
            >
              {choice.text}
            </button>
          ))}
        </div>
      </div>
    </div>
    ) : (
    <div className="text-center">
      <p className="text-muted">Loading story...</p>
    </div>
    )}
    <br />
      {/* Return to Home Button */}
      <div>
        <Link to="/" className="btn btn-secondary">Return to Home</Link>
      </div>
    </div>
  );
}

export default StoryPage;
