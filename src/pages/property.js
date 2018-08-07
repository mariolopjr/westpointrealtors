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
      title={data.strapiProperty.address + " | " + data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.strapiProperty.fields.seo_description },
        { name: 'og:type', content: 'product' },
        { name: 'og:url', content: data.site.siteMetadata.siteUrl + location.pathname },
        { name: 'og:title', content: data.strapiProperty.address + " | " + data.site.siteMetadata.title },
        { name: 'og:description', content: data.strapiProperty.fields.seo_description },
      ]}
    />
    <div className="container house">
      <div className="house-titles has-text-centered">
        <h1 className="title">{data.strapiProperty.title}</h1>
        <h2 className="subtitle">{data.strapiProperty.address}</h2>
      </div>

      <div className="columns">
        <div className="column is-two-thirds">
          <div className="card">
              <div className="card-image">
                <figure className="image is-16by9">
                  <Carousel dragging={true}>
                    {data.strapiProperty.pictures.map( ({ localFile }, index) => (
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
                    address={data.strapiProperty.address}
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
                  ${Number(Math.round(data.strapiProperty.price + 'e2') + 'e-2').toFixed(2)}
                </span>
                <span className="is-pulled-right is-uppercase house-status">{data.strapiProperty.status.name}</span>
              </div>
            </header>
              <div className="card-content">
                <div className="columns">
                  <div className="column">
                    <span className="item-title">Property Type</span>
                  </div>
                  <div className="column">
                    <span className="item-data">{data.strapiProperty.type.name}</span>
                  </div>
                  <div className="column">
                    <span className="item-title">Year</span>
                  </div>
                  <div className="column">
                    <span className="item-data">{data.strapiProperty.year}</span>
                  </div>
                </div>
                <hr/>
                <div className="columns">
                  <div className="column">
                    <span className="item-title">Home Size</span>
                  </div>
                  <div className="column">
                    <span className="item-data">{data.strapiProperty.home_size}</span>
                  </div>
                  <div className="column">
                    <span className="item-title">Lot Size</span>
                  </div>
                  <div className="column">
                    <span className="item-data">{data.strapiProperty.lot_size}</span>
                  </div>
                </div>
                <hr/>
                <div className="columns">
                  <div className="column">
                    <span className="item-title">Bedrooms</span>
                  </div>
                  <div className="column">
                    <span className="item-data">{data.strapiProperty.bedrooms}</span>
                  </div>
                  <div className="column">
                    <span className="item-title">Bathrooms</span>
                  </div>
                  <div className="column">
                    <span className="item-data">{data.strapiProperty.bathrooms}</span>
                  </div>
                </div>
                <hr/>
                <div className="columns">
                  <div className="column">
                    <span className="item-title">Garages</span>
                  </div>
                  <div className="column">
                    <span className="item-data">{data.strapiProperty.garages}</span>
                  </div>
                  <div className="column">
                    <span className="item-title">HOA Fees</span>
                  </div>
                  <div className="column">
                    <span className="item-data">${data.strapiProperty.hoa_fees}</span>
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
                <form name="contact" netlify="true">
                  <FormField
                    label=""
                    name="name"
                    type="text"
                    placeholder="Your name"
                    autocomplete="on"
                    required={true}
                  />
                  <FormField
                    label=""
                    name="email"
                    type="email"
                    placeholder="Your email"
                    autocomplete="on"
                    required={true}
                  />
                  <FormField
                    label=""
                    name="number"
                    type="text"
                    placeholder="Your contact number"
                    autocomplete="on"
                    required={true}
                  />
                  <FormField
                    classes="textarea"
                    label=""
                    name="message"
                    type="textarea"
                    placeholder="Hi! I am interested in the property because..."
                    autocomplete="on"
                    length="200"
                    required={true}
                  />
                  <div data-netlify-recaptcha={true} />
                </form>
              </div>
              <footer className="card-footer">
                <p className="card-footer-item">
                  <span>
                    Send message
                  </span>
                </p>
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
                {data.strapiProperty.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query PropertyQuery($id: String!) {
    strapiProperty(id: { eq: $id }) {
      title
      pictures {
        localFile {
          id
          childImageSharp {
            fluid(
              maxWidth: 888,
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
      type {
        name
      }
      address
      description
      bedrooms
      bathrooms
      garages
      home_size
      lot_size
      hoa_fees
      year(formatString: "YYYY")
      fields {
        seo_description
      }
    }
    site {
      siteMetadata {
        title
        siteUrl
        api
        google_maps_api_key
      }
    }
  }
`

export default PropertyPage
