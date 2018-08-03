import React from 'react'
import { graphql } from 'gatsby'
import { Accordion } from 'react-accessible-accordion'

import Layout from '../components/Layout'
import FileCategory from '../components/FileCategory'

import 'react-accessible-accordion/dist/fancy-example.css';

const FormsPage = ({ data }) => (
  <Layout>
    <div className="container columns docs">
      <div className="column">
        <article class="message is-info">
          <div class="message-body">
            To view, complete, and print fillable forms you will need to use Adobe Acrobat Reader,
            Standard, or Pro 9.0 (or later) for PDF files OR Microsoft Office for DOC files.
            Adobe Acrobat Reader is available for free and can be downloaded from the following
            web site: <a href="http://get.adobe.com/reader/" target="_blank">Adobe Reader</a>.
            Browsers like Google Chrome and Firefox use built-in PDF viewers that are not
            supported for use with the fillable forms.
          </div>
        </article>
      </div>
      <div className="column is-two-thirds">
        <Accordion>
          {data.allStrapiCategory.edges.map(document => (
              <FileCategory
                key={document.node.id}
                name={document.node.name}
                files={data.allStrapiForm.edges.filter(file => ( file.node.category.name === document.node.name ))}
              />
            ))}
        </Accordion>
      </div>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query FormsQuery {
    allStrapiCategory(
      sort: {
        fields: order
      }
    ) {
      edges {
        node {
          id
          name
        }
      }
    }
    allStrapiForm(
      sort: {
        fields: category___order
      }
    ) {
      edges {
        node {
          id
          name
          file {
            id
            ext
            url
          }
          form {
            id
            relativePath
          }
          category {
            name
          }
        }
      }
    }
  }
`

export default FormsPage
