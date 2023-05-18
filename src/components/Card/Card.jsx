import React from 'react';

import './Card.css';

const Card = ({ cardData, choiceHandler }) => {
  const handleClick = () => {
    choiceHandler(cardData);
  };

  return (
    <div className="card">
      <div>
        <img className="card__front" src={cardData.src} alt="front" />
        <img
          className="card__back"
          onClick={handleClick}
          src="/img/cover.png"
          alt="back"
        />
      </div>
    </div>
  );
};

export default Card;
