import React, { useState, Fragment } from 'react'
import { Modal, Carousel, Container, Row, Col } from 'react-bootstrap'
import maisonLeStar from '../brands/France/maison-star/star.png'
import mondon from '../brands/France/maison-star/mondon.png'
import parais from '../brands/France/maison-star/parais.png'
import pericou from '../brands/France/maison-star/pericou.png'
import pinasse from '../brands/France/maison-star/pinasse.png'
import cognac from '../brands/France/cognac.png'
import chassenac from '../brands/France/chassenac.png'

const France = () => {
  const [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  let image = <img className="fade-in star-logo" src={maisonLeStar} alt="bottle"/>
  if (index === 4) image = <img className="fade-in chassenac-logo" src={chassenac} alt="bottle"/>

  return (
    <Fragment>
      <Modal.Header closeButton className="modal-header">{image}</Modal.Header>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Modal.Body className='modal-body'>
            <Container>
              <Row>
                <Col>
                  <Modal.Title className="centered">Château Ballue-Mondon, Bordeaux</Modal.Title>
                </Col>
              </Row>
              <Row>
                <Col xs="4"><img className="fade-in bordeax" src={mondon} alt="bottle"/></Col>
                <Col xs="8">
                  <br/>
                  <p className="modal-text">Presents a deep hue with purple highlights and reveals an expressive bouquet of ripe red fruit and spices. The palate is round, ample and well-structured, with silky tannins. An expressive and harmonious Bordeax, to drink now or in the next 5 years.</p>
                  <p className="modal-text">Ideal with a grilled entrecote, a rack of lamb, pasta in sauce or a wide range of cheese. Serve between 16° and 18°C.</p>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Carousel.Item>
        <Carousel.Item>
          <Modal.Body className='modal-body'>
            <Container>
              <Row>
                <Col>
                  <Modal.Title className="centered">Château Pinasse, Bordeaux</Modal.Title>
                </Col>
              </Row>
              <Row>
                <Col xs="4"><img className="fade-in bordeax" src={pinasse} alt="bottle"/></Col>
                <Col xs="8">
                  <br/>
                  <p><small className="modal-text">Presents a deep red color with purple highlights. It reveals a delicate bouquet of ripe red and black notes with a hint of soft spices. Soft attack on the palate evolving to a supple and silky body. Pleasant and fruity finish</small></p>
                  <p><small className="modal-text">An ideal starter with a roasted Camembert, a crunchy chicken and vegetables or in dessert with an Aquitaine tarte (dark chocolate and rasberries). Serve between 16° and 18°C.</small></p>
                  <p><small>2018 : Silver Medal - Concours de Bruxelles 2019</small></p>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Carousel.Item>
        <Carousel.Item>
          <Modal.Body className='modal-body'>
            <Container>
              <Row>
                <Col>
                  <Modal.Title className="fade-in centered">Château Péricou, Bordeaux Rouge</Modal.Title>
                </Col>
              </Row>
              <Row>
                <Col xs="4"><img className="bordeax" src={pericou} alt="bottle"/></Col>
                <Col xs="8">
                  <br/>
                  <p className="modal-text">Château Péricou is well-balanced with supply tannins and red fruit notes. A very pleasent wine typical of the Bordeax appellation</p>
                  <p className="modal-text">Ideal with grilled red meat, dishes in sauce and a platter of cheese. Serve between 16° and 18°C.</p>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Carousel.Item>
        <Carousel.Item>
          <Modal.Body className='modal-body'>
            <Container>
              <Row>
                <Col>
                  <Modal.Title className="centered">Lou Paraïs, Provence</Modal.Title>
                </Col>
              </Row>
              <Row>
                <Col xs="4"><img className="fade-in bordeax" src={parais} alt="bottle"/></Col>
                <Col xs="8">
                  <br/>
                  <p className="modal-text">Lou Paraïs reveals a limpid salmon color and a great aromatic intensity on the nose (gooseberry). The palate is supple and fruity, making it a delicious wine easy to drink.</p>
                  <p className="modal-text">A perfect accompaniment for grilled meats, quiches and various componsed salads. It will also be appreciate by itself, as an apertif. Serve fresh, between 10° and 13°C.</p>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Carousel.Item>
        <Carousel.Item>
          <Modal.Body className='modal-body'>
            <Container>
              <Row>
                <Col>
                  <Modal.Title className="centered">Cognac De Chassenac, VSOP</Modal.Title>
                </Col>
              </Row>
              <Row>
                <Col xs="4"><img className="fade-in bordeax" src={cognac} alt="bottle"/></Col>
                <Col xs="8">
                  <br/>
                  <p className="modal-text">Cognac de Chassenac, VSOP is made mainly with Ugni Blanc grapes, aged in oak barrels and transformed into Cognac through double distillation.</p>
                  <p className="modal-text">Golden yellow color, this VSOP is both fruity and floral on the nose and on the palate. Best served at 20° to 25° C. on ice, in cocktails or long drinks.</p>
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
