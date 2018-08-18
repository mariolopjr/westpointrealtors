module.exports = {
  siteMetadata: {
    title: 'West Point Real Estate',
    siteUrl: 'https://westpointrealtors.com',
    admin: 'https://app.contentful.com/',
    google_maps_api_key: process.env.GMAP_KEY,
    subtitle: 'A Real Estate Brokerage',
    email: 'westpointagents@gmail.com',
    address1: '8 Beverly Hills Boulevard',
    address2: 'Beverly Hills, Florida',
    contactNum1: '(352) 462-0414',
    contactNum2: '1 (800) 418-4261',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
        host: process.env.SPACE_HOST,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'westpoint',
        short_name: 'tm',
        start_url: '/',
        background_color: '#CCC',
        theme_color: '#3B424D',
        display: 'minimal-ui',
        icons: [
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    'gatsby-plugin-sri',
    'gatsby-plugin-offline',
  ],
}
