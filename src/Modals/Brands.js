import React, { Fragment } from 'react'
import vineyard1 from '../images/vineyard1.jpg'
import vineyard2 from '../images/vineyard2.jpg'
import { Modal } from 'react-bootstrap'

export const Germany = () => {
  return (
    <Fragment>
      <Modal.Body className='modal-body'>
        <img className="vineyard" src={vineyard1} alt="bottle"/>
      </Modal.Body>
    </Fragment>
  )
}

export const Chile = () => {
  return (
    <Fragment>
    </Fragment>
  )
}

export const Italy = () => {
  return (
    <Fragment>
      <Modal.Body className='modal-body'>
        <img className="vineyard" src={vineyard2} alt="bottle"/>
      </Modal.Body>
    </Fragment>
  )
}
