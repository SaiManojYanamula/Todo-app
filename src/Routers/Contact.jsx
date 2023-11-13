import React from 'react'

import Navbar from './Navbar'
import { Navigate, useNavigate } from 'react-router-dom'

const Contact = () => {
  let navigate=useNavigate()

  let eventhandle=()=>{
    navigate("/about")
  }
  let eventhandle1=()=>{
    navigate("/")
  }
  return (
    <>
   <Navbar/>
   <h1>hello i am contact</h1>
   <button onClick={eventhandle}>go to about</button>
   <button onClick={eventhandle1}>go to home</button>
   </>
  )
}

export default Contact