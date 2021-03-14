import React, { ReactNode } from "react"

import styled from "@emotion/styled"

const BodyContainer = styled.div({
  alignItems: "center",
  display: "flex",
  flexGrow: 1,
  flexShrink: 0,
  padding: "3rem 1.5rem",
  zIndex: 30,
})

interface BodyProps {
  children: ReactNode
}

const Body = ({ children }: BodyProps) => (
  <BodyContainer>
    {children}
  </BodyContainer>
)

export default Body
