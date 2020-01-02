const fs = require("fs");
const path = require("path");

const articleDirs = fs
  .readdirSync(path.join(__dirname, "content", "articles"))
  .filter(f =>
    fs.statSync(path.join(__dirname, "content", "articles", f)).isDirectory()
  );

module.exports = {
  siteMetadata: {
    title: "Desdevpro",
    siteUrl: "https://www.desdevpro.com",
    description: "Notes on my experiments with open hardware and software"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    ...articleDirs.map(subdir => ({
      resolve: "gatsby-source-filesystem",
      options: {
        name: "articles",
        path: `${__dirname}/content/articles/${subdir}`
      }
    })),
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "categories",
        path: `${__dirname}/content/categories`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: require.resolve("./plugins/gatsby-remark-copy-svg")
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 600,
              disableBgImage: true,
              showCaptions: false
            }
          }
        ]
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components"
  ]
};
