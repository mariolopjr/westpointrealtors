import React from 'react'
import {
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion'

import File from './File'

const FileCategory = ({ name, files }) => (
  <AccordionItem>
    <AccordionItemTitle>
      <h3>{name}</h3>
    </AccordionItemTitle>
    <AccordionItemBody>
      <div className="field is-grouped is-grouped-multiline">
        {files.map(document => (
          <File
            key={document.node.id}
            name={document.node.name}
            type={document.node.file.localFile.ext}
            url={document.node.file.localFile.publicURL}
          />
        ))}
      </div>
    </AccordionItemBody>
  </AccordionItem>
)

export default FileCategory
