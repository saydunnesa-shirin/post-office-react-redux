import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/" className='nav-link'> Home</Link>
      <Link to="/parcels" className='nav-link'> Parcels</Link>
      <Link to="/bags" className='nav-link'> Bags</Link>
    </nav>
  )
}

export default NavBar
