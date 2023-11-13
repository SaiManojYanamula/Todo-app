import React from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <>
    <Navbar/>
    <ul>
      <li><Link to='/about/profile'>profile</Link></li>
      <li><Link to='/about/feed'>feed</Link></li>
      <li><Link to='/about/notifications'>notifications</Link></li>
    </ul>
    <h1>profile</h1>
    
    </>
  )
}

export default Profile