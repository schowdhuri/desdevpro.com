import React from "react";
import styled from "styled-components";

import { colors } from "../constants/theme";

const Figure = props => {
  const { svg, caption, children } = props;
  return <Fig svg={svg}>
    {children}
    {!caption || <figcaption>
      {caption}
    </figcaption>}
  </Fig>;
};

const Fig = styled.figure`
  margin: 2em 0;
  .gatsby-resp-image-wrapper {
    background-color: ${colors.cardBg};
    box-shadow: 1px 1px 4px ${colors.gray[1]};
    border: solid 1px #e3e3e4;
    cursor: pointer;
    padding: 4px;
  }
  a {
    position: relative;
  }
  p {
    margin: 0;
    padding: 0;
  }
  img {
    background-color: ${colors.cardBg};
    box-sizing: border-box;
  }
  figcaption {
    background-color: #e3e3e4;
    box-sizing: border-box;
    color: #606061;
    font-size: 0.85em;
    margin: 0 auto;
    max-width: 610px;
    padding: 20px 10px;
    width: 100%;
  }
  ${props => props.svg
    ? `
      img {
        border: solid 1px #e3e3e4;
        display: block;
        margin: 0 auto;
        padding: 4px;
        max-width: 610px;
        width: 100%;
      }
    `
    : ""}
`;

export default Figure;
