module.exports = {
  siteMetadata: {
    title: 'West Point Real Estate',
    siteUrl: 'https://westpointrealtors.com',
    description: 'A Real Estate Brokerage',
    slogan: 'Your next home, forever.',
    phone: '352-462-0414',
    fax: '800-418-4261',
    email: 'westpointagents@gmail.com',
    gmaps: 'https://www.google.com/maps/place/8+Beverly+Hills+Blvd,+Beverly+Hills,+FL+34465/@28.9267832,-82.4614496,17z/',
    hud: 'https://www.hudhomestore.com',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/images`,
        name: 'images',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `West Point Realtors`,
        short_name: `wpr`,
        start_url: `/`,
        background_color: `#CCC`,
        theme_color: `#3B424D`,
        display: `minimal-ui`,
        icon: `static/images/logo.png`,
        legacy: false,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sri`
  ],
}
