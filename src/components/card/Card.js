import React from 'react';
import Modal from '../../components/modal/Modal';
import { useState } from 'react';
import Poster from '../poster/Poster';

const Card = ({
  img,
  name,
  rating,
  language,
  genres,
  url,
  summary,
  imgSecond,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <div>
        <div>
          <img className='image' src={img} alt='movie poster' />
        </div>
        <p>{name}</p>
        <p>Rating:{rating}</p>
        <p>Language:{language}</p>
        <p>Genres:{genres}</p>
        <button onClick={openModal}>More info?</button>
      </div>
      <div>
        <Modal isOpen={isOpen}>
          <Poster
            name={name}
            rating={rating}
            language={language}
            genres={genres}
            url={url}
            summary={summary}
            imgSecond={imgSecond}
          />
        </Modal>
      </div>
    </div>
  );
};

export default Card;
