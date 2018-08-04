import React from 'react'
import { Link } from 'gatsby'

const File = ({ name, type, url }) => (
  <>
    <div className="control">
      <div className="tags has-addons">
        <span className="tag is-dark">{type.substring(1)}</span>
        <Link
          to={url}
          className="tag is-info"
          target="_blank"
        >
          {name}
        </Link>
      </div>
    </div>
  </>
)

export default File
