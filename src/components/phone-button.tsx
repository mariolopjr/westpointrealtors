import React from "react"

import Button from "./button"

interface PhoneButtonProps {
  type: string
  phone: string
}

const PhoneButton = ({ type, phone }: PhoneButtonProps) => (
  <Button
    text={`${type}: ${phone}`}
    url={`tel:${phone}`}
    title={`${type == "office" ? "Call" : "Fax"} at: ${phone}`} />
)

export default PhoneButton
