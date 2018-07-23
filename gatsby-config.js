module.exports = {
  siteMetadata: {
    title: 'Blah Blah Fake Title',
  },
  plugins: [
    'gatsby-plugin-glamor',
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/pages`,
        name: 'pages',
      },
    },
    'gatsby-transformer-remark',
  ],
};
