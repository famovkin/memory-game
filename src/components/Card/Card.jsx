import React from 'react';

import './Card.css';

const Card = ({ cardData, choiceHandler, flipped }) => {
  const handleClick = () => {
    choiceHandler(cardData);
  };

  console.log(flipped);
  return (
    <div className="card">
      <div className={flipped ? 'flipped' : ''}>
        <img
          className="card__front"
          draggable="false"
          src={cardData.src}
          alt="front"
        />
        <img
          className="card__back"
          draggable="false"
          onClick={handleClick}
          src="/img/cover.png"
          alt="back"
        />
      </div>
    </div>
  );
};

export default Card;
