import { createGlobalStyle } from "styled-components";
import { colors, fontSize, medium } from "../constants/theme";

const cssReset = `
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

const fontFaces = `
  @font-face {
    font-family: "vezuslight";
    src: url("/fonts/vezus/tour_de_force_-_vezus-light-webfont.eot");
    src: url("/fonts/vezus/tour_de_force_-_vezus-light-webfont.eot?#iefix") format("embedded-opentype"),
         url("/fonts/vezus/tour_de_force_-_vezus-light-webfont.woff2") format("woff2"),
         url("/fonts/vezus/tour_de_force_-_vezus-light-webfont.woff") format("woff"),
         url("/fonts/vezus/tour_de_force_-_vezus-light-webfont.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "corbertregular";
    font-style: normal;
    font-weight: normal;
    src: url("/fonts/corbert/corbert_regular_regular-webfont.eot?#iefix") format("embedded-opentype"),
         url("/fonts/corbert/corbert_regular_regular-webfont.woff") format("woff"),
         url("/fonts/corbert/corbert_regular_regular-webfont.ttf") format("truetype"),
         url("/fonts/corbert/corbert_regular_regular-webfont.svg#corbertregular") format("svg");
  }
  @font-face {
    font-family: "Clear Sans Light";
    src: url("/fonts/clear-sans/ClearSans-Light.eot?12387945");
    src: url("/fonts/clear-sans/ClearSans-Light.eot?12387945#iefix") format("embedded-opentype"),
         url("/fonts/clear-sans/ClearSans-Light.woff?12387945") format("woff"),
         url("/fonts/clear-sans/ClearSans-Light.ttf?12387945") format("truetype"),
         url("/fonts/clear-sans/ClearSans-Light.svg?12387945#ClearSans-Light") format("svg");
    font-weight: normal;
    font-style: normal;
  }
`;

const appCss = `
  body {
    color: ${colors.text};
    font-family: "Clear Sans Light", sans-serif, sans;
    font-weight: 300;
    line-height: 1.5;
  }
  h1, h2, h3, h4, h5 {
    font-weight: 600;
    font-family: "corbertregular", sans-serif, sans;
    line-height: 1.1;
  }
  h1 {
    font-size: ${fontSize[3]};
  }
  h2 {
    font-size: ${fontSize[4]};
    @media ${medium} {
      font-size: ${fontSize[3]};
    }
  }
  h3 {
    font-size: ${fontSize[3]};
    @media ${medium} {
      font-size: ${fontSize[4]};
    }
  }
  h4 {
    font-size: ${fontSize[6]};
  }
  h5 {
    font-size: ${fontSize[7]};
  }
`;

export default createGlobalStyle`
  ${cssReset}
  ${fontFaces}
  ${appCss}
`;
