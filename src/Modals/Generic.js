import React from 'react'
import { Germany, Chile, Italy } from './Brands'
import Portugal from './Portugal'
import France from './France'
import Argentina from './Argentina'
import { Modal } from 'react-bootstrap'

const Generic = ({ show, handleClose, connection }) => {
  let brand
  if (connection === 'France') brand = <France/>
  if (connection === 'Italy') brand = <Italy/>
  if (connection === 'Portugal') brand = <Portugal/>
  if (connection === 'Chile') brand = <Chile/>
  if (connection === 'Argentina') brand = <Argentina/>
  if (connection === 'Germany') brand = <Germany/>
  return (
    <Modal centered size="lg" scrollable show={show} onHide={handleClose}>{brand}</Modal>
  )
}

export default Generic
