import React from "react";
import Helmet from "react-helmet";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, Link } from "gatsby";
import styled from "styled-components";

import Figure from "../components/Figure";
import Header from "../components/ArticleHeader";
import Layout from "../components/Layout";
import { colors, coverHeight, headerHeight, medium } from "../constants/theme";

const shortcodes = { Link, Figure };

function Article(props) {
  const mdx = props.data.mdx;
  const config = {
    title: mdx.frontmatter.title,
    meta: mdx.frontmatter.meta
  };
  return (
    <Layout config={config}>
      <Helmet>
        <meta name="author" content={mdx.frontmatter.author} />
      </Helmet>
      <Header
        title={mdx.frontmatter.title}
        coverImage={mdx.frontmatter.coverImage?.publicURL}
      />
      <Wrapper>
        <Content>
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
          </MDXProvider>
          {mdx.frontmatter.date}
        </Content>
        <TableOfContents>toc</TableOfContents>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.article`
  background: ${colors.background};
  padding-top: 4em;
  position: relative;
  z-index: 5;
  margin-top: ${coverHeight};
  margin-top: calc(${coverHeight} + ${headerHeight});
  @media ${medium} {
    margin-top: ${coverHeight};
  }

  h2,
  h3,
  h4,
  h5 {
    margin: 2em 0 1em;
  }
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 50rem;
  width: 90vw;
`;
const TableOfContents = styled.div``;

export const pageQuery = graphql`
  query getArticle($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        summary
        author
        date(formatString: "DD MMM, YYYY")
        coverImage {
          publicURL
        }
        meta {
          description
          keywords
        }
      }
    }
  }
`;

export default Article;
