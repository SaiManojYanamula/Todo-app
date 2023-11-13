import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'

const AAxios = () => {
    let [state,setState]=useState(null)

    useEffect(()=>{
        try {
            let q= async()=>{
                let {data}= await axios.get("https:api.github.com/users")
           setState(data);
                
            }
            q()
            
            
        } catch (error) {
            console.log(error)  
        }
       
    })
  return (
    <div>
        {
            state==null?"loading":state.map((val)=>{
                return(
                    <Fragment>

                        <h1>{val.id}</h1>
                        <h1>{}</h1>
                    </Fragment>
                )
            })
        }
    </div>
  )
}

export default AAxios