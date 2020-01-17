module.exports = {
  siteMetadata: {
    title: `Parallel Frontend Dev Assessment`,
    description: `Test for the frontend develop positions at Parallel.`,
    author: `Ben Redden`,
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
        background_color: `#bffb7b`,
        theme_color: `#bffb7b`,
        display: `minimal-ui`,
        icon: `src/images/parallel-icon.png`
      },
    },
  ],
}
