import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

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
                  {data.strapiProperty.pictures.map( (picture, index) => (
                    <img
                      key={picture.id}
                      src={data.site.siteMetadata.api + picture.url}
                      alt={`Home`}
                      className={index !== 0 ? 'hidden' : ''}
                    />
                  ))}
                  <div id="map" className="hidden"></div>
                </figure>
                <div className="selection-buttons has-text-centered">
                  <div id="picture-btn" className="image-button circle" onclick="hideMap()">
                    <i className="fas fa-picture-o" aria-hidden="true"></i>
                  </div>
                  <div id="map-btn" className="image-button circle not-active" onclick="showMap()">
                    <i className="fas fa-map-o" aria-hidden="true"></i>
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
                <form method="POST" action="" id="contact-form">
                  <b-field>
                    <b-input name="name" placeholder="Your name" required></b-input>
                  </b-field>
                  <b-field>
                    <b-input name="email" type="email" placeholder="Your email" required></b-input>
                  </b-field>
                  <b-field>
                    <b-input name="number" placeholder="Your contact Number" required></b-input>
                  </b-field>
                  <b-field>
                    <b-input name="message" maxlength="200" type="textarea" placeholder="Hi! I am interested in the property because..."></b-input>
                  </b-field>
                  <div className="g-recaptcha"
                    data-sitekey="{{ env('RECAPTCHA_SITE') }}"
                    data-callback="submitContactForm"
                    data-size="invisible">
                  </div>
                </form>
              </div>
              <footer className="card-footer">
                <p className="card-footer-item" onclick="validateForm($event)">
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
        id
        url
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
      }
    }
  }
`

export default PropertyPage
