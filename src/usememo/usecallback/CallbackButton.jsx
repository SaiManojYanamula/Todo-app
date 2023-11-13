import React from 'react'

const CallbackButton = ({send,children}) => {
    console.log(`${children}`)
  return (
    <div>
        <button onClick={send}>{children}</button>
    </div>

  )
}

export default CallbackButton