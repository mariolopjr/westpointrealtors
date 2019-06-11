import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const HouseCard = ({
  url,
  title,
  cover,
  price,
  status,
  address,
  bedrooms,
  bathrooms,
  garages,
}) => (
  <div className="column home-card is-one-quarter">
    <Link to={url}>
      <div className="card card-equal-height">
        <div className="card-image">
          <figure className="image is-3by2">
            <Img fluid={cover.childImageSharp.fluid} alt="Main" />
          </figure>
        </div>
        <small className="has-text-right is-uppercase">{status}</small>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-6">{title}</p>
              <p className="subtitle is-8">{address}</p>
            </div>
          </div>

          <div className="content has-text-centered">
            <span className="card-price">
              $
              {Number(Math.round(price + "e2") + "e-2").toLocaleString(
                undefined,
                { maximumFractionDigits: 2 }
              )}
            </span>
            <br />
          </div>
        </div>
        <footer className="card-footer">
          <div className="card-footer-item">
            <span className="icon">
              <FontAwesomeIcon icon={["fal", "bed"]} />
            </span>
            <span className="house-footer">{bedrooms}</span>
          </div>
          <div className="card-footer-item">
            <span className="icon">
              <FontAwesomeIcon icon={["fal", "shower"]} />
            </span>
            <span className="house-footer">{bathrooms}</span>
          </div>
          <div className="card-footer-item">
            <span className="icon">
              <FontAwesomeIcon icon={["fal", "car"]} />
            </span>
            <span className="house-footer">{garages}</span>
          </div>
        </footer>
      </div>
    </Link>
  </div>
)

export default HouseCard
