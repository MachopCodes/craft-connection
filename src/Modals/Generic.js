import React from 'react'
import { Germany, Chile, Italy } from './Brands'
import Portugal from './Portugal'
import France from './France'
import Argentina from './Argentina'
import { Modal } from 'react-bootstrap'

const Generic = ({ show, handleClose, connection }) => {
  console.log('the connection is: ', connection)
  let brand
  if (connection === '1') brand = <France/>
  if (connection === '2') brand = <Portugal/>
  if (connection === '3') brand = <Italy/>
  if (connection === '4') brand = <Germany/>
  if (connection === '5') brand = <Argentina/>
  if (connection === '6') brand = <Chile/>
  return (
    <Modal centered size="lg" scrollable show={show} onHide={handleClose}>{brand}</Modal>
  )
}

export default Generic
