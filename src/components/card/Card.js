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
        <p className='card-rating'>
          <strong>Rating:</strong>
          {rating}
        </p>
        <p className='card-language'>
          <strong>Language:</strong>
          {language}
        </p>
        <p className='card-genres'>
          {' '}
          <strong>Genres:</strong>
          {genres}
        </p>
        <div className='info-btn-ctn'>
          <button className='info-btn' onClick={openModal}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-info-circle'
              viewBox='0 0 16 16'
            >
              <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
              <path d='m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z' />
            </svg>
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
