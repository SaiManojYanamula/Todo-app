import React, { useState } from 'react'

const Darkmode = () => {
   let [Darkmode,setDarkmode]= useState(true)
   let handleChange=()=>{
    setDarkmode(!Darkmode)
   }
  return (
    <>
    <button onClick={handleChange}>{Darkmode==true?"darkmode":"lightmode"}</button>

    </>
  )
}

export default Darkmode