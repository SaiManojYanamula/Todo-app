import React from 'react'
import { createPortal } from 'react-dom'

const PortalsTask = ({func}) => {
  return (
    createPortal(
        <div id='main'>
            <div id='sub'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iure cupiditate quas! Sequi id aspernatur praesentium cum commodi, quis placeat magnam illum! Dolor rem odit itaque qui asperiores. Asperiores, perspiciatis!</p>
                <button onClick={func}>close</button>
            </div>
        </div>,document.getElementById("modal")
    )
  )
}

export default PortalsTask