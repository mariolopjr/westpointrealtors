import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

const PropertyPage = ({ data }) => (
  <Layout>
    <Helmet
      title={data.strapiProperty.address + " | " + data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'og:title', content: data.strapiProperty.address + " | " + data.site.siteMetadata.title },
        { name: 'og:description', content: data.strapiProperty.description },
      ]}
    />
    {data.strapiProperty.title}
  </Layout>
)

export const pageQuery = graphql`
  query PropertyQuery($id: String!) {
    strapiProperty(id: { eq: $id }) {
      title
      pictures {
        url
      }
      price
      status {
        name
      }
      address
      description
      bedrooms
      bathrooms
      garages
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default PropertyPage
