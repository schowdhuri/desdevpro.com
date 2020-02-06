import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link key="favicon" rel="shortcut icon" type="image/png" href="/favicon.png" />,
    <meta key="viewport-meta" name="viewport" content="width=device-width, initial-scale=1" />,
    <meta key="author" name="author" content="Subir Chowdhuri" />
  ]);
};
