import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Menu from "./menu"
import "../css/layout.css"

const Layout = ({ children }) => {
 
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <div className="container-fluid">
      <Header siteTitle={data.site.siteMetadata.title} />
      <Menu/>
    
      
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, BVinson
          {` `}
         
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
