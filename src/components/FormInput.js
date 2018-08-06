import React from 'react'

const FormInput = ({ classes, name, type, placeholder, autocomplete, length, required }) => (
  <input
    className={ classes ? classes : 'input' }
    name={name}
    type={type}
    placeholder={placeholder}
    autoComplete={autocomplete}
    maxLength={length}
    required={required}
  />
)

export default FormInput
