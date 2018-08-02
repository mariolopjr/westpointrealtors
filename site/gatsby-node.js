/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const slugify = require(`slugify`)
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
const config = require('./gatsby-config')

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
  const { createPage } = actions

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

exports.onCreateNode = async ({ node, actions, store, cache }) => {
  const { createNode, createNodeField } = actions

  if ( node.internal.type === 'StrapiProperty' ) {
    createNodeField({
      node,
      name: 'slug',
      value: `/${slugify(node.address, { lower: true })}`,
    })

    createNodeField({
      node,
      name: 'seo_description',
      value:
        `This home has ${node.pictures.length}` +
        ' photos of this ' +
        `${Number(Math.round(node.price + 'e2') + 'e-2').toFixed(2)} ` +
        `${node.bedrooms} bed, ${node.bathrooms} bath, ` +
        `${node.home_size} sqft ${node.type.name} located ` +
        `at ${node.address} built in ${new Date(node.year).getUTCFullYear()}.`,
    })

    for ( const picture of node.pictures ) {
      createNodeField({
        node,
        name: 'test',
        value: config.siteMetadata.api + picture.url,
      })

      const fileNode = await createRemoteFileNode({
        url: config.siteMetadata.api + picture.url,
        store,
        cache,
        createNode,
        createNodeId: id => `image-sharp-${id}`,
      })

      if (fileNode) {
        node.images___NODE = fileNode.id
      }
    }
  }
}
