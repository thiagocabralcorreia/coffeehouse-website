import React from 'react';
import ReactModal from 'react-modal';
import './styles.css';

function Modal( children, close, open ) {
  const handleOpen = () => {
    return (document.body.style.overflow = 'hidden');
  };

  const handleClose = () => {
    return (document.body.style.overflow = 'unset');
  };

  return (
    <ReactModal
      isOpen={open}
      onRequestClose={close}
      shouldCloseOnOverlayClick={true}
      onAfterOpen={handleOpen}
      onAfterClose={handleClose}
      closeTimeoutMS={490}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: 'rgba(29, 49, 65, 0.8)',
          overflowX: 'hidden',
          overflowY: 'auto',
          zIndex: 2,
        },

      }}
      >
      <div className='modal-container' open={open}>
        {children}
      </div>
      </ReactModal>
  )
}

export default Modal;
