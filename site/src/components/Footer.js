import React from 'react'
import { Link } from 'gatsby'

const Footer = ({
  siteTitle,
  siteSubtitle,
  siteAddress1,
  siteAddress2,
  siteContactNum1,
  siteContactNum2,
  siteEmail,
}) => (
  <footer class="site">
    <div class="container">
      <div class="columns">
        <div class="company-info column is-one-third">
          <h1 class="title">{siteTitle}</h1>
          <h2 class="subtitle">{siteSubtitle}</h2>
          <span class="address">{siteAddress1}</span>
          <span class="address">{siteAddress2}</span>
          <span class="contact-number">{siteContactNum1}</span>
          <span class="contact-number">{siteContactNum2}</span>
          <span class="email">{siteEmail}</span>
        </div>
        <div class="column is-one-third is-offset-one-third disclaimer">
          <span>Disclaimer</span>
          <hr/>
          <span>Information herein deemed reliable but not guaranteed.</span>
        </div>
      </div>
    </div>
    <div class="lower-footer">
        <div class="container">
            <span class="is-uppercase">© {siteTitle}</span>
            <a href="{{ url('/admin') }}" class="is-pulled-right">Agent Login</a>
        </div>
    </div>
  </footer>
)

export default Footer
