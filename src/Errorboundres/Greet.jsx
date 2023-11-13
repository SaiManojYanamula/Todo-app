import React from 'react'

const Greet = ({name}) => {

    if(name=="nishitha"){
        throw new Error("vellu nishitha intiki")
    }
  return (
    <div>Greet{name}</div>
  )
}

export default Greet