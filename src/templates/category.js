import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/Layout";
import {
  medium,
  fontSize,
  colors,
  copySizeMobile,
  fontCopy,
  contentWidth
} from "../constants/theme";

function CategoryIndex(props) {
  const mdx = props.data.mdx;
  const articles = props.pageContext.articles;
  const config = {
    title: `Desdevpro | ${mdx.frontmatter.title}`,
    meta: mdx.frontmatter.meta
  };
  return (
    <Layout config={config}>
      <Wrapper>
        <Title>{mdx.frontmatter.title}</Title>
        {articles.map(article => (
          <Article key={article.id}>
            {!article.coverImage || (
              <Cover
                src={article.coverImage.childImageSharp?.sizes?.src}
                alt={article.title}
                loading="lazy"
              />
            )}
            <Preview>
              <h2>{article.title}</h2>
              <Summary dangerouslySetInnerHTML={{ __html: article.summary }} />
              <Link className="btn" to={article.path}>
                Read More
              </Link>
            </Preview>
          </Article>
        ))}
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  padding: 1rem;
  @media ${medium} {
    padding: 0;
  }
`;

const Title = styled.h1`
  font-size: ${fontSize[2]};
  font-weight: 300;
  line-height: 1.6em;
  margin: 70px auto 40px;
  max-width: 40rem;
  position: relative;
  text-transform: uppercase;
  width: ${contentWidth};

  @media ${medium} {
    font-size: ${fontSize[0]};
    margin: 80px auto;
  }
  &:after {
    background: none repeat scroll 0 0 ${colors.primary};
    bottom: -15px;
    content: "";
    height: 4px;
    left: 0;
    position: absolute;
    width: 90px;
  }
`;

const Article = styled.article`
  background: ${colors.cardBg};
  border-radius: 2px;
  box-shadow: 0 1px 4px -2px rgba(0, 0, 0, 0.3);
  margin: 40px auto;
  max-width: 40rem;
  font-size: ${copySizeMobile};
  padding: 0;
  width: ${contentWidth};

  *:first-child {
    margin-top: 0;
  }
  em {
    font-style: italic;
  }
  strong {
    font-weight: bold;
  }
`;

const Preview = styled.section`
  padding: 20px 10px;
  @media ${medium} {
    padding: 50px 60px;
  }
  h2 {
    font-family: ${fontCopy};
    font-size: ${fontSize[5]};
    margin-bottom: 1rem;
  }
`;

const Summary = styled.div`
  padding: 0.5rem 0 1rem;
`;

const Cover = styled.img`
  border-radius: 2px 2px 0 0;
  display: block;
  height: 300px;
  object-fit: cover;
  width: 100%;
`;

export const pageQuery = graphql`
  query getCategory($id: String!) {
    mdx(id: { eq: $id }) {
      id
      excerpt
      frontmatter {
        title
        summary
        meta {
          description
          keywords
        }
      }
    }
  }
`;

export default CategoryIndex;
