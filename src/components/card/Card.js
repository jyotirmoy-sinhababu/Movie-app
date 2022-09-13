import React from 'react';
import Modal from '../../components/modal/Modal';
import { useState } from 'react';
import Poster from '../poster/Poster';
import './card.css';

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
      <div className='card-body'>
        <div className='card-img-cnt'>
          <img className='image' src={img} alt='movie poster' />
        </div>
        <p className='card-name'>{name}</p>
        <p className='card-rating'>Rating:{rating}</p>
        <p className='card-language'>Language:{language}</p>
        <p className='card-genres'>Genres:{genres}</p>
        <div className='info-btn-ctn'>
          <button className='info-btn' onClick={openModal}>
            More info?
          </button>
        </div>
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
