import React, { useMemo, useState } from 'react'

const Usememo = () => {
    let[counter1,setcounter1]=useState(0)
    let[counter2,setcounter2]=useState(0)

    let handlecounter1=()=>{
        setcounter1(counter1+1)
    }

    let handlecounter2=()=>{
        setcounter2(counter2+1)
    }
    let isEven=useMemo(()=>{
        let i=0;
        while(i<200000000)
        {
            i++
        }
        return counter1%2==0
    },[counter1])
  return (<>
    <button onClick={handlecounter1}>counter1-{counter1}</button>{isEven?"EVEN":"odd"}
    <br /><br />
    <button onClick={handlecounter2}>counter2{counter2}</button>
    </>
  )
}

export default Usememo