import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Affiliate from '../components/Affiliate'
import HouseCard from '../components/HouseCard'

const IndexPage = ({ data }) => (
  <Layout>
    <section className="hero is-small">
      <div className="hero-body index-hero">
        <div className="container has-text-centered">
          <h2 className="title index-subtitle">
            Our favorite properties
          </h2>

          <div className="columns is-multiline is-mobile">
            {data.allContentfulProperties.edges.length > 0 ?
              data.allContentfulProperties.edges.map(document => (
                <HouseCard
                  key={document.node.id}
                  url={document.node.fields.slug}
                  title={document.node.title}
                  cover={document.node.photos[0].localFile}
                  price={document.node.price}
                  status={document.node.status.name}
                  address={document.node.address}
                  bedrooms={document.node.bedrooms}
                  bathrooms={document.node.bathrooms}
                  garages={document.node.garages}
                />
              )) : (
              <div className="no-properties-index is-uppercase">
                <h1>No properties available</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
    <section className="hero is-small">
      <div className="container has-text-centered">
        <div className="hero-body">
          <h2 className="title">Our affiliates</h2>
          <div className="columns affiliates">
            {data.allContentfulAffiliates.edges.length > 0 ?
              data.allContentfulAffiliates.edges.map(document => (
                <Affiliate
                  key={document.node.id}
                  name={document.node.name}
                  url={document.node.logo.localFile} />
              )) : (
                <div className="no-properties-index is-uppercase">
                  <h1>No affiliates available</h1>
                </div>
            )}
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export const pageQuery = graphql`
  query {
    allContentfulProperties(
      filter: {
        favorite: {
          eq: true
        }
      }
    ) {
      edges {
        node {
          id
          title
          photos {
            localFile {
              childImageSharp {
                fluid(
                  maxWidth: 318,
                  quality: 70
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
    allContentfulAffiliates {
      edges {
        node {
          id
          name
          logo {
            localFile {
              childImageSharp {
                fluid(
                  maxWidth: 318,
                  quality: 70
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
