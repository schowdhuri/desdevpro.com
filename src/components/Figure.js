import React from "react";
import styled from "styled-components";

import { colors } from "../constants/theme";

const Figure = props => {
  const { svg, caption, children, width, unoptimized} = props;
  return <Fig svg={svg} hasCaption={Boolean(caption)} width={width} unoptimized={unoptimized}>
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
    border: solid 1px #e3e3e4;
    border-radius: 2px;
    box-shadow: 1px 1px 4px ${colors.gray[1]};
    cursor: pointer;
    padding: 4px;
    ${props => props.hasCaption ? `
      border-bottom: none;
      border-radius: 2px 2px 0 0;
    ` : ""}
  }
  a {
    position: relative;
  }
  p {
    margin: 0 !important;
    padding: 0 !important;
  }
  img {
    background-color: ${colors.cardBg};
    box-sizing: border-box;
    ${props => props.unoptimized
      ? `
        border: solid 1px ${colors.gray[1]};
        border-bottom: none;
        left: 50%;
        max-width: 100%;
        padding: 4px;
        position: relative;
        transform: translateX(-50%);
      `
      : ""}
  }
  figcaption {
    background-color: ${colors.cardBg};
    border: solid 1px ${colors.gray[1]};
    border-radius: 0 0 2px 2px;
    border-top: none;
    box-shadow: 1px 3px 4px ${colors.gray[1]};
    box-sizing: border-box;
    color: #606061;
    font-size: 0.85em;
    margin: 0 auto;
    max-width: ${props => props.width ? `${props.width+2}px` : '600px'};
    padding: 22px 10px 20px;
    position: relative;
    ${props => props.unoptimized ? "top: -8px;" : "top: -2px;"}
    width: 100%;
    z-index: 2;
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
