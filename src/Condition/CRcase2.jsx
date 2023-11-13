import React, { useState } from 'react'

const CRcase2 = () => {
    let [state,setState]=useState(false)
    let handelechange=()=>{
        setState(!state)
    }
    
  return (
  <>{
   state==true?<h1>logged as a manoj</h1>:<h1>logged as in guest</h1> 
  }
  <button onClick={handelechange}></button>
  </>
   
  )
}

export default CRcase2