module.exports = {
  siteMetadata: {
    title: 'West Point Real Estate',
    siteUrl: 'https://westpointrealtors.com',
    subtitle: 'A Real Estate Brokerage',
    email: 'westpointagents@gmail.com',
    address1: '8 Beverly Hills Boulevard',
    address2: 'Beverly Hills, Florida',
    contactNum1: '(352) 462-0414',
    contactNum2: '1 (800) 418-4261',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `West Point Realtors`,
        short_name: `wpr`,
        start_url: `/`,
        background_color: `#CCC`,
        theme_color: `#3B424D`,
        display: `minimal-ui`,
        // icon: `src/images/logo.svg`,
        legacy: false,
      },
    },
    `gatsby-plugin-netlify-cache`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": [
            "Cache-Control: public, max-age=31536000, immutable",
            "Content-Security-Policy: script-src 'self' 'unsafe-inline' https://*.gstatic.com https://*.googleapis.com https://*.maps.google.com https://www.google.com",
            "Referrer-Policy: same-origin",
            "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload",
          ],
          "/*.js": [
            "X-Content-Type-Options: nosniff",
          ],
          "/sw.js": [
            "Cache-Control: public, max-age=0, must-revalidate",
          ],
          "/*.html": [
            "Cache-Control: public, max-age=0, must-revalidate",
            "X-Frame-Options: DENY",
            "X-XSS-Protection: 1; mode=block",
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
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false, // Print Removed Selectors
        tailwind: false, // Enable tailwindcss support
        whitelist: [
          'whitelistclass', // Don't remove this selector
          'accordion',
          'accordion__item',
          'accordion__heading',
          'accordion__button',
          'accordion__panel',
        ],
        ignore: [] // Ignore file/folder
      }
    },
    `gatsby-plugin-offline`,
  ],
}
