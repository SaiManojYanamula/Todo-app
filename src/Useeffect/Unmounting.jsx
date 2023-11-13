import React, { useEffect } from 'react'

const Unmounting = () => {
    useEffect(()=>{
        return()=>{
        console.log("hello kavya")}
    })
  return (
    <div>Unmounting</div>
  )
}

export default Unmounting