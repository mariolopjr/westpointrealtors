import React from "react"
import Img from "gatsby-image"

const Affiliate = ({ url, name }) => (
  <div className="column">
    <Img className="affiliate" fluid={url.childImageSharp.fluid} alt={name} />
  </div>
)

export default Affiliate
