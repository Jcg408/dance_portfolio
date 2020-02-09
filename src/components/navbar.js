import React from 'react'
import Link from 'gatsby-link'
import './navbar.css'

const Navbar = () => (
  <div className = 'nav'>
    <ul className = 'navbar'>
      <li className = 'linkNav'>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  </div>
)

export default Navbar