import ReactDOM from 'react-dom';
import './modal.css';

const Modal = ({ isOpen, children, setIsOpen }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className='modal-design'>
      <button onClick={() => setIsOpen(false)}>X</button>
      {children}
    </div>,
    document.getElementById('portal')
  );
};

export default Modal;
