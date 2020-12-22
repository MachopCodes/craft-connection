import React, { useState, Fragment } from 'react'
import Generic from './Modals/Generic'
import grape from './images/grape.png'
import france from './images/france.png'
import italy from './images/italy.png'
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
      <section className="about parallax page-section bg-dark mb-0" id="about">
        <div className="container d-flex align-items-center flex-column">
          <img className="craft-connections fade-in" src={logo}/>
        </div>
        <h6 className="page-section-heading text-uppercase">Our Craft</h6>
        <div className="leads centered">
          <p className="lead1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="lead2">
            Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit.
          </p>
          <p className="lead3">
            Lectus nulla at volutpat diam ut. Amet luctus venenatis lectus magna fringilla urna porttitor.
          </p>
          <p className="lead4">
            Viverra orci sagittis eu volutpat odio. Enim lobortis scelerisque fermentum dui faucibus in.
          </p>
        </div>
        <h2 className="page-section-heading text-uppercase">Our Connections</h2>
        <ul className="mobile">
          <li>France</li>
          <li>Portugal</li>
          <li>Italy</li>
          <li>Germany</li>
          <li>Argentina</li>
          <li>Chile</li>
        </ul>
        <div className="map">
          <img className="grape france hvr-pop" src={france} alt="France" onClick={handleShow}/>
          <img className="grape portugal hvr-pop" src={grape} alt="Portugal" onClick={handleShow}/>
          <img className="grape italy hvr-pop" src={italy} alt="Italy" onClick={handleShow}/>
          <img className="grape germany hvr-pop" src={grape} alt="Germany" onClick={handleShow}/>
          <img className="grape argentina hvr-pop" src={grape} alt="Argentina" onClick={handleShow}/>
          <img className="grape chile hvr-pop" src={grape} alt="Chile" onClick={handleShow}/>
        </div>
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
