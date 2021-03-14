import React from "react"

import Button from "./button"

interface EmailButtonProps {
  text: string
  email: string
}

const EmailButton = ({ text, email }: EmailButtonProps) => (
  <Button
    text={text}
    url={`mailto:${email}`}
    title={text} />
)

export default EmailButton
