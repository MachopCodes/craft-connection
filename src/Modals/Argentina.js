import React, { Fragment } from 'react'
import { Modal, Carousel, Col } from 'react-bootstrap'
import bodega from '../brands/argentina/bodega.png'
import cab from '../brands/argentina/cab.png'
import malbec from '../brands/argentina/malbec.png'

const Argentina = () => {
  return (
    <Fragment>
      <Modal.Header closeButton>
        <img className="bodega-logo" src={bodega}/>
      </Modal.Header>
      <Carousel fade={true}>
        <Carousel.Item className='fade-in'>
          <Modal.Body className='modal-body'>
            <Col xs={6} lg={4}>
              <img className="argentine wine" src={cab}/>
            </Col>
            <Col xs={6} lg={8}>
              <Modal.Title className="title">Old Vines, Cabernet Sauvignon</Modal.Title>
              <p className="modal-text">
              A wine with an intense ruby red color. Concentrated juicy berry fruit aromas that lead into flavors of blackberry and red currant fruit. Well-balanced, smooth tannins. Hints of vanilla and cocoa appear throughout the finish.
              </p>
            </Col>
          </Modal.Body>
        </Carousel.Item>
        <Carousel.Item>
          <Modal.Body className='modal-body'>
            <Col xs={6} lg={4}>
              <img className="wine malb" src={malbec}/>
            </Col>
            <Col xs={6} lg={8}>
              <Modal.Title className="title">Old Vines, Malbec</Modal.Title>
              <p className="modal-text">
              This is a dense wine, with an inky color and attractive cherry aromas. A fruity wine, with excellent body, intense tannins, and flavors of cherry and plum that intertwine with hints of cardamom and pepper. Prolonged, mouth filling finish.
              </p>
            </Col>
          </Modal.Body>
        </Carousel.Item>
      </Carousel>
      <Modal.Footer/>
    </Fragment>
  )
}

export default Argentina
