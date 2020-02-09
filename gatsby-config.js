module.exports = {
  siteMetadata: {
    title: `Clean&co`,
    description: `Schoonmaakbedrijf`,
    author: {
      name: 're:root',
      website: 'www.reroot.be'
    }, 
    telephone: '+32 477 705 210',
    email: 'info@clean-co.be',
    formspree: 'https://formspree.io/mayqakqe'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Playfair Display", "Inria Serif", "Poppins", "Dancing Script"],
        display: "swap",
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
