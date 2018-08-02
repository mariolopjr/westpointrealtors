import React from 'react'

const Affiliate = ({ url, name }) => (
  <div className="column">
    <img
      src={url}
      alt={name}
    />
  </div>
)

export default Affiliate
