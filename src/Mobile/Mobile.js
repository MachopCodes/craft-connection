import React from 'react'
import { Container, Col, Card, Carousel } from 'react-bootstrap'

import maisonLeStar from '../brands/France/maison-star/star.png'
import mondon from '../brands/France/maison-star/mondon.png'
import parais from '../brands/France/maison-star/parais.png'
import pericou from '../brands/France/maison-star/pericou.png'
import pinasse from '../brands/France/maison-star/pinasse.png'
import cognac from '../brands/France/cognac.png'
import chassenac from '../brands/France/chassenac.png'
import silver from '../brands/France/silver.png'

import vanzeller from '../brands/portugal/vanzeller.png'
import douro from '../brands/portugal/graca28/douro.jpg'
import sebutal from '../brands/portugal/graca28/sebutal.jpg'
import realBlend from '../brands/portugal/fonte-real/blend.png'
import realSebutal from '../brands/portugal/fonte-real/sebutal.png'
import realWhite from '../brands/portugal/fonte-real/white.png'

import bodega from '../brands/argentina/bodega.png'
import cab from '../brands/argentina/cab.png'
import malbec from '../brands/argentina/malbec.png'

const Mobile = () => {
  const maison = <img className="mx-auto mobile-star-logo" src={maisonLeStar}/>
  const chaus = <img className="chassenac-logo" src={chassenac}/>
  return (
    <Container className="mobile-container">
      <br/><br/><br/><br/>
      <h1 className="page-section-heading">France</h1>
      <br/><br/>
      <Card className="mobile-card">
        <Carousel>
          <Carousel.Item>
            <Col>
              {maison}
              <h6 className="mobile-title"> Château Ballue-Mondon, Bordeaux</h6>
            </Col>
            <Col>
              <img className="mobile-image wine mondon-mobile" src={mondon}/>
            </Col>
          </Carousel.Item>
          <Carousel.Item>
            <Col>
              {maison}
              <h6 className="mobile-title">Château Pinasse, Bordeaux</h6>
            </Col>
            <Col>
              <img className="mobile-image wine pinasse-mobile" src={pinasse}/>
              <img className="mobile-image silver-mobile" src={silver}/>
            </Col>
          </Carousel.Item>
          <Carousel.Item>
            <Col>
              {maison}
              <h6 className="mobile-title">Château Péricou, Bordeaux Rouge</h6>
            </Col>
            <Col>
              <img className="mobile-image wine pericou-mobile" src={pericou}/>
            </Col>
          </Carousel.Item>
          <Carousel.Item>
            <Col>
              {maison}
              <h6 className="mobile-title">Lou Paraïs, Provence</h6>
            </Col>
            <Col>
              <img className="mobile-image wine parais-mobile" src={parais}/>
            </Col>
          </Carousel.Item>
          <Carousel.Item>
            <Col>
              {chaus}
            </Col>
            <Col>
              <img className="mobile-image wine cognac-mobile" src={cognac}/>
            </Col>
          </Carousel.Item>
        </Carousel>
      </Card>
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <h1 className="page-section-heading">Portugal</h1>
      <br/><br/>
      <Card className="mobile-card">
        <Carousel>
          <Carousel.Item>
            <Col>
              <img className="vanzeller-mobile" src={vanzeller}/>
              <h6 className="mobile-title">Graça 28, Douro DOC</h6>
            </Col>
            <Col>
              <img className="mobile-image wine douro" src={douro}/>
            </Col>
          </Carousel.Item>
          <Carousel.Item>
            <Col>
              <img className="vanzeller-mobile" src={vanzeller}/>
              <h6 className="mobile-title">Graça 28, Red Blend Sebútal</h6>
            </Col>
            <Col>
              <img className="mobile-image wine sebutal-mobile" src={sebutal}/>
            </Col>
          </Carousel.Item>
          <Carousel.Item>
            <Col>
              <img className="vanzeller-mobile" src={vanzeller}/>
              <h6 className="mobile-title">Fonte Real, Red Blend</h6>
            </Col>
            <Col>
              <img className="mobile-image wine fonte-redBlend-mobile" src={realBlend}/>
            </Col>
          </Carousel.Item>
          <Carousel.Item>
            <Col>
              <img className="vanzeller-mobile" src={vanzeller}/>
              <h6 className="mobile-title">Fonte Real, Fonte Real, Red Sebútal</h6>
            </Col>
            <Col>
              <img className="mobile-image wine fonte-redSebutal-mobile" src={realSebutal}/>
            </Col>
          </Carousel.Item>
          <Carousel.Item>
            <Col>
              <img className="vanzeller-mobile" src={vanzeller}/>
              <h6 className="mobile-title">Fonte Real, Fonte Real, White Sebútal</h6>
            </Col>
            <Col>
              <img className="mobile-image wine fonte-whiteSebutal-mobile" src={realWhite}/>
            </Col>
          </Carousel.Item>
        </Carousel>
      </Card>
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <h1 className="page-section-heading">Argentina</h1>
      <br/><br/>
      <Card className="mobile-card">
        <Carousel>
          <Carousel.Item>
            <Col>
              <img className="bodega-logo" src={bodega}/>
            </Col>
            <Col>
              <h6 className="mobile-title">Old Vines, Cabernet</h6>
              <img className="wine bodega-cab-mobile" src={cab}/>
            </Col>
          </Carousel.Item>
          <Carousel.Item>
            <Col>
              <img className="bodega-logo" src={bodega}/>
            </Col>
            <Col>
              <h6 className="mobile-title">Old Vines, Malbec</h6>
              <img className="wine bodega-malb-mobile" src={malbec}/>
            </Col>
          </Carousel.Item>
        </Carousel>
      </Card>
    </Container>
  )
}

export default Mobile
