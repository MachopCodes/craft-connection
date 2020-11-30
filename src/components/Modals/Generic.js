import React from 'react'
import { California, France } from './Brands'
import { Modal } from 'react-bootstrap'

const Generic = ({ show, handleClose, connection }) => {
  let brand
  if (connection === 'California') brand = <California/>
  if (connection === 'France') brand = <France/>
  return (
    <Modal centered show={show} onHide={handleClose}>{brand}</Modal>
  )
}

export default Generic
