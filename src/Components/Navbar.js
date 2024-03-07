import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div >

<nav class="navbar">
    <img src="https://images.yourstory.com/cs/images/companies/KkoinX-1657031694106.jpg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff" height="100px" width="100px" alt="Logo" class="logo"/>
    <ul class="nav-links" style={{marginLeft:'800px'}}>
      <li><b><a href="#">Crypto Taxes</a></b></li>
      <li><b><a href="#">Freetools</a></b></li>
      <li><b><a href="#">Resource Center</a></b></li>
      <li><Link  to='/chart'><b>Chart</b></Link></li>
    </ul>
    <a href="#" class="get-started-btn">Get Started</a>
  </nav>


    </div>
  )
}

export default Navbar