import React from 'react'
import { Container, Card, Carousel } from 'react-bootstrap'

import maisonLeStar from '../brands/France/maison-star/star.png'
import mondon from '../brands/France/maison-star/mondon.png'
import parais from '../brands/France/maison-star/parais.png'
import pericou from '../brands/France/maison-star/pericou.png'
import pinasse from '../brands/France/maison-star/pinasse.png'
import cognac from '../brands/France/cognac.png'
import chassenac from '../brands/France/chassenac.png'

import vanzeller from '../brands/portugal/vanzeller.png'
import douro from '../brands/portugal/graca28/douro.png'
import sebutal from '../brands/portugal/graca28/sebutal.png'
import realBlend from '../brands/portugal/fonte-real/blend.png'
import realSebutal from '../brands/portugal/fonte-real/sebutal.png'
import realWhite from '../brands/portugal/fonte-real/white.png'

import bodega from '../brands/argentina/bodega.png'
import cab from '../brands/argentina/cab.png'
import malbec from '../brands/argentina/malbec.png'

const Mobile = () => {
  return (
    <Container className="mobile-container">
      <br/><br/><br/><br/>
      <h1 className="page-section-heading">France</h1>
      <Card className="mobile-card">
        <Carousel interval={false}>
          <Carousel.Item>
            <img className="mx-auto mobile-star-logo" src={maisonLeStar}/>
            <h6 className="mobile-title"> Château Ballue-Mondon, Bordeaux</h6>
            <div className="mobile-image">
              <img className="mondon-mobile" src={mondon}/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img className="mx-auto mobile-star-logo" src={maisonLeStar}/>
            <h6 className="mobile-title">Château Pinasse, Bordeaux</h6>
            <div className="mobile-image">
              <img className="pinasse-mobile" src={pinasse}/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img className="mx-auto mobile-star-logo" src={maisonLeStar}/>
            <h6 className="mobile-title">Château Péricou, Bordeaux Rouge</h6>
            <div className="mobile-image">
              <img className="pericou-mobile" src={pericou}/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img className="mx-auto mobile-star-logo" src={maisonLeStar}/>
            <h6 className="mobile-title">Lou Paraïs, Provence</h6>
            <div className="mobile-image">
              <img className="parais-mobile" src={parais}/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img className="mobile-chassenac-logo" src={chassenac}/>
            <div className="mobile-image">
              <img className="cognac-mobile" src={cognac}/>
            </div>
          </Carousel.Item>
        </Carousel>
      </Card>
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <h1 className="page-section-heading">Portugal</h1>
      <Card className="mobile-card">
        <Carousel>
          <Carousel.Item>
            <img className="vanzeller-mobile" src={vanzeller}/>
            <h6 className="mobile-title">Graça 28, Douro DOC</h6>
            <div className="mobile-image">
              <img className="douro-mobile" src={douro}/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img className="vanzeller-mobile" src={vanzeller}/>
            <h6 className="mobile-title">Graça 28, Red Blend Sebútal</h6>
            <div className="mobile-image">
              <img className="sebutal-mobile" src={sebutal}/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img className="vanzeller-mobile" src={vanzeller}/>
            <h6 className="mobile-title">Fonte Real, Red Blend</h6>
            <div className="mobile-image">
              <img className="fonte-redBlend-mobile" src={realBlend}/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img className="vanzeller-mobile" src={vanzeller}/>
            <h6 className="mobile-title">Fonte Real, Fonte Real, Red Sebútal</h6>
            <div className="mobile-image">
              <img className="fonte-redSebutal-mobile" src={realSebutal}/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img className="vanzeller-mobile" src={vanzeller}/>
            <h6 className="mobile-title">Fonte Real, Fonte Real, White Sebútal</h6>
            <div className="mobile-image">
              <img className="fonte-whiteSebutal-mobile" src={realWhite}/>
            </div>
          </Carousel.Item>
        </Carousel>
      </Card>
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <h1 className="page-section-heading">Argentina</h1>
      <Card className="mobile-card">
        <Carousel>
          <Carousel.Item>
            <img className="bodega-mobile" src={bodega}/>
            <h6 className="mobile-title">Old Vines, Cabernet</h6>
            <div className="mobile-image">
              <img className="bodega-cab-mobile" src={cab}/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img className="bodega-mobile" src={bodega}/>
            <h6 className="mobile-title">Old Vines, Malbec</h6>
            <div className="mobile-image">
              <img className="bodega-malb-mobile" src={malbec}/>
            </div>
          </Carousel.Item>
        </Carousel>
      </Card>
    </Container>
  )
}

export default Mobile
