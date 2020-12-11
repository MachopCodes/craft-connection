import React, { Fragment } from 'react'
// import graca from '../../brands/portugal/graca28/graca.PNG'
import vanzeller from '../../brands/portugal/vanzeller.png'
import douro from '../../brands/portugal/graca28/douro.jpg'
import sebutal from '../../brands/portugal/graca28/sebutal.jpg'
import realBlend from '../../brands/portugal/fonte-real/blend.png'
import realSebutal from '../../brands/portugal/fonte-real/sebutal.png'
import realWhite from '../../brands/portugal/fonte-real/white.png'
import { Modal, Carousel, Container, Row, Col } from 'react-bootstrap'

const Portugal = () => {
  return (
    <Fragment>
      <Modal.Header closeButton className="modal-header">
        <img className="vanzeller-logo center" src={vanzeller} alt="bottle"/>
      </Modal.Header>
      <Carousel>
        <Carousel.Item>
          <Modal.Body className='modal-body'>
            <Container>
              <Row>
                <Col xs={6} md={6}>
                  <img className="bottle" src={douro} alt="bottle"/>
                </Col>
                <Col xs={6} md={6}>
                  <Modal.Title>Graça 28</Modal.Title>
                  <Modal.Title>Douro DOC</Modal.Title>
                  <p>14% v/v</p>
                  <p className="modal-text"> Elegant start that leads to a medium-bodied wine with matured round tannins. Great balance and acidity with a persistent finish.</p>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Carousel.Item>

        <Carousel.Item>
          <Modal.Body className='modal-body'>
            <Container>
              <Row>
                <Col xs={6} md={6}>
                  <img className="sebutal" src={sebutal} alt="bottle"/>
                </Col>
                <Col xs={6} md={6}>
                  <Modal.Title>Graça 28</Modal.Title>
                  <Modal.Title>Red Blend Sebútal</Modal.Title>
                  <p>14.5% v/v</p>
                  <p className="modal-text">This blend represents the fine character of Península de Setúbal wines. On the palate is full of cassis and black cherry fruit. Pleasant finish.</p>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Carousel.Item>

        <Carousel.Item>
          <Modal.Body className='modal-body'>
            <Container>
              <Row>
                <Col xs={6} md={6}>
                  <img className="fonte-real" src={realBlend} alt="bottle"/>
                </Col>
                <Col xs={6} md={6}>
                  <Modal.Title>Fonte-Real</Modal.Title>
                  <Modal.Title>Red Blend</Modal.Title>
                  <p>14% v/v</p>
                  <p className="modal-text">Ruby in colour. In the nose aromas of crushed red fruits with warming spice notes. Velvety plum and cherry tastes harmoniously balanced.</p>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Carousel.Item>

        <Carousel.Item>
          <Modal.Body className='modal-body'>
            <Container>
              <Row>
                <Col xs={6} md={6}>
                  <img className="fonte-real" src={realSebutal} alt="bottle"/>
                </Col>
                <Col xs={6} md={6}>
                  <Modal.Title>Fonte-Real</Modal.Title>
                  <Modal.Title>Red Sebútal IGP</Modal.Title>
                  <p>15% v/v</p>
                  <p className="modal-text">Almost black in colour. The palate is powerful, offering a delicious mouthful of juicy ripe blackberries, prunes, plums and spices. The finish is impressively long.</p>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Carousel.Item>

        <Carousel.Item>
          <Modal.Body className='modal-body'>
            <Container>
              <Row>
                <Col xs={6} md={6}>
                  <img className="fonte-real-white" src={realWhite} alt="bottle"/>
                </Col>
                <Col xs={6} md={6}>
                  <Modal.Title>Fonte-Real</Modal.Title>
                  <Modal.Title>White Setúbal IGP</Modal.Title>
                  <p>12% v/v</p>
                  <p className="modal-text">A delicate straw-gold colour. Fruity with toasty nuances. The palate is structured, with hints of stone fruit and citrus, combined with a surprising acidity.</p>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  )
}

export default Portugal
