import React from 'react'

const CallbackCounter = ({text,count}) => {
    console.log(`${text}`)
  return (
    <div>{text} is { count}</div>
  )
}

export default CallbackCounter