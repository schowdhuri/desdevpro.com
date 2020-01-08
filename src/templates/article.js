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
          <Dates>
            <dt>Published:</dt>
            <dd>{mdx.frontmatter.date}</dd>
            {!mdx.frontmatter.updated || (
              <React.Fragment>
                <dt>Last updated:</dt>
                <dd>{mdx.frontmatter.updated}</dd>
              </React.Fragment>
            )}
          </Dates>
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
          </MDXProvider>
          {mdx.frontmatter.date}
        </Content>
        <TableOfContents></TableOfContents>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.article`
  background: ${colors.background};
  padding: 4rem 0;
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
    margin: 1.5em 0 0.5em;
  }
`;
const Dates = styled.dl`
  color: ${colors.gray[3]};
  display: flex;
  margin-bottom: 2rem;

  dt {
    font-weight: 600;
    margin-right: 5px;
  }
  dd {
    margin-right: 1em;
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
        date(formatString: "MMM DD, YYYY")
        updated(formatString: "MMM DD, YYYY")
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
