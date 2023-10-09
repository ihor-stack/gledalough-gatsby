// core
import React, { useEffect } from 'react'

import { faXmarkCircle, faWindowClose } from '@fortawesome/free-regular-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function Modal({ closeModal, children }) {
  useEffect(() => {
    document.querySelector('body').classList.add('modal-open')
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.querySelector('body').classList.remove('modal-open')
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };

  const handleOnOverlayClick = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (<div className='fullscreen-modal'>
      <div className='modal-overlay'  onClick={handleOnOverlayClick}>
        <div className='modal-content'>
          <button
              className='modal-button'
              type="button"
              onClick={() => closeModal()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 0 24 24" width="60px" fill="#fff">
              <path d="M0 0h24v24H0V0z" fill="none"></path>
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
            </svg>
          </button>
          {children}
        </div>
      </div>
      </div>
  );
}

export default Modal;
