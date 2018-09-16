import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Carousel from 'nuka-carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from '../components/Layout'
import FormField from '../components/FormField'
import MapContainer from '../components/MapContainer'

const PropertyPage = ({ data, location }) => (
  <Layout>
    <Helmet
      title={data.contentfulProperties.address + " | " + data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.contentfulProperties.fields.seo_description },
        { name: 'og:type', content: 'product' },
        { name: 'og:url', content: data.site.siteMetadata.siteUrl + location.pathname },
        { name: 'og:title', content: data.contentfulProperties.address + " | " + data.site.siteMetadata.title },
        { name: 'og:description', content: data.contentfulProperties.fields.seo_description },
      ]}
    />
    <div className="container house">
      <div className="house-titles has-text-centered">
        <h1 className="title">{data.contentfulProperties.title}</h1>
        <h2 className="subtitle">{data.contentfulProperties.address}</h2>
      </div>

      <div className="columns">
        <div className="column is-two-thirds">
          <div className="card">
              <div className="card-image">
                <figure className="image is-16by9">
                  <Carousel dragging={true}>
                    {data.contentfulProperties.photos.map( ({ localFile }, index) => (
                      <Img
                        key={localFile.id}
                        fluid={localFile.childImageSharp.fluid}
                        alt={`Home`}
                        onLoad={() => {window.dispatchEvent(new Event('resize'))}}
                      />
                    ))}
                  </Carousel>
                  <MapContainer
                    isMarkerShown={true}
                    address={data.contentfulProperties.address}
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${data.site.siteMetadata.google_maps_api_key}&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div id="map" className="hidden not-active" style={{ height: `666px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                  />
                </figure>
                <div className="selection-buttons has-text-centered">
                  <div
                    id="picture-btn"
                    className="image-button circle"
                    onClick=
                      {() => {
                        document.getElementById('map').classList.add('hidden')
                        document.getElementById('picture-btn').classList.remove('not-active')
                        document.getElementById('map-btn').classList.add('not-active')
                      }}
                    >
                    <FontAwesomeIcon icon={["fal", "images"]} />
                  </div>
                  <div
                    id="map-btn"
                    className="image-button circle not-active"
                    onClick=
                      {() => {
                        document.getElementById('map').classList.remove('hidden')
                        document.getElementById('picture-btn').classList.add('not-active')
                        document.getElementById('map-btn').classList.remove('not-active')
                      }}
                  >
                    <FontAwesomeIcon icon={["fal", "map-marked-alt"]} />
                  </div>
                </div>
            </div>
            <header className="card-header">
              <div className="price">
                <span className="card-price">
                  ${Number(Math.round(data.contentfulProperties.price + 'e2') + 'e-2').toFixed(2)}
                </span>
                <span className="is-pulled-right is-uppercase house-status">{data.contentfulProperties.status.name}</span>
              </div>
            </header>
              <div className="card-content">
                <div className="columns">
                  <div className="column">
                    <span className="item-title">Property Type</span>
                  </div>
                  <div className="column">
                    <span className="item-data">{data.contentfulProperties.type.name}</span>
                  </div>
                  <div className="column">
                    <span className="item-title">Year</span>
                  </div>
                  <div className="column">
                    <span className="item-data">{data.contentfulProperties.year}</span>
                  </div>
                </div>
                <hr/>
                <div className="columns">
                  <div className="column">
                    <span className="item-title">Home Size</span>
                  </div>
                  <div className="column">
                    <span className="item-data">{data.contentfulProperties.home_size}</span>
                  </div>
                  <div className="column">
                    <span className="item-title">Lot Size</span>
                  </div>
                  <div className="column">
                    <span className="item-data">{data.contentfulProperties.lot_size}</span>
                  </div>
                </div>
                <hr/>
                <div className="columns">
                  <div className="column">
                    <span className="item-title">Bedrooms</span>
                  </div>
                  <div className="column">
                    <span className="item-data">{data.contentfulProperties.bedrooms}</span>
                  </div>
                  <div className="column">
                    <span className="item-title">Bathrooms</span>
                  </div>
                  <div className="column">
                    <span className="item-data">{data.contentfulProperties.bathrooms}</span>
                  </div>
                </div>
                <hr/>
                <div className="columns">
                  <div className="column">
                    <span className="item-title">Garages</span>
                  </div>
                  <div className="column">
                    <span className="item-data">{data.contentfulProperties.garages}</span>
                  </div>
                  <div className="column">
                    <span className="item-title">HOA Fees</span>
                  </div>
                  <div className="column">
                    <span className="item-data">${data.contentfulProperties.hoa_fees}</span>
                  </div>
                </div>
              </div>
          </div>
        </div>
          <div className="column">
            <div className="card contact-us-card is-uppercase">
              <div className="card-content">
                <p className="title has-text-centered">
                  <span className="contact-us-bold">Contact</span>
                  <span className="contact-us-light">us</span>
                </p>
                <p className="subtitle has-text-centered">
                  About this property
                </p>
                <form
                  id="contact"
                  action="/success"
                  name="contact"
                  method="POST"
                  data-netlify-honeypot="agent-name"
                  data-netlify-recaptcha="true"
                  data-netlify="true"
                >
                  <FormField
                    name="address"
                    type="hidden"
                    required={true}
                    value={data.contentfulProperties.address}
                  />
                  <FormField
                    name="name"
                    type="text"
                    placeholder="Your name"
                    autocomplete="on"
                    required={true}
                  />
                  <FormField
                    name="email"
                    type="email"
                    placeholder="Your email"
                    autocomplete="on"
                    required={true}
                  />
                  <FormField
                    name="number"
                    type="text"
                    placeholder="Your contact number"
                    autocomplete="on"
                    required={true}
                  />
                  <FormField
                    classes="textarea"
                    name="message"
                    type="textarea"
                    placeholder="Hi! I am interested in the property because..."
                    autocomplete="on"
                    length="200"
                    required={true}
                  />
                  <FormField
                    name="agent-name"
                    type="text"
                    placeholder="Enter agent name"
                    autocomplete="on"
                  />
                  <div data-netlify-recaptcha="true" />
                </form>
              </div>
              <footer className="card-footer">
                <button
                  className="card-footer-item"
                  form="contact"
                  type="submit"
                >
                  <p>
                    <span className="is-uppercase">
                      Send message
                    </span>
                  </p>
                </button>
              </footer>
            </div>
          </div>
        </div>

      <div className="columns">
        <div className="column is-two-thirds">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                Property Details
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                {data.contentfulProperties.description.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query ($path: String!) {
    contentfulProperties(fields: { slug: { eq: $path } }) {
      title
      photos {
        localFile {
          id
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
      type {
        name
      }
      address
      description {
        description
      }
      bedrooms
      bathrooms
      garages
      homeSize
      lotSize
      hoaFees
      year(formatString: "YYYY")
      fields {
       seoDescription
      }
    }
    site {
      siteMetadata {
        title
        siteUrl
        google_maps_api_key
      }
    }
  }
`

export default PropertyPage
