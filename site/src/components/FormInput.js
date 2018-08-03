import React from 'react'

const FormInput = ({ classes, name, type, placeholder, autocomplete, length, required }) => (
  <input
    className={ classes ? classes : 'input' }
    name={name}
    type={type}
    placeholder={placeholder}
    autocomplete={autocomplete}
    maxlength={length}
    required={required}
  />
)

export default FormInput
