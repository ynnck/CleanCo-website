/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import Image from "../images/achtergrond_roos.jpeg"

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          compName
          compDescription
          authorName
          authorWebsite
          compPhone
          compEmail
        }
      }
    }
  `)

  return (
    <>
      <Header
        compName={data.site.siteMetadata.compName}
        compPhone={data.site.siteMetadata.compPhone}
        compEmail={data.site.siteMetadata.compEmail}
      />
      <div className="divContainer">
        {children}
        <Footer
          compName={data.site.siteMetadata.compName}
          compTitle={data.site.siteMetadata.compName}
          compDescription={data.site.siteMetadata.compDescription}
          compPhone={data.site.siteMetadata.compPhone}
          compEmail={data.site.siteMetadata.compEmail}
          authorName={data.site.siteMetadata.authorName}
          authorWebsite={data.site.siteMetadata.authorWebsite}
        />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
