import React from 'react'
import Navbar from './Navbar'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <>
    <Navbar/>
    <ul>
      <li><Link to='/about/profile'>profile</Link></li>
      <li><Link to='/about/feed'>feed</Link></li>
      <li><Link to='/about/notifications'>notifications</Link></li>
    </ul>
    <h1>hello i am about</h1>
    <Outlet/>
    </>
  )
}

export default About