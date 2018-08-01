module.exports = {
  siteMetadata: {
    title: 'West Point Real Estate',
    subtitle: 'A Real Estate Brokerage',
    email: 'westpointagents@gmail.com',
    address1: '8 Beverly Hills Boulevard',
    address2: 'Beverly Hills, Florida',
    contactNum1: '(352) 462-0414',
    contactNum2: '1 (800) 418-4261',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-sass',
    'gatsby-plugin-purgecss',
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        contentTypes: [`property`, `type`, `status`],
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
