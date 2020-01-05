import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import GlobalStyles from "./GlobalStyles";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { footerHeight, small, navbarCollapsedWidth } from "../constants/theme";

function Layout(props) {
  const { config, children } = props;
  return (
    <React.Fragment>
      <GlobalStyles />
      <Navbar />
      <Main>
        <Helmet>
          <title>{config.title}</title>
          <meta name="description" content={config.meta.description} />
          <meta name="keywords" content={config.meta.keywords} />
        </Helmet>
        {children}
      </Main>
      <Footer />
    </React.Fragment>
  );
}

const Main = styled.main`
  min-height: 100vh;
  min-height: calc(100vh - ${footerHeight});
  padding-left: ${navbarCollapsedWidth};
  @media ${small} {
    padding-top: 2rem;
    padding-left: 0;
  }
`;

export default Layout;
