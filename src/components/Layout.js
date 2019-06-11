import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faBed,
  faShower,
  faCar,
  faImages,
  faMapMarkedAlt,
} from "@fortawesome/pro-light-svg-icons"

import NavBar from "./NavBar"
import Footer from "./Footer"

import "typeface-raleway"
import "bulma"
import "./site.scss"

library.add(faBed, faShower, faCar, faImages, faMapMarkedAlt)

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
            email
            address1
            address2
            contactNum1
            contactNum2
            email
            admin
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        />
        <NavBar siteTitle={data.site.siteMetadata.title} />
        <>
          {children}
          <Footer
            siteTitle={data.site.siteMetadata.title}
            siteSubtitle={data.site.siteMetadata.subtitle}
            siteAddress1={data.site.siteMetadata.address1}
            siteAddress2={data.site.siteMetadata.address2}
            siteContactNum1={data.site.siteMetadata.contactNum1}
            siteContactNum2={data.site.siteMetadata.contactNum2}
            siteEmail={data.site.siteMetadata.email}
            siteAdmin={data.site.siteMetadata.admin}
          />
        </>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
