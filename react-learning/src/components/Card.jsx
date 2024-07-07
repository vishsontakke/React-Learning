import React, { useState } from 'react';
import './Card.css'; // Import your CSS file for styling

const Card = () => {
  const [count, setCount] = useState(0);

  const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Success doesn’t just find you. You have to go out and get it.",
    "The harder you work for something, the greater you'll feel when you achieve it."
  ];

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  return (
    <div className="card">
      <h1 className="welcome-text">Welcome!</h1>
      <p className="quote">{getRandomQuote()}</p>
      {/* <button onClick={() => setCount((count) => count + 1)} className="btn btn-primary">
        Increment Count: {count}
      </button> */}
    </div>
  );
};

export default Card;
