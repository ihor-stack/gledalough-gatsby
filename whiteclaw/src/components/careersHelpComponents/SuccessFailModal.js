// core
import React from 'react'
import Modal from 'react-bootstrap/Modal'

const SuccessFailModal = ({ showSuccessFailModal, closeSuccessFailModal, userName, modalBodyCopy, activeLang }) => {
    return (
    <>
        <Modal show={showSuccessFailModal} onHide={closeSuccessFailModal} animation={false}>
            <Modal.Body>
                <h3 className="modal-title">{activeLang === 'en-us' ? 'Thank You' : 'Gracias'} {userName}</h3>
                <p className="modal-body-copy" dangerouslySetInnerHTML={{__html: modalBodyCopy }}/>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn modal-close-btn mr-0" type="butmodalBodyCopyton" onClick={closeSuccessFailModal} onKeyDown={closeSuccessFailModal}>
                    {activeLang === 'en-us' ? 'Close' : 'Cerrar'}
                </button>
            </Modal.Footer>
        </Modal>
    </>
    )
}

export default SuccessFailModal