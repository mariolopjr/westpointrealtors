import React from 'react'

const Footer = ({
  siteTitle,
  siteSubtitle,
  siteAddress1,
  siteAddress2,
  siteContactNum1,
  siteContactNum2,
  siteEmail,
  siteAdmin,
}) => (
  <footer className="site">
    <div className="container">
      <div className="columns">
        <div className="company-info column is-one-third">
          <h1 className="title">{siteTitle}</h1>
          <h2 className="subtitle">{siteSubtitle}</h2>
          <span className="address">{siteAddress1}</span>
          <span className="address">{siteAddress2}</span>
          <span className="contact-number">{siteContactNum1}</span>
          <span className="contact-number">{siteContactNum2}</span>
          <span className="email">{siteEmail}</span>
        </div>
        <div className="column is-one-third is-offset-one-third disclaimer">
          <span>Disclaimer</span>
          <hr/>
          <span>Information herein deemed reliable but not guaranteed.</span>
        </div>
      </div>
    </div>
    <div className="lower-footer">
        <div className="container">
            <span className="is-uppercase">© {siteTitle}</span>
            <a href={siteAdmin} className="is-pulled-right">Agent Login</a>
        </div>
    </div>
  </footer>
)

export default Footer
