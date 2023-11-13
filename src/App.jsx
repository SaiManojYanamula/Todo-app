// const App =()=>{
//     return<h1>Heading</h1>
// }

// export default App;

//  .....class based component 
// import React from "react";
// class App extends React.Component{
//     render(){
//         return <h1>i am class based component</h1>
//     }

// }
// export default App

//......function based component
// import React from "react";
// const App=()=>{
//     return <h1>i am function based component</h1>
// }
// export default App


// wrapping elemts in single unit
// import React from "react";
// const App=()=>{
//     return (
//         <div>
//         <div>
//     <h1>jsx</h1>
//     <p>java script and xml or javascript extention</p>
//     </div>
//     <span>javascript extention</span>
//     </div>
//     )
// }
// export default App

// fragament <> </>
// import React from "react";
// const App=()=>{
//     return(
//         <React.Fragment>
//             <h1>hello</h1>
//             <p>hello manoj ela unnav ra</p>
//             <span>miss you ra manoj😜😂😂😊🤣</span>
//         </React.Fragment>
//     )
// }
// export default App
// expression
// import React from "react";


// const App=()=>{
//     const obj={
//         name:"manoj"
//     }
//     let {
//         name
//     }=obj
//     return(
//         <>
//         <h1>hello manoj{name}</h1>
//         <h2>hai{obj.name}</h2>
//         </>
//     )
// }
// export default App



// hooks
// import React,{useState} from "react";
// const App=()=>{
//     let[state,setState]=useState(0)
//     console.log(state)


//     const handleincrement=()=>{
//         setState(state+1);
//     }

    
    
//     const handledecrement=()=>{
//         setState(state-1);
//     }

//    const handlereset=()=>{
//     setState(0);
//    }
   

//     return (
//     <>
//     <h1>{state}</h1>
    
//     <button onClick={handleincrement}>increment</button>
//     <button onClick={handledecrement}>decrement</button>
//     <button onClick={handlereset}>reset</button>
//     </>)
//     }


// export default App



//props
// import React  from "react";
// import Child from "./Child";
// const App=()=>{
 
//     return(
//         <>
//         <h1> i am parent component</h1>
//         <Child>i am child</Child>
//         </>
//     )
// }
// export default App

//defult prpos

// import React  from "react";
// import Child from "./Child";
// const App=()=>{
 
//     return(
//         <>
//         <h1> i am parent component</h1>
//         <Child name="manoj"/>
//         </>
//     )
// }
// export default App

// import React from 'react'
// import ContextChild1 from './Context/ContextChild1'
// import { Username } from './Context/GlobalContext'

// const App = () => {
//   return (
//     <div>
//       <Username.Provider value="Manoj">
//       <ContextChild1/>
//       </Username.Provider>
//     </div>
//   )
// }

// export default App

//multiple values 
// import React from 'react'
// import ContextChild1 from './Context/ContextChild1'
// import { Username } from './Context/GlobalContext'

// const App = () => {
//   return (
//     <div>
//       <Username.Provider value={{name:"manoj",place:"hyd",age:22}}>
//       <ContextChild1/>
//       </Username.Provider>
//     </div>
//   )
// }

// export default App 

//by using condinatinal statement
// import React from 'react'
// import CRcase1 from './Condition/CRcase1'

// function App() {
//   return (
//    <>
//    <CRcase1/>
//     </>
//   )
// }

// export default App


// by using ternary operator
// import React from 'react'
// import CRcase2 from './Condition/CRcase1'

// function App() {
//   return (
//    <>
//    <CRcase2/>
//     </>
//   )
// }

// export default App

// import React from 'react'
// import InlineCss from './Stylling/InlineCss'
// import Modulecss from './Stylling/Modulecss'

// const App = () => {
//   return (
//     <>
//     {/* <InlineCss/> */}
//   <Modulecss/>
  
//     </>
//   )
// }

// export default App


// trail
// import React from "react";
// import Assi from "./Assignment/Assi";
// import "./Assignment/Assigcss.css"


// const App = () => {
//   return (
//    <Assi/>
//   )
// }

// export default App
// forms uncontroll
// import React from 'react'
// import Uncontrolledcomponent from './Forms/Uncontrolledcomponent'

// const App = () => {
//   return (
//     <Uncontrolledcomponent/>
//   )
// }

// export default App

//controled component

// import React from 'react'
// import Uncontrolledcomponent from './Forms/Uncontrolledcomponent'

// const App = () => {
//   return (
//     <Uncontrolledcomponent/>
//   )
// }

// export default App

// import React from 'react'
// import Darkmode from './Darkmode'

// const App = () => {
//   return (
//     <Darkmode/>
//   )
// }

// export default App
// import React from 'react'


// const App = () => {
//   return (
//    <controlledcomponentsststes/>
//   )
// }

// export default App

// import React from 'react'
// import Controlledcomponents from './Forms/Controlledcomponents'

