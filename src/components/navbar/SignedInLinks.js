import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/create'>New Food Log</NavLink></li>
        <li><NavLink to='/'>Log Out</NavLink></li>
        <li><NavLink to='/' className="btn btn-floating teal lighten-1">CC</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedInLinks