import React from "react"
import { Link } from "gatsby"

import styled from "@emotion/styled"
import { mq } from "./styles"

const HeadContainer = styled.div({
  alignItems: "center",
  display: "flex",
  flexGrow: 0,
  flexShrink: 0,
  justifyContent: "center",

  [mq[1]]: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
})

const Nav = styled.nav({
  display: "flex",
  minHeight: "3.25rem",
  position: "relative",
  zIndex: 30,
})

const BrandContainer = styled.div({
  display: "flex",
  flexShrink: 0,
  minHeight: "3.25rem",
  position: "relative",
  zIndex: 30,
})

const BrandLink = styled(Link)({
  alignItems: "center",
  color: "#000",
  display: "flex",
  flexGrow: 0,
  flexShrink: 0,
  fontSize: "1.75rem",
  fontWeight: 400,
  letterSpacing: 1.2,
  lineHeight: 1.5,
  padding: ".5rem .75rem",
  position: "relative",
  textDecoration: "none",
})

interface HeadProps {
  title: string
}

const Head = ({ title }: HeadProps) => (
  <HeadContainer>
    <Nav>
      <BrandContainer>
        <BrandLink to="/">{title}</BrandLink>
      </BrandContainer>
    </Nav>
  </HeadContainer>
)

export default Head