// const App = () => {
//   return (
//    <Controlledcomponents/>
//   )
// }

// export default App


// import React from 'react'
// import Controlledcomponent1 from './Forms/Controlledcomponent1'

// const App = () => {
//   return (
//     <Controlledcomponent1/>
//   )
// }

// export default App

// import React from 'react'
// import Effect from './Useeffect/Effect'

// const App = () => {
//   return (
//     <Effect/>
//   )
// }

// export default App


// import React from 'react'
// import AAxios from './Axios/AAxios'

// const App = () => {
//   return (
//     <>
//     <AAxios/>
//     </>
//   )
// }

// export default App


// import React from 'react'
// import Portal from './portals/Portal'


// const App = () => {
//   return (
//     <Portal/>
//   )
// }

// export default App


// import React, { useState } from 'react'
// import PortalsTask from './portals/PortalsTask'
// import './Style.css'

// const App = () => {
//   let[state,setState]=useState(false)
//   let handelechange=()=>{
//     setState(!state)
//   }
//   return (
//     <>
//     <button onClick={handelechange} id="b">show portal</button>
//        { state?<PortalsTask func={handelechange}/>:null}
//         </>

//   )
// }

// export default 



// import React from 'react'
// import Errorboundries from './Errorboundres/Errorboundries'
// import Greet from './Errorboundres/Greet'

// const App = () => {
//   return (
//     <>
//     <Errorboundries>
//     <Greet name="manoj"/>
//     </Errorboundries>

//     <Errorboundries>
//     <Greet name="nishitha"/>
//     </Errorboundries>
//     <Errorboundries>
//     <Greet name="kavya"/>
//     </Errorboundries>

//     </>
//   )
// }

// export default App


// import React from 'react'
// import Usememo from './usememo/Usememo'

// const App = () => {
//   return (
//    <Usememo/>
//   )
// }

// export default App


// import React from 'react'
// import CallbackParent from './usememo/usecallback/CallbackParent'

// const App = () => {
//   return (
//     <CallbackParent/>
//   )
// }

// export default App


// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from './Routers/Home'
// import About from './Routers/About'
// import Contact from './Routers/Contact'
// import PageNotfound from './Routers/PageNotfound'
// import Profile from './Routers/innerrouter/Profile'
// import Feed from './Routers/innerrouter/Feed'
// import Notifications from './Routers/innerrouter/Notifications'
// import Mainabout from './Routers/innerrouter/Mainabout'


// const App = () => {
//   return (
//     <>
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element=<Home/>/>
//       <Route path='/about' element=<Mainabout/>>
//       <Route index element=<About/>/>

//       <Route path='/about/profile'element=<Profile/>/>
//       <Route path='/about/feed'element=<Feed/>/>
//       <Route path='/about/notifications' element=<Notifications/>/>
//       </Route>
   

//       <Route path="/contact" element=<Contact/>/>
//       <Route path="*" element=<PageNotfound/>/>
      
//     </Routes>
//     </BrowserRouter>
    
//     </>
//   )
// }

// export default App


// //!Router v6

// import { createBrowserRouter,RouterProvider } from 'react-router-dom'


// let route=createBrowserRouter([
//   {
//     path:"/",
//     element:<Home/>
//   },
//   {
//     path:"/About",
//     element:<Mainabout/>,
//     children:[
//       {
//         index:true,
//         element:<About/>
//       },
//       {
//         path:"/About/profile",
//         element:<Profile/>
//       },
//       {
//         path:"/About/Feed",
//         element:<Feed/>
//       },
//       {
//         path:"/About/Notifications",
//         element:<Notifications/>

//       }
//     ]
//   },
//   {
//     path:"/contact",
//     element:<Contact/>
//   },
//   {
//     path:"*",
//     element:<PageNotfound/>
//   }
// ])

// const App = () => {
//   return (
// <RouterProvider router={ route}/>
   
//   )
// }

// export default App



// import React from 'react'

// const App = () => {
//   return (
//     <BrowserRouter>
//     <router>
//         <route path="" element=""/>
//         <route path="" element=""/>
//         <route path="" element=""/>
        
//     </router>
//     </BrowserRouter>
//   )
// }

// export default App



//mock practice 
//class based component
// import React from "react";
// export default class app extends React.Component{
//   render(){
//     return <h1> manoj</h1>
//   }
// }



//function based components

// import React from "react";
//  const app=()=>{
//   return <h1>hi ra bangaram</h1>
//  }
//  export default app


//jsx

// import React from 'react'

// const App = () => {
//   const obj={
//     name:"manoj"
//   }
//   return (
//     <>
//     <h1 className=''>jsx</h1>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, possimus.</p>
//     <span>java script{obj.name}</span>
//     <label htmlFor=""></label>
//     </>
//   )
// }

// export default App


import React from 'react'
import Todo from './TODOAPP1/Todo'

const App = () => {
  return (
    <Todo/>
  )
}

export default App
