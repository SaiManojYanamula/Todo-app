import React from 'react'

const Controlledforms = () => {
    let name=useref();
    let email=useref();
    let password=useref();
    let handelesubmit=(e)=>{
        e.preventdefault()
        let Namefeild=name.current.value;
        console.log(Namefeild.value);

        let emailfeild=name.current.value;
        console.log(mailfeild.value);
      
        let passwordfeild=name.current.value;
        console.log(passwordfeild.value);

    }
  return (
    <form onSubmit={handelesubmit}>
        <label htmlFor="name">name</label>
        <input type="text" id="name" ref={name}/> <br /><br />

        <label htmlFor="email">email</label>
        <input type="email"  id="email" ref={email}/> <br /><br />

        <label htmlFor="password">password</label>
        <input type="password" id="password" ref={password}/> <br /><br />

        <input type="submit" />
    </form>
  )
}

export default Controlledforms