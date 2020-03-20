import React from "react";
import Helmet from "react-helmet";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import { lighten } from "polished";

import Figure from "../components/Figure";
import Header from "../components/ArticleHeader";
import Layout from "../components/Layout";
import { colors, coverHeight, medium, small } from "../constants/theme";

const shortcodes = { Link, Figure };

function Article(props) {
  const mdx = props.data.mdx;
  const config = {
    title: `${mdx.frontmatter.title} | ${mdx.frontmatter.meta.author} | Desdevpro`,
    meta: mdx.frontmatter.meta
  };
  return (
    <Layout config={config}>
      <Helmet>
        <meta name="author" content={mdx.frontmatter.meta.author} />
      </Helmet>
      <Header
        title={mdx.frontmatter.title}
        coverImage={mdx.frontmatter.coverImage?.publicURL}
      />
      <Wrapper>
        <Content>
          <Metadata>
            <dl>
              <dt>
                <i className="icon icon-calendar" />
                Published:
              </dt>
              <dd>{mdx.frontmatter.date}</dd>
            </dl>
            {mdx.frontmatter.updated &&
            mdx.frontmatter.updated !== mdx.frontmatter.date ? (
              <dl>
                <dt>
                  <i className="icon icon-calendar" />
                  Last updated:
                </dt>
                <dd>{mdx.frontmatter.updated}</dd>
              </dl>
            ) : null}
          </Metadata>
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
          </MDXProvider>
        </Content>
        <TableOfContents></TableOfContents>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.article`
  background: ${colors.background};
  padding: 2rem 0 4rem;
  position: relative;
  z-index: 5;
  margin-top: ${coverHeight};

  @media ${medium} {
    padding: 4rem 1rem;
  }
  h2,
  h3,
  h4,
  h5 {
    margin: 1.5em 0 0.5em;
  }
  .image-center {
    display: block;
    margin: 20px auto;
  }
  ol {
    list-style: decimal;
  }
  ul {
    list-style: square;
  }
  ol,
  ul {
    margin: 10px 0;
    padding-left: 2rem;
  }
  p {
    margin: 10px 0;
  }
  strong {
    font-weight: 700;
  }
  em {
    font-style: italic;
  }
  code {
    font-family: monospace;
    font-size: 16px;
    @media ${medium} {
      font-size: 14px;
    }
  }
  blockquote {
    background-color: ${colors.gray[0]};
    border-radius: 2px;
    box-shadow: 2px 0 16px -4px rgba(128, 128, 128, 0.2);
    // border-left: solid 4px ${colors.tertiary};
    color: ${colors.gray[4]};
    margin: 40px 0;
    padding: 40px 40px 40px 60px;
    position: relative;
    z-index: 1;
    &::before {
      background: ${colors.tertiary};
      content: " ";
      display: block;
      left: 10px;
      height: 32px;
      mask: url("/images/quote.svg");
      position: absolute;
      top: 10px;
      transform: scale(-1);
      width: 32px;
      z-index: 2;
    }
    &::after {
      background: ${colors.tertiary};
      bottom: 10px;
      content: " ";
      height: 32px;
      mask: url("/images/quote.svg");
      position: absolute;
      right: 10px;
      width: 32px;
      z-index: 2;
    }
  }
  hr {
    border: none;
    background-color: ${colors.gray[2]};
    height: 1px;
    margin: 1rem 0;
  }
  table.table {
    border-collapse: collapse;
    font-size: 0.9rem;
    width: 100%;

    th {
      font-weight: bold;
      padding: 12px 10px;
    }
    td {
      padding: 6px 10px;
    }
  }
  .table-bordered {
    border-radius: 2px;
    box-shadow: 1px 2px 16px -4px ${colors.gray[2]};
    overflow: hidden;
  }
  .table-striped {
    th {
      background-color: ${colors.gray[1]};
      text-align: left;
    }
    tbody tr:nth-child(odd) td {
      background-color: ${colors.gray[0]};
    }
  }
  .table-hover tbody tr:hover td {
    background-color: ${lighten(0.4, colors.tertiary)};
  }
  .text-center, th.text-center {
    text-align: center;
  }
  .text-right, th.text-right {
    text-align: right;
  }
`;
const Metadata = styled.section`
  color: ${colors.gray[3]};
  margin-bottom: 2rem;
  @media ${medium} {
    display: flex;
    font-size: 0.9rem;
  }
  dl {
    display: flex;
    margin-bottom: 10px;
    text-transform: uppercase;

    @media ${small} {
      flex-wrap: wrap;
      dt:nth-child(3n) {
        flex-basis: 100%;
        margin-top: 20px;
      }
    }
  }
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
        coverImage {
          publicURL
        }
        date(formatString: "MMM DD, YYYY")
        meta {
          author
          description
          keywords
        }
        summary
        title
        updated(formatString: "MMM DD, YYYY")
      }
    }
  }
`;

export default Article;
