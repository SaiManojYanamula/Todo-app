import React, { useState } from 'react'
import CallbackButton from './CallbackButton'
import CallbackCounter from './CallbackCounter'
import Title from './Title'

const CallbackParent = () => {
    let[age,setage]=useState(20)
    let[salary,setsalary]=useState(20000)

    let agehandlechange=()=>{
        setage(age+1)
    }
    let salaryhandlechange=()=>{
        setsalary(salary+4000)
    }

  return (
    <>
    <Title/>
    <CallbackCounter text="age" count={age}/>
    <CallbackButton send={agehandlechange}>age</CallbackButton>

    <CallbackCounter text="salary" count={salary} />
    <CallbackButton send={salaryhandlechange}>salary</CallbackButton>
    </>
  )
}

export default CallbackParent