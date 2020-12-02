import React, { useState, Fragment } from 'react'
import Generic from './Modals/Generic'
import grape from '../images/grape.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faGlassCheers } from '@fortawesome/free-solid-svg-icons'

const Home = props => {
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
  const cheers = <FontAwesomeIcon icon={faGlassCheers} />

  return (
    <Fragment>
      <header className="masthead parallax bg-primary text-dark text-center">
        <div className="container d-flex align-items-center flex-column">
          <br/><br/><br/><br/><br/><br/><br/><br/>
          <h1 className="masthead-heading text-uppercase mb-0">W&S Craft</h1>
          <h1 className="masthead-heading text-uppercase mb-0">Connections</h1>
          <br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
      </header>
      <section className="about parallax page-section bg-dark mb-0" id="about">
        <h6 className="page-section-heading text-center text-uppercase">Our Craft</h6>
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Tellus id interdum velit laoreet id donec ultrices. Amet facilisis magna etiam tempor orci eu lobortis. Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Tristique magna sit amet purus gravida quis blandit. Bibendum ut tristique et egestas quis. Quis vel eros donec ac odio tempor. Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Dolor purus non enim praesent elementum. Eu turpis egestas pretium aenean pharetra magna ac placerat. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Pellentesque elit eget gravida cum sociis. Aliquet lectus proin nibh nisl condimentum.
        </p>
        <p className="lead">
          Lectus nulla at volutpat diam ut. Amet luctus venenatis lectus magna fringilla urna porttitor. Viverra orci sagittis eu volutpat odio. Enim lobortis scelerisque fermentum dui faucibus in. Ut diam quam nulla porttitor massa id. Urna et pharetra pharetra massa massa ultricies mi quis. Dui id ornare arcu odio. Eget mi proin sed libero enim. Aenean et tortor at risus viverra. Ornare suspendisse sed nisi lacus. Cras fermentum odio eu feugiat pretium nibh ipsum. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Nunc consequat interdum varius sit amet mattis vulputate. Tempor orci eu lobortis elementum nibh.
        </p>
        <br/>
      </section>
      <section className="connections page-section about-img parallax bg-dark mb-0" id="about">
        <br/><br/><br/><br/><br/>
        <h2 className="page-section-heading text-center text-uppercase">Our Connections</h2>
        <div className="map">
          <img className="grape california hvr-pop" src={grape} alt="California" onClick={handleShow}/>
          <img className="grape france hvr-pop" src={grape} alt="France" onClick={handleShow}/>
          <img className="grape italy hvr-pop" src={grape} alt="Italy" onClick={handleShow}/>
        </div>
        <br/><br/><br/><br/><br/>
      </section>
      <footer className="footer text-center">
        <h4 className="text-uppercase mb-4">Let&apos;s Connect {cheers}</h4>
        <a href="mailto:candreae@wscraftconnection.com">
          <i>{envelope} </i>
          <small>hello@wscraftconnection.com</small>
        </a>
      </footer>
      <div className="copyright py-4 text-center text-white">
        <div className="container"><small>Copyright © W&SCraftConnection2020</small></div>
      </div>
      <Generic show={show} handleClose={handleClose} connection={connection}/>
    </Fragment>
  )
}

export default Home
