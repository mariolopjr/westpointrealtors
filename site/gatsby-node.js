/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const slugify = require(`slugify`)

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for article nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      return result
    })
  )
})

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const getProperties = makeRequest(graphql, `
    {
      allStrapiProperty {
        edges {
          node {
            id
            address
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiProperty.edges.forEach(({ node }) => {
      createPage({
        path: `/${slugify(node.address, { lower: true })}`,
        component: path.resolve(`src/pages/property.js`),
        context: {
          id: node.id,
        },
      })
    })
  })

  // Query for recipe nodes to use in creating pages.
  return Promise.all([
    getProperties,
  ])
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if ( node.internal.type === 'StrapiProperty' ) {
    createNodeField({
      node,
      name: 'slug',
      value: `/${slugify(node.address, { lower: true })}`,
    })
  }
}
