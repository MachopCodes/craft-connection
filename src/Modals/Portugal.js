import React, { Fragment } from 'react'
// import graca from '../../brands/portugal/graca28/graca.PNG'
import vanzeller from '../brands/portugal/vanzeller.png'
import douro from '../brands/portugal/graca28/douro.jpg'
import sebutal from '../brands/portugal/graca28/sebutal.jpg'
import realBlend from '../brands/portugal/fonte-real/blend.png'
import realSebutal from '../brands/portugal/fonte-real/sebutal.png'
import realWhite from '../brands/portugal/fonte-real/white.png'
import { Modal, Carousel, Container, Row, Col } from 'react-bootstrap'

const Portugal = () => {
  return (
    <Fragment>
      <Carousel>
        <Carousel.Item className="fade-in">
          <Modal.Body className='modal-body'>
            <Container>
              <Row>
                <Col xs={6}><img className="douro" src={douro}/></Col>
                <Col xs={6}>
                  <img className="vanzeller-logo" src={vanzeller}/>
                  <Modal.Title className="title">Graça 28, Douro DOC</Modal.Title>
                  <p className="modal-text">
                  Elegant start that leads to a medium-bodied wine with matured round tannins. Great balance and acidity with a persistent finish. 14%.
                  </p>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Carousel.Item>
        <Carousel.Item>
          <Modal.Body className='modal-body'>
            <Container>
              <Row>
                <Col xs={6}><img className="sebutal" src={sebutal}/></Col>
                <Col xs={6}>
                  <img className="vanzeller-logo" src={vanzeller}/>
                  <Modal.Title className="title">Graça 28, Red Blend Sebútal</Modal.Title>
                  <p className="modal-text">
                  This blend represents the fine character of Península de Setúbal wines. On the palate is full of cassis and black cherry fruit. Pleasant finish. 14.5%.
                  </p>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Carousel.Item>
        <Carousel.Item>
          <Modal.Body className='modal-body'>
            <Container>
              <Row>
                <Col xs={6}><img className="fonte-redBlend" src={realBlend}/></Col>
                <Col xs={6}>
                  <img className="vanzeller-logo" src={vanzeller}/>
                  <Modal.Title className="title">Fonte Real, Red Blend</Modal.Title>
                  <p className="modal-text">
                  Ruby in colour. In the nose aromas of crushed red fruits with warming spice notes. Velvety plum and cherry tastes harmoniously balanced. 14%.
                  </p>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Carousel.Item>
        <Carousel.Item>
          <Modal.Body className='modal-body'>
            <Container>
              <Row>
                <Col xs={6}><img className="fonte-redSebutal" src={realSebutal}/></Col>
                <Col xs={6}>
                  <img className="vanzeller-logo" src={vanzeller}/>
                  <Modal.Title className="title">Fonte Real, Red Sebútal</Modal.Title>
                  <p className="modal-text">
                  Almost black in colour. The palate is powerful, offering a delicious mouthful of juicy ripe blackberries, prunes, plums and spices. The finish is impressively long. 15%.
                  </p>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Carousel.Item>
        <Carousel.Item>
          <Modal.Body className='modal-body'>
            <Container>
              <Row>
                <Col xs={6}><img className="fonte-whiteSebutal" src={realWhite}/></Col>
                <Col xs={6}>
                  <img className="vanzeller-logo" src={vanzeller}/>
                  <Modal.Title className="title">Fonte Real, White Setúbal</Modal.Title>
                  <p className="modal-text">
                  A delicate straw-gold colour. Fruity with toasty nuances. The palate is structured, with hints of stone fruit and citrus, combined with a surprising acidity. 12%.
                  </p>
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
