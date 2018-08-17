const path = require(`path`)
const slugify = require(`slugify`)
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
const config = require('./gatsby-config')

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
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
      allContentfulProperties {
        edges {
          node {
            address
            fields {
              slug
            }
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
    result.data.allContentfulProperties.edges.forEach(({ node }) => {
      if ( node !== null ) {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`src/templates/property.js`),
          context: {},
        })
      }
    })
  })

  // Query for recipe nodes to use in creating pages.
  return Promise.all([
    getProperties,
  ])
}

exports.onCreateNode = async ({ node, actions, store, cache }) => {
  const { createNode, createNodeField } = actions

  if (
    node !== null
    && node.internal !== null
    && node.internal.type !== null
    && node.internal.type === 'ContentfulProperties'
  ) {
    createNodeField({
      node,
      name: 'slug',
      value: `/properties/${slugify(node.address, { lower: true })}`,
    })

    // createNodeField({
    //   node,
    //   name: 'seo_description',
    //   value:
    //     `This home has ${node.photos.length}` +
    //     ' photos of this ' +
    //     `${Number(Math.round(node.price + 'e2') + 'e-2').toFixed(2)} ` +
    //     `${node.bedrooms} bed, ${node.bathrooms} bath, ` +
    //     `${node.home_size} sqft ${node.type.name} located ` +
    //     `at ${node.address} built in ${new Date(node.year).getUTCFullYear()}.`,
    // })

    // for ( const picture of node.pictures ) {
    //   const fileNode = await createRemoteFileNode({
    //     url: config.siteMetadata.api + picture.url,
    //     store,
    //     cache,
    //     createNode,
    //     createNodeId: id => `property-image-${picture.id}`,
    //   })

    //   if (fileNode) {
    //     picture.localFile___NODE = fileNode.id
    //   }
    // }
  }

  // if (
  //   node !== null
  //   && node.internal !== null
  //   && node.internal.type !== null
  //   && node.internal.type === 'StrapiForm'
  // ) {
  //   const fileNode = await createRemoteFileNode({
  //     url: config.siteMetadata.api + node.file.url,
  //     store,
  //     cache,
  //     createNode,
  //     createNodeId: id => `form-file-${node.id}`,
  //   })

  //   if (fileNode) {
  //     node.localFile___NODE = fileNode.id
  //   }
  // }
}
