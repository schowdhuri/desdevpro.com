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
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-57423728-1",
        head: false,
        anonymize: false,
        respectDNT: true,
        exclude: []
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
          },
          {
            resolve: "gatsby-remark-vscode",
            options: {
              theme: "Monokai"
            }
          },
          {
            resolve: "@weknow/gatsby-remark-codepen",
            options: {
              theme: "dark",
              height: 500
            }
          },
          "gatsby-remark-lazy-load"
        ],
        rehypePlugins: [require("rehype-slug")]
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components"
  ]
};
