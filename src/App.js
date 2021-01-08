import React, { useState, Fragment } from 'react'
import Generic from './Modals/Generic'
import argentina from './images/countries/argentina.png'
import chile from './images/countries/chile.png'
import portugal from './images/countries/portugal.png'
import france from './images/countries/france.png'
import italy from './images/countries/italy.png'
import germany from './images/countries/germany.png'
import logo from './images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const [connection, setConnection] = useState()
  const [show, setShow] = useState(false)

  const handleClose = () => {
    setConnection(); setShow(false)
  }

  const handleShow = e => {
    setConnection(e.target.alt); setShow(true)
  }

  const handleShowList = e => {
    setConnection(e.target.value)
    setShow(true)
  }

  const envelope = <FontAwesomeIcon icon={faEnvelope} />

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
          <li value="1" onClick={handleShowList}>France</li>
          <li value="2" onClick={handleShowList}>Portugal</li>
          <li value="3" onClick={handleShowList}>Italy</li>
          <li value="4" onClick={handleShowList}>Germany</li>
          <li value="5" onClick={handleShowList}>Argentina</li>
          <li value="6" onClick={handleShowList}>Chile</li>
        </ul>
        <div className="map">
          <img className="grape france" src={france} alt="1" onClick={handleShow}/>
          <img className="grape portugal" src={portugal} alt="2" onClick={handleShow}/>
          <img className="grape italy" src={italy} alt="3" onClick={handleShow}/>
          <img className="grape germany" src={germany} alt="4" onClick={handleShow}/>
          <img className="grape argentina" src={argentina} alt="5" onClick={handleShow}/>
          <img className="grape chile" src={chile} alt="6" onClick={handleShow}/>
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
