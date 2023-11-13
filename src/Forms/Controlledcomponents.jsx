import React, { useState } from 'react'

const Controlledcomponents = () => {
    let [state,setState]=useState({name:"",email:"",password:"",skills:"angular",textarea:"",gender:""})
    let [place,setplace]=useState([])
    let {name,email,password,skills,textarea,gender}=state
    let f1=(e)=>{
        setState({...state,name:e.target.value})
    }
    let f2=(e)=>{
        setState({...state,password:e.target.value})
    }
    let f3=(e)=>{
        setState({...state,email:e.target.value})
    }
    let f4=(e)=>{
      setState({...state,skills:e.target.value})
    }
    let f5=(e)=>{
      setState({...state,textarea:e.target.value})
    }
    let f6=(e)=>{
      setState({...state,gender:e.target.value})
    }
    let f7=(e)=>{
      setplace([...place,e.target.value])
    }

    let eventhandeler=(e)=>{
  e.preventDefault()
  console.log(name,email,password,skills,textarea,gender,place);
    }

  return (
    <>
    <form onSubmit={eventhandeler}>
        <label htmlFor="name">Name:</label>
        <input type="text"  value={name} onChange={f1}/><br /><br />
        <label htmlFor="password">password:</label>
        <input type="password" value={password} onChange={f2}/><br /><br />
        <label htmlFor="email">email:</label>
        <input type="email" value={email} onChange={f3}/><br /><br />

        <select name="skills" value={skills} onChange={f4}>
          <option value="angular">angular</option>
          <option value="java script">java scaript</option>
          <option value="html">html</option>
          <option value="css">css</option>
        </select><br /><br />

         <textarea name="" id="" cols="30" rows="10" value={textarea} onChange={f5}>

         </textarea><br /><br />
        <br /><br />
        <div value={gender} onChange={f6}>
        <input type="radio" name="gender"value="male"/>male
         <input type="radio" name='gender' value="femele"/>female

        </div><br /><br />

        <div value={place}onChange={f7}>
        <input type="checkbox" name="" id="" value="hyderbad" />hyderbad
        <input type="checkbox" value="telangana"/>telangana
        <input type="checkbox" value="khammam"/>khammamm
        </div> <br /><br />


        <input type="submit" value="Submit"/>
    

    </form>
    </>
  )
}

export default Controlledcomponents