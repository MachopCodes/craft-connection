import React, { Component, Fragment } from 'react'
import Header from './components/Header'
import Home from './components/Home'

class App extends Component {
  render () {
    return (
      <Fragment>
        <Header/>
        <main><Home/></main>
      </Fragment>
    )
  }
}

export default App
