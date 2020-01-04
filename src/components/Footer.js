import React from "react";
import styled from "styled-components";

import {
  small,
  medium,
  colors,
  footerHeight,
  leftMargin
} from "../constants/theme";

function Footer() {
  return (<Wrapper>
    <p class="license">
      <LicenseLink rel="license" href="https://creativecommons.org/licenses/by/4.0/">
        <img alt="Creative Commons License" src="https://i.creativecommons.org/l/by/4.0/88x31.png" />
      </LicenseLink>
      <span>
        Except where otherwise noted, content on this site is licensed under
        {" "}
        <a rel="license" href="https://creativecommons.org/licenses/by/4.0/">
          Creative Commons Attribution 4.0 International License
        </a>.
      </span>
    </p>
  </Wrapper>)
}

const Wrapper = styled.footer`
  align-items: center;
  background: ${colors.gray[1]};
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2) inset;
  color: ${colors.gray[3]};
  display: flex;
  padding: 40px 10px;
  position: relative;
  z-index: 10;
  @media ${medium} {
    padding: 0 0 0 ${leftMargin};
    height: ${footerHeight};
  }

  .license {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    text-align: center;
    @media ${medium} {
      flex-direction: row;
      font-size: 0.85em;
      text-align: left;
    }
  }
`;

const LicenseLink = styled.a`
  margin: 0 auto 30px;
  @media ${medium} {
    margin: 0 10px 0 0;
  }
  img {
    border:none;
    display: block;
  }
`;

export default Footer;
