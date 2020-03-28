const path = require("path");

const articlesQuery = `
  query getArticles {
    allMdx(
      filter: {
        frontmatter: {
          type: {
            eq:"article"
          }
        }
      },
      sort: {
        order: DESC,
        fields: frontmatter___date
      },
      limit: 1000
    ) {
      edges {
        node {
          id
          excerpt(pruneLength:200)
          frontmatter {
            category
            coverImage {
              childImageSharp {
                sizes(maxWidth: 600) {
                  src
                }
              }
            }
            date
            status
            title
            path
            summary
          }
        }
      }
    }
  }
`;

const categoriesQuery = `
  query getCategories {
    allMdx(
      filter: {
        frontmatter: {
          type: {
            eq:"category"
          }
        }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            catId
            title
            path
          }
        }
      }
    }
  }
`;

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const [articles, categories] = await Promise.all([
    graphql(articlesQuery),
    graphql(categoriesQuery)
  ]);
  if (articles.errors || categories.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    console.dir(articles.errors, { depth: null });
    console.dir(categories.errors, { depth: null });
    return;
  }
  const catIndex = new Map();
  // Article Pages
  articles.data.allMdx.edges.forEach(({ node }) => {
    const articlePath = `/${node.frontmatter.category}/${node.frontmatter.path}`;
    if (node.frontmatter.status !== "hidden") {
      createPage({
        path: articlePath,
        component: path.resolve("src/templates/article.js"),
        context: {
          id: node.id
        }
      });
      // add to index
      if (node.frontmatter.status !== "draft") {
        const category = node.frontmatter.category;
        let catArticles = catIndex.get(category);
        if (!catArticles) {
          catArticles = [];
        }
        catArticles = [
          ...catArticles,
          {
            coverImage: node.frontmatter.coverImage,
            date: node.frontmatter.date,
            excerpt: node.excerpt,
            id: node.id,
            path: articlePath,
            summary: node.frontmatter.summary,
            title: node.frontmatter.title
          }
        ];
        catIndex.set(category, catArticles);
      }
    }
  });
  // Category Index
  categories.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve("src/templates/category.js"),
      context: {
        id: node.id,
        articles: catIndex.get(node.frontmatter.catId) || []
      }
    });
  });
};
