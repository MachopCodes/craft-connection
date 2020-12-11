import React, { Fragment } from 'react'
import { Modal, Carousel, Container, Row, Col } from 'react-bootstrap'
import bodega from '../../brands/argentina/bodega.jpg'
import cab from '../../brands/argentina/cab.png'
import malbec from '../../brands/argentina/malbec.png'

const Argentina = () => {
  return (
    <Fragment>
      <Modal.Header closeButton className="modal-header">
        <img className="center bodega-logo" src={bodega} alt="bottle"/>
      </Modal.Header>
      <Carousel>
        <Carousel.Item>
          <Modal.Body className='modal-body'>
            <Container>
              <Row>
                <Col xs={4}>
                  <img className="bottle bodega-cab" src={cab} alt="bottle"/>
                </Col>
                <Col xs={8}>
                  <Modal.Title className="centered">Old Vines</Modal.Title>
                  <Modal.Title className="centered">Cabernet Sauvignon</Modal.Title>
                  <br/>
                  <p className="modal-text"> A wine with an intense ruby red color. Concentrated juicy berry fruit aromas that lead into flavors of blackberry and red currant fruit. Well-balanced, smooth tannins. Hints of vanilla and cocoa appear throughout the finish.</p>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Carousel.Item>
        <Carousel.Item>
          <Modal.Body className='modal-body'>
            <Container>
              <Row>
                <Col xs={4}>
                  <img className="bottle bodega-malb" src={malbec} alt="bottle"/>
                </Col>
                <Col xs={8}>
                  <Modal.Title className="centered">Old Vines</Modal.Title>
                  <Modal.Title className="centered">Malbec</Modal.Title>
                  <br/>
                  <p className="modal-text">This is a dense wine, with an inky color and attractive cherry aromas. A fruity wine, with excellent body, intense tannins, and flavors of cherry and plum that intertwine with hints of cardamom and pepper. Prolonged, mouth filling finish. </p>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  )
}

export default Argentina
