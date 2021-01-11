import React from 'react'
import { Modal } from 'react-bootstrap'

const MobileCard = () => {
  <Container>
    <Row>
      <Col xs={4}><img className="bodega-cab" src={cab}/></Col>
      <Col xs={8}>
        <img className="bodega-logo" src={bodega}/>
        <Modal.Title className="title">Old Vines, Cabernet Sauvignon</Modal.Title>
        <p className="modal-text">
        A wine with an intense ruby red color. Concentrated juicy berry fruit aromas that lead into flavors of blackberry and red currant fruit. Well-balanced, smooth tannins. Hints of vanilla and cocoa appear throughout the finish.
        </p>
      </Col>
    </Row>
  </Container>  
}
