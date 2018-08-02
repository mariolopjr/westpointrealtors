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

          {data.allStrapiProperty.edges.length > 0 ?
            data.allStrapiProperty.edges.map(document => (
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
            )) : (
            <div className="no-properties-index is-uppercase">
              <h1>No properties available</h1>
            </div>
          )}
        </div>
      </div>
    </section>
    <section className="hero is-small">
      <div className="container has-text-centered">
        <div className="hero-body">
          <h2 className="title">Our affiliates</h2>
          <div className="columns affiliates">
            {data.allStrapiAffiliate.edges.length > 0 ?
              data.allStrapiAffiliate.edges.map(document => (
                <Affiliate
                  key={document.node.id}
                  name={document.node.name}
                  url={data.site.siteMetadata.api + document.node.logo.url} />
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
  query IndexQuery {
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
    allStrapiAffiliate {
      edges {
        node {
          id
          name
          logo {
            url
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

export default IndexPage
