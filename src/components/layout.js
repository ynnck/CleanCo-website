/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FaPhone, FaEnvelope, FaRegCopyright} from "react-icons/fa"
import Header from "./header"
import "./layout.css" 
import "./responsive.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          email
          telephone
          author {
            name
            website
          }
        }
      }
    }
  `)

  return (
    <>
      <Header 
              email={data.site.siteMetadata.email} 
              telephone={data.site.siteMetadata.telephone}
      />
        <main >{children}</main>
        <footer style={{display: 'flex', flexWrap: 'wrap',justifyContent: 'center', backgroundColor: 'rgb(94, 185, 180)', color: 'white', padding: '10px'}}>
            <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
              <div style={{fontSize: '2rem', color: 'white'}}>{data.site.siteMetadata.title}</div> 
              <div style={{fontSize: '2rem', color: 'white', marginTop: '5px'}}>{data.site.siteMetadata.description}</div>
            </div>
            <div style={{height: '11vh', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
              <h2 style={{marginBottom: '5px'}}>Contact</h2>
                <div>
                  <div style={{display: 'flex', alignItems: 'center'}}>                  
                    <FaPhone />
                    <div style={{marginLeft: '6px'}}>{data.site.siteMetadata.telephone}</div>
                    
                  </div>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <FaEnvelope />
                    <div style={{marginLeft: '6px'}}>{data.site.siteMetadata.email}</div>
                  </div>
                </div>
            </div>
            <div className="copyright" style={{fontSize: '1,2rem', width: '100%'}}>
              <FaRegCopyright />
              {' '}{new Date().getFullYear()}
              {' '}
              <a style={{color: 'white', textDecoration: 'none'}} href='https://www.reroot.be' rel="noopener norefferer">{data.site.siteMetadata.author.name}</a>
            </div>
            </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
