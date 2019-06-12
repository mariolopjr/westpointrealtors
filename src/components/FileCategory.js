import React from "react"
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

import File from "./File"

const FileCategory = ({ name, files }) => (
  <AccordionItem>
    <AccordionItemHeading>
      <AccordionItemButton>
        <h3>{name}</h3>
      </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
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
    </AccordionItemPanel>
  </AccordionItem>
)

export default FileCategory
