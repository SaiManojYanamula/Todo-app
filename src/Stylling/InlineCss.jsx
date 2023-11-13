import React from 'react'

const InlineCss = () => {
    let obj={
        border:"3px solid red"

    }
  return (
   <>
   <h1 style={{border:"2px solid green"}}>InlineCss</h1>
   <h2 style={obj}>InlineCss2</h2>
   </>
  )
}

export default InlineCss