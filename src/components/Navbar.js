import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import {
  small,
  medium,
  colors,
  navbarCollapsedWidth,
  navbarWidth,
  fontBrand
} from "../constants/theme";

function NavBar() {
  const [isMenuVisible, setMenuVisibility] = useState(false);
  const toggleMenu = () => {
    setMenuVisibility(!isMenuVisible);
  };
  return (
    <Nav>
      <BtnMenu className="icon icon-hamburger" onClick={toggleMenu}></BtnMenu>
      <Logo>
        <svg viewBox="0 0 304.7 81.162">
          <g transform="translate(-1.262,-973.124)">
            <path d="m50.916,1025.2c0-22.739,2.6003-49.859-36.076-50.076,0,0,30.668,1.1835,28.493,29.426,0,0,8.1146-3.4063-16.168-3.4063-23.42,0-23.903,0.8631-23.903,24.056,0,23.627,0.45143,24.056,23.29,24.056,24.572,0,24.363-0.7653,24.363-24.056z" />
            <text y="1040.3662" x="70.750862">
              Desdevpro
            </text>
          </g>
        </svg>
      </Logo>
      <Links
        show={isMenuVisible}
        itemProp="breadcrumb"
        itemScope
        itemType="http://schema.org/BreadcrumbList"
      >
        <li
          itemProp="itemListElement"
          itemScope
          itemType="http://schema.org/ListItem"
        >
          <Link to="/" activeClassName="active">
            <i className="icon icon-home"></i>
            <span itemProp="name">Home</span>
          </Link>
        </li>
        <li
          itemProp="itemListElement"
          itemScope
          itemType="http://schema.org/ListItem"
        >
          <Link
            itemProp="item"
            to="/projects"
            activeClassName="active"
            partiallyActive={true}
          >
            <i className="icon icon-flask"></i>
            <span itemProp="name">Projects</span>
          </Link>
        </li>
        <li
          itemProp="itemListElement"
          itemScope
          itemType="http://schema.org/ListItem"
        >
          <Link
            itemProp="item"
            to="/blog"
            activeClassName="active"
            partiallyActive={true}
          >
            <i className="icon icon-book"></i>
            <span itemProp="name">Articles</span>
          </Link>
        </li>
        <li
          itemProp="itemListElement"
          itemScope
          itemType="http://schema.org/ListItem"
        >
          <Link itemProp="item" to="/about" activeClassName="active">
            <i className="icon icon-info-circled"></i>
            <span itemProp="name">About</span>
          </Link>
        </li>
      </Links>
    </Nav>
  );
}

const Logo = styled.div`
  display: flex;
  @media ${medium} {
    display: block;
    margin: 20px 0 0 12px;
    width: 205px;
  }
  svg {
    @media ${small} {
      height: 55px;
    }
  }
  path {
    fill: ${colors.primary};
  }
  text {
    display: inline-block;
    fill: ${colors.gray[1]};
    font-family: ${fontBrand};
    font-size: 2rem;
    @media ${medium} {
      font-size: 2.25rem;
    }
  }
`;
const BtnMenu = styled.button`
  background: none;
  border: none;
  box-shadow: none;
  color: ${colors.gray[2]};
  float: right;
  font-size: 1.5rem;
  padding: 0;
  transform: translate(5px, 70%);
  @media ${medium} {
    display: none;
  }
`;
const Nav = styled.nav`
  background-color: ${colors.gray[5]};
  box-shadow: 2px 0 4px ${colors.gray[6]};
  overflow: hidden;
  padding: 0.5rem 1rem;
  position: fixed;
  transition: width 0.2s ease 0s;
  z-index: 9;

  left: 0;
  top: 0;
  right: 0;

  @media ${medium} {
    bottom: 0;
    box-shadow: none;
    display: block;
    left: 0;
    padding: 0;
    right: auto;
    top: 0;
    width: ${navbarCollapsedWidth};

    &:hover {
      width: ${navbarWidth};
      transition: width 0.3s;

      a {
        color: ${colors.gray[1]};
        transition: color 0.3s;
      }
    }
  }
`;

const Links = styled.ul`
  list-style-type: none;
  margin: 0 0 0 -0.5rem;
  padding: 0;

  ${props => (props.show ? "display: block;" : "display: none;")}

  @media ${medium} {
    display: block;
    margin: 50px 0;
  }

  & > li {
    border: 1px solid transparent;

    & > a {
      color: ${colors.gray[2]};
      display: block;
      line-height: 4em;
      padding-left: 0;
      text-decoration: none;
      text-transform: uppercase;
      white-space: nowrap;

      @media ${medium} {
        padding-left: 10px;
      }

      & > i {
        font-size: 1.7em;
        vertical-align: middle;
        display: inline-block;
        width: 50px;
      }
    }

    a.active,
    a.active:hover {
      color: ${colors.primary};
    }
    &:hover {
      background-color: ${colors.gray[5]};
      color: ${colors.gray[2]};
      transition: box-shadow 0.4s, background-color 0.4s;
      @media ${medium} {
        border-bottom: solid 1px ${colors.gray[3]};
        border-top: solid 1px ${colors.gray[3]};
        box-shadow: 0 0 4px ${colors.gray[4]};
      }
    }
  }
`;

export default NavBar;
