import React, { Component, Fragment } from 'react'
import Home from './components/Home'
import Navbar from 'react-bootstrap/Navbar'

class App extends Component {
  render () {
    return (
      <Fragment>
        <Navbar bg="dark" variant="dark" expand="md">
          <Navbar.Brand>W&S Craft Connection</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
        <Home/>
      </Fragment>
    )
  }
}

export default App
