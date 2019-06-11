import React from "react"

import FormInput from "./FormInput"

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
  onChange,
}) => (
  <div className="field">
    {label && <label className="label">{label}</label>}
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
        onChange={onChange}
      />
    </div>
  </div>
)

export default FormField
