import React, { useState } from 'react'

const Controlledcomponent1 =()=>{
    const[state,setState]=useState({
        name:"",
        email:"",
        password:"",
        fb:""
    })
    let{name,email,password,fb}=state
    const handelesubmit=(e)=>{
        e.preventDefault()
        console.log(name,email,password,fb);
    }
    let f1=(e)=>{
        setState({...state,name:e.target.value})
    }
    let f2=(e)=>{
        setState({...state,email:e.target.value})
    }
    let f3=(e)=>{
        setState({...state,password:e.target.value})
    }
    let f4=(e)=>{
        setState({...state,fb:e.target.value})
    }

  return (
    <form action=""  onSubmit={handelesubmit}>
       <label htmlFor="" >name</label>
       <input type="text" value={name} onChange={f1}/><br /><br />
       <label htmlFor="">email</label>
       <input type="email"  value={email} onChange={f2}/><br /><br />
       <label htmlFor="" >password</label>
       <input type="password" value={password} onChange={f3}/><br /><br />
       <textarea value={fb} cols="30" rows="10" onChange={f4}></textarea><br /><br />
       <input type="submit"  value='submit'/>

   
    </form>
  )
}

export default Controlledcomponent1