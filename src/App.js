import React, { useState, Fragment } from 'react'
import Generic from './Modals/Generic'
import grape from './images/grape.png'
import logo from './images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faGlassCheers } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const [connection, setConnection] = useState()
  const [show, setShow] = useState(false)
  const handleClose = () => {
    setShow(false)
    setConnection()
  }

  const handleShow = e => {
    setShow(true)
    setConnection(e.target.alt)
  }

  const envelope = <FontAwesomeIcon icon={faEnvelope} />
  // const cheers = <FontAwesomeIcon icon={faGlassCheers} />

  return (
    <Fragment>
      <header className="masthead parallax bg-primary text-dark text-center">
        <div className="container d-flex align-items-center flex-column">
          <br/><br/><br/><br/><br/><br/><br/><br/>
          <img className="logo" src={logo}/>
          <br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
      </header>
      <section className="about parallax page-section bg-dark mb-0" id="about">
        <br/><br/><br/><br/><br/>
        <h6 className="page-section-heading text-center text-uppercase">Our Craft</h6>
        <br/><br/>
        <p className="lead1 centered">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="lead2 centered">
          Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit.
        </p>
        <p className="lead3 centered">
          Lectus nulla at volutpat diam ut. Amet luctus venenatis lectus magna fringilla urna porttitor.
        </p>
        <p className="lead4 centered">
          Viverra orci sagittis eu volutpat odio. Enim lobortis scelerisque fermentum dui faucibus in.
        </p>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <h2 className="page-section-heading text-center text-uppercase">Our Connections</h2>
        <div className="map">
          <img className="grape france hvr-pop" src={grape} alt="France" onClick={handleShow}/>
          <img className="grape portugal hvr-pop" src={grape} alt="Portugal" onClick={handleShow}/>
          <img className="grape italy hvr-pop" src={grape} alt="Italy" onClick={handleShow}/>
          <img className="grape germany hvr-pop" src={grape} alt="Germany" onClick={handleShow}/>
          <img className="grape argentina hvr-pop" src={grape} alt="Argentina" onClick={handleShow}/>
          <img className="grape chile hvr-pop" src={grape} alt="Chile" onClick={handleShow}/>
        </div>
        <br/><br/><br/><br/><br/>
      </section>
      <footer className="footer text-center">
        <h4 className="text-uppercase mb-4">Let&apos;s Connect</h4>
        <a href="mailto:candreae@wscraftconnection.com">
          <i>{envelope} </i>
          <small>hello@wscraftconnection.com</small>
        </a>
      </footer>
      <Generic show={show} handleClose={handleClose} connection={connection}/>
    </Fragment>
  )
}

export default App
