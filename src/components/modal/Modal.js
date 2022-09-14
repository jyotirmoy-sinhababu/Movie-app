import ReactDOM from 'react-dom';
import './modal.css';

const Modal = ({ isOpen, children, setIsOpen }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className='modal-design'>
      <div className='close-btn'>
        <button className='x-btn' onClick={() => setIsOpen(false)}>
          X
        </button>
      </div>
      {children}
    </div>,
    document.getElementById('portal')
  );
};

export default Modal;
