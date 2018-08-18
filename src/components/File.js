import React from 'react'

const File = ({ name, type, url }) => (
  <>
    <div className="control">
      <div className="tags has-addons">
        <span className="tag is-dark">{type.substring(1)}</span>
        <a
          href={url}
          className="tag is-info"
          rel="noopener noreferrer"
          target="_blank"
        >
          {name}
        </a>
      </div>
    </div>
  </>
)

export default File
