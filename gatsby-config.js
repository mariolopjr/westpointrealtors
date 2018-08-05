module.exports = {
  siteMetadata: {
    title: 'West Point Real Estate',
    siteUrl: 'https://api.westpointrealtors.com',
    admin: 'https://admin.westpointrealtors.com',
    api: 'http://localhost:1337',
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
    'gatsby-plugin-purgecss',
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://api.westpointrealtors.com`,
        contentTypes: [`affiliate`, `category`, `form`, `property`, `type`, `status`],
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
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: "",
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ["/preview/**", "/admin/"],
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*': [
            `Content-Security-Policy: script-src 'self' 'unsafe-inline'`,
            `Referrer-Policy: same-origin`,
            `Expect-CT: enforce,max-age=604800`,
          ],
        },
        allPageHeaders: [],
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
        transformHeaders: (headers, path) => headers,
        generateMatchPathRewrites: true,
      },
    },
  ],
}
