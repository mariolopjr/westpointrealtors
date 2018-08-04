import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import HouseCard from '../components/HouseCard'

const PropertiesPage = ({ data }) => (
  <Layout>
    <div className="container property-list">
      {
        (() => {
          if (data.allStrapiProperty.edges.length > 0)
            return (
              <div className="columns">
              {data.allStrapiProperty.edges.map(document => (
                <HouseCard
                  key={document.node.id}
                  url={document.node.fields.slug}
                  title={document.node.title}
                  cover={document.node.pictures[0].localFile}
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
              <div className="no-properties-list is-uppercase has-text-centered">
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
            localFile {
              childImageSharp {
                fluid(
                  maxWidth: 318,
                  quality: 80
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
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
