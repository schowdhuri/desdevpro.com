import React from "react";
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout";

const shortcodes = { Link } // Provide common components here

export default function CategoryIndex (props) {
  const mdx = props.data.mdx;
  const articles = props.pageContext.articles;
  const config = {
    title: mdx.frontmatter.title,
    meta: mdx.frontmatter.meta
  };
  return (<Layout config={config}>
    <h1>{mdx.frontmatter.title}</h1>
    <MDXProvider components={shortcodes}>
      <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
    </MDXProvider>
    {articles.map(article => (<article key={article.id}>
      <h2>{article.title}</h2>
      <p dangerouslySetInnerHTML={{__html: article.summary}} />
      <a href={article.path}>Read More</a>
    </article>))}
  </Layout>);
}

export const pageQuery = graphql`
  query getCategory($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        meta {
          description
          keywords
        }
      }
    }
  }
`;
