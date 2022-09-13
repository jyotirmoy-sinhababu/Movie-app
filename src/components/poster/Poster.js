import React from 'react';

const Poster = ({
  name,
  rating,
  language,
  genres,
  url,
  summary,
  imgSecond,
}) => {
  return (
    <div>
      <div>
        <img className='image-poster' src={imgSecond} alt='movie poster' />
      </div>
      <p>{name}</p>
      <p>Rating:{rating}</p>
      <p>Language:{language}</p>
      <p>Genres:{genres}</p>
      <p>URL:{url}</p>
      <p>Summary:{summary}</p>
    </div>
  );
};

export default Poster;
