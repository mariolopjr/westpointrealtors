import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

const IndexPage = ({ data }) => (
  <Layout>
    <section className="hero is-small">
        <div className="hero-body index-hero">
            <div className="container has-text-centered">
                <h2 className="title index-subtitle">
                    Our favorite properties
                </h2>

                {data.allStrapiProperty.edges.map(document => (
                  <li key={document.node.id}>
                    <h2>
                      <Link to={`/${document.node.id}`}>{document.node.title}</Link>
                    </h2>
                  </li>
                ))}
                <div className="columns">
                    @foreach($properties as $property)
                        @include('properties.card')
                    @endforeach
                </div>
                @else
                    <div className="no-properties-index is-uppercase">
                        <h1>No properties available</h1>
                    </div>
                @endif
            </div>
        </div>
    </section>
    <section className="hero is-small">
        <div className="container has-text-centered">
            <div className="hero-body">
                <h2 className="title">Our affiliates</h2>
                <div className="columns affiliates">
                    <div className="column">
                        <img src="{{ url('/images/sageLogo.png') }}"/>
                    </div>
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
        }
      }
    }
  }
`

export default IndexPage
