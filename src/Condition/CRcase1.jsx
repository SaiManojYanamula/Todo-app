import React from 'react'
import { useState } from 'react'

const CRcase1 = () => {
    let[state,setState]=useState(true)
    let handlechange=()=>{
        setState(!state)
    }
    if(state==true){
  return (
    <>
    <h1>looged in as manoj</h1>
    <button onClick={handlechange}>click</button>
    </>
  )
    }

else{
    return(
        <>
        <h1>logged is guest</h1>
        <button onClick={handlechange}>click</button>
        </>
    )
}
}

export default CRcase1