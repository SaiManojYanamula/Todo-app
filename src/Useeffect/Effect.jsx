import React, { useEffect, useState } from 'react'
import Unmounting from './Unmounting'

const Effect = () => {
    let[state,setState]=useState(false)
    let[count,setcount]=useState(0)
    

    // useEffect(()=>{
    //     console.log("acting like render mounting and updateing phase");

    // })

    useEffect(()=>{
        console.log("this is nishitha")
    },[count]
    )
    const change1=()=>{
        setcount(count+1)
    }
    const change=()=>{
     setState(!state)
    }
  return (
    <div>
        {state==false?<Unmounting/>:""}
        <h1>{count}</h1>
        <button onClick={change}>click me</button>
        <button onClick={change1}>clickme</button>
    </div>
  )
}

export default Effect