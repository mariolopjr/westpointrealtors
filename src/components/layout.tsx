/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { ReactNode } from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Head from "./head"
import Body from "./body"
import Footer from "./footer"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Theme } from "./styles"

const Hero = styled.div({
  alignItems: "stretch",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  minHeight: "100vh",
})

const bgStyles = css({
  left: 0,
  height: "100%",
  position: "absolute",
  top: 0,
  userSelect: "none",
  width: "100%",
  zIndex: 0,

  ":before": {
    background: "linear-gradient(to bottom, #69ffea 0%, #44eecd 100%)",
    content: '""',
    height: "100%",
    left: 0,
    opacity: .6,
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 1,
  },
})

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        {Theme()}
        <Helmet
          htmlAttributes={{
            lang: "en",
          }}
          title={data.site.siteMetadata.title}
          meta={[
            { name: "title", content: data.site.siteMetadata.title },
            {
              name: "description",
              content: data.site.siteMetadata.description,
            },
          ]}
        />
        <Hero>
          <StaticImage
            src="../../static/images/bg.jpg"
            css={bgStyles}
            alt="Background Photo by Pexels on pixabay"
            title="Background Photo by Pexels on pixabay"
            placeholder="blurred"
            layout="fullWidth"
            loading="eager"
            formats={["auto", "webp", "avif"]}
          />

          <Head title={data.site.siteMetadata.title} />
          <Body>{children}</Body>
          <Footer copyright="&copy; West Point Real Estate" />
        </Hero>
      </>
    )}
  />
)

export default Layout
