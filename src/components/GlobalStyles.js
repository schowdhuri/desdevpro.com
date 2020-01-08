import { createGlobalStyle } from "styled-components";
import { darken } from "polished";
import {
  colors,
  fontSize,
  fontCopy,
  fontHeading,
  medium,
  copySizeSmall,
  copySizeMobile
} from "../constants/theme";

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
  @font-face {
    font-family: "ddpicons";
    src: url("/fonts/ddpicons/ddpicons.eot?25466695");
    src: url("/fonts/ddpicons/ddpicons.eot?25466695#iefix") format("embedded-opentype"),
         url("/fonts/ddpicons/ddpicons.woff?25466695") format("woff"),
         url("/fonts/ddpicons/ddpicons.ttf?25466695") format("truetype"),
         url("/fonts/ddpicons/ddpicons.svg?25466695#ddpicons") format("svg");
    font-weight: normal;
    font-style: normal;
  }
  /* Chrome hack: SVG is rendered more smooth in Windozze. 100% magic, uncomment if you need it. */
  /* Note, that will break hinting! In other OS-es font will be not as sharp as it could be */
  /*
  @media screen and (-webkit-min-device-pixel-ratio:0) {
    @font-face {
      font-family: "ddpicons";
      src: url("/fonts/ddpicons.svg?25466695#ddpicons") format("svg");
    }
  }
  */

  [class^="icon-"]:before, [class*=" icon-"]:before {
    font-family: "ddpicons";
    font-style: normal;
    font-weight: normal;
    speak: none;

    display: inline-block;
    text-decoration: inherit;
    width: 1em;
    margin-right: .2em;
    text-align: center;
    /* opacity: .8; */

    /* For safety - reset parent styles, that can break glyph codes*/
    font-variant: normal;
    text-transform: none;

    /* fix buttons height, for twitter bootstrap */
    line-height: 1em;

    /* Animation center compensation - margins should be symmetric */
    /* remove if not needed */
    margin-left: .2em;

    /* you can be more comfortable with increased icons size */
    /* font-size: 120%; */

    /* Uncomment for 3D effect */
    /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */
  }

  .icon-users:before { content: "\\e801"; } /* "" */
  .icon-mail:before { content: "\\e802"; } /* "" */
  .icon-mail-filled:before { content: "\\e803"; } /* "" */
  .icon-home:before { content: "\\e805"; } /* "" */
  .icon-info-circled:before { content: "\\e806"; } /* "" */
  .icon-angle-down:before { content: "\\e807"; } /* "" */
  .icon-globe:before { content: "\\e808"; } /* "" */
  .icon-book:before { content: "\\e809"; } /* "" */
  .icon-search:before { content: "\\e80b"; } /* "" */
  .icon-time:before { content: "\\e80c"; } /* "" */
  .icon-user:before { content: "\\e80d"; } /* "" */
  .icon-hamburger:before { content: "\\e80e"; } /* "" */
  .icon-tags:before { content: "\\e810"; } /* "" */
  .icon-angle-up:before { content: "\\e811"; } /* "" */
  .icon-tag:before { content: "\\e812"; } /* "" */
  .icon-cancel:before { content: "\\e813"; } /* "" */
  .icon-ok:before { content: "\\e814"; } /* "" */
  .icon-upload:before { content: "\\e815"; } /* "" */
  .icon-folder:before { content: "\\e816"; } /* "" */
  .icon-facebook:before { content: "\\e817"; } /* "" */
  .icon-twitter:before { content: "\\e818"; } /* "" */
  .icon-data-science:before { content: "\\e81a"; } /* "" */
  .icon-rocket:before { content: "\\e81b"; } /* "" */
  .icon-flask:before { content: "\\e81c"; } /* "" */
  .icon-calendar:before { content: "\\e81d"; } /* "" */
`;

const appCss = `
  * {
    box-sizing: border-box;
  }
  body {
    background-color: ${colors.background};
    color: ${colors.text};
    font-family: ${fontCopy};
    font-weight: 300;
    line-height: 1.6;
  }
  h1, h2, h3, h4, h5 {
    font-weight: 600;
    font-family: ${fontHeading};
    line-height: 1.25;
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
  a {
    color: ${colors.secondary};
  }
  .btn {
    background-color: ${colors.tertiary};
    border-radius: 2px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    color: #fff;
    display: inline-block;
    font-size: ${copySizeMobile};
    font-weight: 300;
    padding: 0.75rem 1.25rem;
    text-decoration: none;
    text-transform: uppercase;
    @media ${medium} {
      font-size: ${copySizeSmall};
    }
    &:hover {
      background-color: ${darken(0.1, colors.tertiary)};
      transition: background-color 0.5s;
    }
  }
  a.btn, a.btn:link, a.btn:focus, a.btn:visited {
    color: #fff;
  }
`;

export default createGlobalStyle`
  ${cssReset}
  ${fontFaces}
  ${appCss}
`;
