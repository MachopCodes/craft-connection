import React, { Fragment } from 'react'
// import { Germany, Chile, Italy } from './Brands'
import Portugal from './Portugal'
import France from './France'
import Argentina from './Argentina'
import { Modal } from 'react-bootstrap'

const Generic = ({ show, handleClose, connection }) => {
  let brand
  if (connection === '1') brand = <France/>
  if (connection === '2') brand = <Portugal/>
  // if (connection === '3') brand = <Italy/>
  // if (connection === '4') brand = <Germany/>
  if (connection === '5') brand = <Argentina/>
  // if (connection === '6') brand = <Chile/>
  if (brand) {
    return (
      <Modal
        className="brand-modal" centered size="lg"
        show={show} onHide={handleClose}>
        {brand}
      </Modal>
    )
  } else {
    return (<Fragment/>)
  }
}
export default Generic
