
import PropTypes from "prop-types"
import React from "react"
import Navbar from "./navbar"
import "./header.css"
const Header = ({ siteTitle }) => (
  
  <header >
    <div className = "siteTitle">
      <h1> {siteTitle} </h1>
      <h2>Choreograper</h2>
      <Navbar/>

    </div>
  </header>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
