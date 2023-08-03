import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'
import Logo from './Logo.png'

const Nav = () => {
  return (
    <div>
         <nav>
    <div class="nav-container">
      <div class="logo">
        <img src={Logo} width={'60px'} height={'60px'} alt="" />
      
      </div>
      <b>Welecome to E-Store</b>
      <ul class="nav-links">
      <li><Link to='/Home'>Home</Link></li>
        <li><Link to='/Product'>Product</Link></li>
        <li><Link to='/Cart'>Cart</Link></li>
        <li><Link to='/Contact'>Contact</Link></li>
      </ul>
    </div>
  </nav>
    </div>
  )
}

export default Nav