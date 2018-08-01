import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

const PropertyPage = ({ data }) => (
  <Layout>
    { data.strapiProperty.title }
  </Layout>
)

export default PropertyPage
