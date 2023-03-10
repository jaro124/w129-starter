/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site(siteMetadata: {}) {
        siteMetadata {
          title
        }
      }
    }
  `)
   return (
    <div>
      <Header />
      <div>
        <main>{children}</main>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </div>
    </div>
  )
}

export default Layout