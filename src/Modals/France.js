import React, { useState, Fragment } from 'react'
import { Modal, Carousel, Container, Row, Col } from 'react-bootstrap'
import maisonLeStar from '../brands/France/maison-star/star.png'
import mondon from '../brands/France/maison-star/mondon.png'
import parais from '../brands/France/maison-star/parais.png'
import pericou from '../brands/France/maison-star/pericou.png'
import pinasse from '../brands/France/maison-star/pinasse.png'
import cognac from '../brands/France/cognac.png'
import chassenac from '../brands/France/chassenac.png'
// import silver from '../brands/France/silver.png'

const France = () => {
  const [index, setIndex] = useState(0)
  // const [bottle, setBottle] = useState()
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  let logo = <img className="fade-in star-logo" src={maisonLeStar}/>
  if (index === 4) logo = <img className="fade-in chassenac-logo" src={chassenac}/>
  return (
    <Fragment>
      <Modal.Header closeButton>{logo}</Modal.Header>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={false}
        fade={true}>
        <Carousel.Item className='fade-in'>
          <Modal.Body className='modal-body'>
            <Col xs="6" lg="4">
              <img className="wine mondon fade-in" src={mondon}/>
            </Col>
            <Col xs="6" lg="8">
              <Modal.Title className="title">Château Ballue-Mondon, Bordeaux</Modal.Title>
              <p className="modal-text">
              Presents a deep hue with purple highlights and reveals an expressive bouquet of ripe red fruit and spices. The palate is round, ample and well-structured, with silky tannins. An expressive and harmonious Bordeax, to drink now or in the next 5 years. Ideal with a grilled entrecote, a rack of lamb, pasta in sauce or a wide range of cheese.
              </p>
            </Col>
          </Modal.Body>
        </Carousel.Item>
        <Carousel.Item>
          <Modal.Body className='modal-body'>
            <Col xs="6" lg="4">
              <img className="wine pinasse fade-in" src={pinasse}/>
              { /* <img className="wine silver fade-in" src={silver}/> */ }
            </Col>
            <Col xs="6" lg="8">
              <Modal.Title className="title">Château Pinasse, Bordeaux</Modal.Title>
              <p className="modal-text">
              Presents a deep red color with purple highlights. It reveals a delicate bouquet of ripe red and black notes with a hint of soft spices. Soft attack on the palate evolving to a supple and silky body. Pleasant and fruity finish. An ideal starter with a roasted Camembert, a crunchy chicken and vegetables or in dessert with an Aquitaine tarte (dark chocolate and rasberries).
              </p>
            </Col>
          </Modal.Body>
        </Carousel.Item>
        <Carousel.Item>
          <Modal.Body className='modal-body'>
            <Container>
              <Row>
                <Col xs="6" lg="4">
                  <img className="wine pericou fade-in" src={pericou}/>
                </Col>
                <Col xs="6" lg="8">
                  <Modal.Title className="title">Château Péricou, Bordeaux Rouge</Modal.Title>
                  <p className="modal-text">
                  Château Péricou is well-balanced with supply tannins and red fruit notes. A very pleasent wine typical of the Bordeax appellation. Ideal with grilled red meat, dishes in sauce and a platter of cheese.
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
                <Col xs="6" lg="4">
                  <img className="wine parais fade-in" src={parais}/>
                </Col>
                <Col xs="6" lg="8">
                  <Modal.Title className="title">Lou Paraïs, Provence</Modal.Title>
                  <p className="modal-text">
                  Lou Paraïs reveals a limpid salmon color and a great aromatic intensity on the nose (gooseberry). The palate is supple and fruity, making it a delicious wine easy to drink. A perfect accompaniment for grilled meats, quiches and various componsed salads. It will also be appreciate by itself, as an apertif.
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
                <Col xs="6" lg="4">
                  <img className="wine cognac fade-in" src={cognac}/>
                </Col>
                <Col xs="6" lg="8">
                  <p className="modal-text">
                  Cognac de Chassenac, VSOP is made mainly with Ugni Blanc grapes, aged in oak barrels and transformed into Cognac through double distillation.   Golden yellow color, this VSOP is both fruity and floral on the nose and on the palate. Best served at 20° to 25° C. on ice, in cocktails or long drinks.
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

export default France
