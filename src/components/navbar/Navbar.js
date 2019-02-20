import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
  return (
    <nav className="nav-wrapper teal darken-3">
      <div className="container">
        <Link to="/" className="brand-logo left">My Bariatric Pal</Link>
          <SignedInLinks />
          <SignedOutLinks />
          
          <ul className="right">
            <li><NavLink to="/">Home</NavLink></li>
            {/* <li><NavLink to="/about">About</NavLink></li> */}
            <li><NavLink to="/phaselist">Phases</NavLink></li>
            <li><NavLink to="/mealtracker">Meal Tracker</NavLink></li>


          </ul>
      </div>
    </nav>
  )
}

export default Navbar;