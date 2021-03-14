import React from "react"

import styled from "@emotion/styled"
import { mq } from "./styles"

const ButtonContainer = styled.a({
  alignItems: "center",
  backgroundColor: "#000",
  border: "none",
  borderColor: "#dbdbdb",
  borderWidth: "1px",
  boxShadow: "0 8px 14px -12px rgba(0, 0, 0, .56), 0 4px 15px 0 rgba(0, 0, 0, .12)",
  borderRadius: "18155.375rem",
  color: "#33cc99",
  cursor: "pointer",
  display: "flex",
  fontSize: ".9375rem",
  fontWeight: 600,
  height: "2.25em",
  justifyContent: "center",
  letterSpacing: ".06875rem",
  lineHeight: 1.8,
  marginBottom: "2rem",
  marginRight: "1rem",
  padding: "0.3rem 1.2rem",
  position: "relative",
  textAlign: "center",
  textDecoration: "none",
  textTransform: "capitalize",
  transition: ".3s",
  whiteSpace: "nowrap",
  verticalAlign: "top",

  ":active, :hover": {
    backgroundColor: "#00d1b2",
    color: "#000",
    transition: ".3s",
  },

  [mq[1]]: {
    display: "inline-flex",
    marginBottom: "1rem",
  },

  "@media screen and (orientation: landscape) and (max-width: 1088px)": {
    display: "inline-flex",
    marginBottom: "1rem",
  },
})

interface ButtonProps {
  text: string
  url: string
  title: string
}

const Button = ({ text, url, title }: ButtonProps) => (
  <ButtonContainer href={url} title={title}>{text}</ButtonContainer>
)

export default Button
