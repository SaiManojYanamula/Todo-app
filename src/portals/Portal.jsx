import React from 'react'
import { createPortal } from 'react-dom'

const Portal = () => {
  return (
    createPortal(<h1>i am inside a portal</h1>,document.getElementById("portal"))
    
  )
}

export default Portal