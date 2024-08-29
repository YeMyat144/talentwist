import React from 'react';

function Story({ currentNode, onChoose }) {
  return (
    <div>
      <p>{currentNode.text}</p>
      {currentNode.choices.length > 0 ? (
        currentNode.choices.map((choice) => (
          <button key={choice.text} onClick={() => onChoose(choice.nextNode)}>
            {choice.text}
          </button>
        ))
      ) : (
        <div>
          <p>The End</p>
          <button onClick={() => window.location.reload()}>Restart</button>
        </div>
      )}
    </div>
  );
}

export default Story;