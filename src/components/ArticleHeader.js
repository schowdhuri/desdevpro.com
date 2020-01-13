import React from "react";
import styled from "styled-components";

import {
  coverHeight,
  colors,
  fontSize,
  medium,
  navbarCollapsedWidth,
  contentWidth,
  contentWidthMax
} from "../constants/theme";

function Header(props) {
  const { title, coverImage } = props;
  return (
    <Wrapper coverImage={coverImage}>
      <Title>{title}</Title>
      <Overlay />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  background-color: ${colors.gray[4]};
  display: flex;
  align-items: center;
  justify-content: center;
  ${props =>
    props.coverImage
      ? `
      background-image: url(${props.coverImage});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    `
      : ""}
  height: ${coverHeight};
  left: 0;
  position: fixed;
  right: 0;
  top: 70px;
  z-index: 2;
  @media ${medium} {
    top: 0;
  }
`;
const Title = styled.h1`
  color: ${colors.gray[0]};
  font-size: ${fontSize[2]};
  font-weight: 400;
  max-width: ${contentWidthMax};
  position: relative;
  text-shadow: 2px 2px 6px #000;
  width: ${contentWidth};
  z-index: 2;
  @media ${medium} {
    font-size: ${fontSize[0]};
    margin-left: ${navbarCollapsedWidth};
    padding: 0 1rem;
  }
`;
const Overlay = styled.div`
  background: ${colors.gray[5]} url("/images/Pattern1.png") repeat;
  bottom: 0;
  left: 0;
  opacity: 0.5;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
`;

export default Header;
