import React from "react";
import Helmet from "react-helmet";
import GlobalStyles from "./GlobalStyles";

function Layout(props) {
  const { config, children } = props;

  console.log(GlobalStyles, Helmet)
  return (
    <React.Fragment>
      <GlobalStyles />
      <main>
        <Helmet>
          <title>{config.title}</title>
          <meta name="description" content={config.meta.description} />
          <meta name="keywords" content={config.meta.keywords} />
        </Helmet>
        {children}
      </main>
    </React.Fragment>
  );
}

export default Layout;
