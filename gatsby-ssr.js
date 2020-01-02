import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <title key="title">Desdevpro | Notes on my experiments with open hardware and software</title>,
    <link key="favicon" rel="shortcut icon" type="image/png" href="/favicon.png" />,
    <meta key="viewport-meta" name="viewport" content="width=device-width, initial-scale=1" />
  ]);
};
