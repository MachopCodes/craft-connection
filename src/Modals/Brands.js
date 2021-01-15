import React, { Fragment } from 'react'
import bottle from '../brands/argentina/cab.png'
import vineyard1 from '../images/vineyard1.jpg'
import vineyard2 from '../images/vineyard2.jpg'
import bodega from '../brands/argentina/bodega.png'
import { Modal, Col } from 'react-bootstrap'

export const Germany = () => {
  return (
    <Fragment>
      <Modal.Body closeButton className='modal-body'>
        <img className="vineyard" src={vineyard1} alt="bottle"/>
      </Modal.Body>
    </Fragment>
  )
}

export const Chile = () => {
  return (
    <Fragment>
      <Modal.Body closeButton className='modal-body'>
        <img className="vineyard" src={vineyard2} alt="bottle"/>
      </Modal.Body>
    </Fragment>
  )
}

export const Italy = () => {
  return (
    <Fragment>
      <Modal.Header closeButton>
        <img className="bodega-header" src={bodega}/>
      </Modal.Header>
      <Modal.Body className='modal-body'>
        <Col xs={6} lg={4}>
          <img className="fixed bottle" src={bottle} alt="bottle"/>
        </Col>
        <Col xs={6} lg={8}>
          <p className="modal-text"> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Tincidunt augue interdum velit euismod in. Sit amet dictum sit amet justo donec. Et sollicitudin ac orci phasellus. At varius vel pharetra vel turpis nunc eget lorem dolor. Sed vulputate odio ut enim blandit. Ridiculus mus mauris vitae ultricies leo integer malesuada. Tempor commodo ullamcorper a lacus. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Amet facilisis magna etiam tempor orci eu lobortis elementum nibh. Justo donec enim diam vulputate ut pharetra. Nisi vitae suscipit tellus mauris a diam. Id velit ut tortor pretium viverra suspendisse potenti nullam. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Tincidunt augue interdum velit euismod in. Sit amet dictum sit amet justo donec. Et sollicitudin ac orci phasellus. At varius vel pharetra vel turpis nunc eget lorem dolor. Sed vulputate odio ut enim blandit. Ridiculus mus mauris vitae ultricies leo integer malesuada. Tempor commodo ullamcorper a lacus. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Amet facilisis magna etiam tempor orci eu lobortis elementum nibh. Justo donec enim diam vulputate ut pharetra. Nisi vitae suscipit tellus mauris a diam. Id velit ut tortor pretium viverra suspendisse potenti nullam.</p>
        </Col>
      </Modal.Body>
    </Fragment>
  )
}
