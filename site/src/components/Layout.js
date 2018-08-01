import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import NavBar from './NavBar'
import Footer from './Footer'
import './site.scss'

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <NavBar siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
          <Footer
            siteTitle={data.site.siteMetadata.title}
            siteSubtitle={data.site.siteMetadata.subtitle}
            siteAddress1={data.site.siteMetadata.Address1}
            siteAddress2={data.site.siteMetadata.Address2}
            siteContactNum1={data.site.siteMetadata.ContactNum1}
            siteContactNum2={data.site.siteMetadata.ContactNum2}
            siteEmail={data.site.siteMetadata.email}
          />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
