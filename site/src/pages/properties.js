import React from 'react'

import Layout from '../components/Layout'
import HouseCard from '../components/HouseCard'

const PropertiesPage = ({ data }) => (
  <Layout>
    <div class="container property-list">
      {
        (() => {
          if (data.allStrapiProperty.edges.length > 0)
            return (
              <div class="columns">
              {data.allStrapiProperty.edges.map(document => (
                <HouseCard
                  key={document.node.id}
                  url={document.node.fields.slug}
                  title={document.node.title}
                  cover={data.site.siteMetadata.api + document.node.pictures[0].url}
                  price={document.node.price}
                  status={document.node.status.name}
                  address={document.node.address}
                  bedrooms={document.node.bedrooms}
                  bathrooms={document.node.bathrooms}
                  garages={document.node.garages}
                />
              ))}
              </div>
            )
          else
            return (
              <div class="no-properties-list is-uppercase has-text-centered">
                <h1>No properties available</h1>
              </div>
            )
        })()
      }
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query PropertiesQuery {
    allStrapiProperty {
      edges {
        node {
          id
          title
          pictures {
            url
          }
          price
          status {
            name
          }
          address
          bedrooms
          bathrooms
          garages
          fields {
            slug
          }
        }
      }
    }
    site {
      siteMetadata {
        api
      }
    }
  }
`

export default PropertiesPage
