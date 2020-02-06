import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MagicGrid from "magic-grid";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import { colors, fontSize, copySizeMobile, medium } from "../constants/theme";

function Home(props) {
  const [ cssLayout, setCssLayout ] = useState(true);
  useEffect(() => {
    setCssLayout(false);
    const magicGrid = new MagicGrid({
      container: ".article-grid",
      animate: false,
      gutter: 20,
      static: true,
      useMin: true,
      maxColumns: 4
    });
    magicGrid.listen();
  }, []);
  const config = {
    title: "Desdevpro | Notes on my experiments with open hardware and software",
    meta: {
      description: "Desdevpro | Experiments in open hardware and software"
    }
  };
  return (
    <Layout config={config}>
      <Feed className={`article-grid ${cssLayout ? "css-layout" : ""}`}>
        {props.data.allMdx.edges.map(({ node }) => (
          <Article key={node.id}>
            {!node.frontmatter.coverImage || (
              <Cover.Wrapper
                to={`/${node.frontmatter.category}/${node.frontmatter.path}/`}
              >
                <Cover
                  src={node.frontmatter.coverImage.childImageSharp.resize.src}
                  alt={node.frontmatter.title}
                  loading="lazy"
                />
              </Cover.Wrapper>
            )}
            <Tag>#{node.frontmatter.tags[0]}</Tag>
            <Title>
              <Link
                to={`/${node.frontmatter.category}/${node.frontmatter.path}/`}
              >
                {node.frontmatter.title}
              </Link>
            </Title>
            <Summary>{node.excerpt}</Summary>
            <Misc>
              <i className="icon icon-calendar" />
              <Misc.Date>{node.frontmatter.date}</Misc.Date>
            </Misc>
          </Article>
        ))}
      </Feed>
    </Layout>
  );
}

const Cover = styled.img`
  display: block;
  height: 200px;
  object-fit: cover;
  transition: transform 0.5s;
  width: 100%;
`;
Cover.Wrapper = styled(Link)`
  border-radius: 2px 2px 0 0;
  display: block;
  height: 200px;
  overflow: hidden;
`;
const Article = styled.li`
  background: ${colors.cardBg};
  border-radius: 2px;
  box-shadow: 0 1px 8px ${colors.gray[1]};
  font-size: ${copySizeMobile};
  padding: 0;
  width: 90vw;

  @media ${medium} {
    width: 300px;
  }
  &:hover {
    ${Cover} {
      transform: scale(1.05);
    }
  }
`;
const Feed = styled.ul`
  list-style-type: none;
  margin: 2rem 1rem;
  padding: 0;

  &.css-layout {
    display: flex;
    flex-wrap: wrap;
    ${Article} {
      margin: 10px;
    }
  }
`;
const Tag = styled.label`
  color: ${colors.primary};
  display: block;
  font-weight: bold;
  margin-top: 12px;
  padding-left: 1rem;
  text-transform: capitalize;
  @media ${medium} {
    font-size: 0.85rem;
    text-transform: uppercase;
  }
`;
const Title = styled.h1`
  font-size: ${fontSize[5]};
  font-weight: 600;
  margin-top: -1rem;
  padding: 1rem;
  position: relative;

  &:after {
    background: none repeat scroll 0 0 ${colors.primary};
    bottom: 0;
    content: "";
    height: 4px;
    left: 0;
    position: absolute;
    width: 90px;
  }
  a {
    color: ${colors.gray[4]};
    text-decoration: none;
    transition: color 0.2s;
    &:hover,
    &:focus {
      color: ${colors.secondary};
    }
  }
`;
const Summary = styled.p`
  @media ${medium} {
    font-size: 0.9rem;
  }
  padding: 1rem;
`;
const Misc = styled.div`
  align-items: center;
  color: ${colors.gray[3]};
  display: flex;
  padding: 1rem;
`;
Misc.Date = styled.span`
  display: block;
  margin-left: 4px;
  @media ${medium} {
    font-size: 0.85rem;
  }
`;

export const pageQuery = graphql`
  query articleFeed {
    allMdx(
      limit: 10
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { type: { eq: "article" } } }
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            category
            coverImage {
              childImageSharp {
                resize(width: 300) {
                  src
                }
              }
            }
            date(formatString: "MMM DD, YYYY")
            path
            tags
            title
          }
        }
      }
    }
  }
`;

export default Home;
