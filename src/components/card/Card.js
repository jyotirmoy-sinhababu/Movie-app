import React from 'react';
import Modal from '../../components/modal/Modal';
import Poster from '../poster/Poster';

const Card = ({ img, name, rating, language, genres }) => {
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
        <button>More info?</button>
      </div>
      <div>
        <Modal>
          <Poster  />
        </Modal>
      </div>
    </div>
  );
};

export default Card;
