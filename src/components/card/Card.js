import React from 'react';

const Card = ({ img, name, rating, language, genres }) => {
  return (
    <div>
      <div>
        <img className='image' src={img} alt='movie poster' />
      </div>
      <p>{name}</p>
      <p>Rating:{rating}</p>
      <p>Language:{language}</p>
      <p>Genres:{genres}</p>
    </div>
  );
};

export default Card;
