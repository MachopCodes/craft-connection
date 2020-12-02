import React, { Fragment } from 'react'
import bottle from '../../images/bottle.jpg'
import { Modal, Carousel } from 'react-bootstrap'

export const California = () => {
  return (
    <Fragment>
      <Modal.Header closeButton>California Wine</Modal.Header>
      <Modal.Body className='modal-body'>
        <img className="bottle" src={bottle} alt="bottle"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Modal.Body>
    </Fragment>
  )
}

export const France = () => {
  return (
    <Fragment>
      <Modal.Header closeButton>French Wine</Modal.Header>
      <Modal.Body className='modal-body'>
        <img className="bottle" src={bottle} alt="bottle"/>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
      </Modal.Body>
    </Fragment>
  )
}

export const Italy = () => {
  return (
    <Fragment>
      <Carousel>
        <Carousel.Item>
          <Modal.Header closeButton>Italian Wine 1</Modal.Header>
          <Modal.Body className='modal-body'>
            <img className="bottle" src={bottle} alt="bottle"/>
            <p className="modal-text"> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Modal.Body>
        </Carousel.Item>
        <Carousel.Item>
          <Modal.Header closeButton>Italian Wine 2</Modal.Header>
          <Modal.Body className='modal-body'>
            <img className="bottle" src={bottle} alt="bottle"/>
            <p className="modal-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </Modal.Body>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  )
}
