import React from 'react';
import './poster.css';

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
    <div className='poster-cnt'>
      <div className='img-cnt'>
        <img className='image-poster' src={imgSecond} alt='movie poster' />
      </div>
      <div className='poster-info'>
        <p className='poster-name'>{name}</p>
        <p className='info'>
          <strong>Rating:</strong>
          {rating}
        </p>
        <p className='info'>
          <strong>Language:</strong>
          {language}
        </p>
        <p className='info'>
          <strong>Genres:</strong>
          {genres}
        </p>
        <p className='info'>
          <strong>URL:</strong>
          {url}
        </p>
        <div className='summary-info'>
          <p className='info'>
            <strong>Summary:</strong>
            {summary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Poster;
