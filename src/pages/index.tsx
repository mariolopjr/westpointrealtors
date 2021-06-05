import React from "react"
import { StaticQuery, graphql } from "gatsby"

import styled from "@emotion/styled"
import { mq } from "../components/styles"

import Layout from "../components/layout"
import Button from "../components/button"
import EmailButton from "../components/email-button"
import PhoneButton from "../components/phone-button"
import Title from "../components/title"

const Container = styled.div({
  flexGrow: 1,
  flexShrink: 1,
  margin: "0 auto",

  [mq[1]]: {
    maxWidth: 960,
    width: 960,
  },

  [mq[2]]: {
    maxWidth: 1152,
    width: 1152,
  },

  [mq[3]]: {
    maxWidth: 1344,
    width: 1344,
  },
})

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query LayoutButtonsQuery {
        site {
          siteMetadata {
            slogan
            phone
            fax
            email
            gmaps
            hud
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <Container>
          <Title title={data.site.siteMetadata.slogan} />
          <PhoneButton type="office" phone={data.site.siteMetadata.fax} />
          <PhoneButton type="fax" phone={data.site.siteMetadata.fax} />
          <EmailButton text="Email us" email={data.site.siteMetadata.email} />
          <Button
            text="Visit us"
            url={data.site.siteMetadata.gmaps}
            title="Visit us" />
          <Button
            text="HudHomeStore"
            url={data.site.siteMetadata.hud}
            title="Click to go to Hud Home Store" />
        </Container>
      </Layout>
    )}
  />
)

export default IndexPage
