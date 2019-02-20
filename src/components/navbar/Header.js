import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="nav-wrapper teal">
      <div className="container">
        <a className="brand-logo left">My Bariatric Pal</a>
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

export default Header;