const path = require("path");

const articlesQuery = `
  query getArticles {
    allMdx(filter: {frontmatter: {type: {eq:"article"}}}, limit: 1000) {
      edges {
        node {
          id
          excerpt(pruneLength:200)
          frontmatter {
            title
            summary
            path
            category
            coverImage {
              childImageSharp {
                sizes(maxWidth: 600) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;

const categoriesQuery = `
  query getCategories {
    allMdx(filter: {frontmatter: {type: {eq:"category"}}}) {
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
    createPage({
      path: articlePath,
      component: path.resolve("src/templates/article.js"),
      context: {
        id: node.id
      }
    });
    // add to index
    const category = node.frontmatter.category;
    let catArticles = catIndex.get(category);
    if (!catArticles) {
      catArticles = [];
    }
    catArticles = [
      ...catArticles,
      {
        id: node.id,
        title: node.frontmatter.title,
        summary: node.frontmatter.summary,
        excerpt: node.excerpt,
        path: articlePath,
        coverImage: node.frontmatter.coverImage
      }
    ];
    catIndex.set(category, catArticles);
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
