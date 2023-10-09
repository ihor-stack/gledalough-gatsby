// core
import React from 'react'
import Modal from 'react-bootstrap/Modal'

// components
import ImgWithFallback from '../ImgWithFallback'

// assets
import batchSrc from '../../assets/images/contact-page/wc-product-detailed-batch-code-image.webp';
import batchSrcFallback from '../../assets/images/contact-page/wc-product-detailed-batch-code-image.png';

const WindowModal = ({ showWindowModal, closeWindowModal, windowModalType, lang }) => {

  return (
    <>
      <Modal show={showWindowModal} onHide={closeWindowModal} animation={false} className="contact-us">
        <Modal.Body>

        { windowModalType === "batchimage" ? (
          <>
          <div className="form-group">
            <ImgWithFallback
              classNamePicture={""}
              classNameImg={"img-fluid d-block mx-auto"}
              src={batchSrc}
              fallbackSrc={batchSrcFallback}
              alt="White Claw Logo"
            />
          </div> 
          </> 
        ) : windowModalType === "decipherbatchnumber" ? (
          <>
            <h3>Batch Code Example:<br/>
            A011912FL 18:26 02</h3>

            <p>A = month = January<br/>
            01 = date = 1st<br/>
            19 = year = 2019</p>

            <p>12 = Internal digits<br/>
            18:26 = time<br/>
            FL = production facility code</p>

            <p>A = January; B = February; C = March; D = April; <br/> E = May; F = June; G = July; H = August; <br/> J = September; K = October; L = November; M = December</p>
          </>
        ) : null }
        </Modal.Body>
        <Modal.Footer>
          <button className="btn modal-close-btn mr-0" type="button" onClick={closeWindowModal} onKeyDown={closeWindowModal}>
            {lang === 'en-us' ? 'Close' : 'Cerrar'}
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default WindowModal