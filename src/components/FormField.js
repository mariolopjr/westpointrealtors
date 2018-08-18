import React from 'react'

import FormInput from './FormInput'

const FormField = ({
  classes,
  label,
  name,
  type,
  placeholder,
  autocomplete,
  length,
  required,
  value,
}) => (
  <div className="field">
    { label &&
    <label className="label">{label}</label>}
    <div className="control">
      <FormInput
        classes={classes}
        name={name}
        type={type}
        placeholder={placeholder}
        autocomplete={autocomplete}
        length={length}
        required={required}
        value={value}
      />
    </div>
  </div>
)

export default FormField
