import React from 'react'

const Uncontrolledcomponent = () => {
    let handelesubmit=(e)=>{
        e.preventDefault();

       let Namefeild= document.getElementById("name")
       console.log(Namefeild.value);
       let emailfeild=document.getElementById("email")
       console.log(emailfeild.value);
       let passwordfeild=document.getElementById("password")
       console.log(passwordfeild.value);

    }
  return (
    <form onSubmit={handelesubmit}>
        <label htmlFor="name">name</label>
        <input type="text" id="name" /> <br /><br />

        <label htmlFor="email">email</label>
        <input type="email"  id="email"/> <br /><br />

        <label htmlFor="password">password</label>
        <input type="password" id="password" /> <br /><br />

        <input type="submit" />
    </form>
  )
}

export default Uncontrolledcomponent