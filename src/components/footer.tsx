import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import styled from "@emotion/styled"
import { mq } from "./styles"

const FooterContainer = styled.footer({
  alignItems: "center",
  color: "#000",
  display: "flex",
  fontSize: "1rem",
  padding: "8px",
  justifyContent: "space-between",
  textAlign: "center",
  zIndex: 30,
})

const Copyright = styled.span({
  fontSize: "0.8rem",
})

const Hidi = styled.span({
  display: "none",

  [mq[1]]: {
    display: "flex",
  },
})

interface FooterProps {
  copyright: string
}

const Footer = ({ copyright }: FooterProps) => (
  <FooterContainer>
    <Hidi />
    <Copyright>{copyright}</Copyright>
    <Hidi />
  </FooterContainer>
)

export default Footer
