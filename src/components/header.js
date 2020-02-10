
import PropTypes from "prop-types"
import React from "react"
import "../css/header.css"
const Header = ({ siteTitle }) => (
  
  <header >
    <div className = "siteTitle" id='header'>
      <h1 > {siteTitle} </h1>
      <h2>Coach / Choreographer</h2>
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
