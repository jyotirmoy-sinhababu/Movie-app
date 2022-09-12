import ReactDOM from 'react-dom';

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className='modal-design'>{children}</div>,
    document.getElementById('portal')
  );
};

export default Modal;
