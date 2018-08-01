import React from 'react'
import { Link } from 'gatsby'

const NavBar = ({ siteTitle }) => (
  <nav class="navbar">
    <div class="navbar-brand">
      <Link
        to="/"
        className="navbar-item"
      >
        {siteTitle}
      </Link>

      <div class="navbar-burger burger"
        data-target="main-nav"
        onclick="document.querySelector('#main-nav').classList.toggle('is-active');document.querySelector('.navbar-burger.burger').classList.toggle('is-active');">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div id="main-nav" class="navbar-menu">
      <div class="navbar-start">
        <Link
          to="/"
          className="navbar-item"
        >
          Home
        </Link>
        <Link
          to="/properties"
          className="navbar-item"
        >
          Properties
        </Link>
        <Link
          to="/forms"
          className="navbar-item"
        >
          Forms
        </Link>
      </div>
    </div>
  </nav>
)

export default NavBar
