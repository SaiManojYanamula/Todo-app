import React from 'react'
import { useContext } from 'react'
import { Username } from './GlobalContext'

const ContextChild3 = () => {
    let res= useContext(Username)
    let {name,place,age}=res
  return (
    <div>{name}-{place}-{age}</div>
  )
}

export default ContextChild3