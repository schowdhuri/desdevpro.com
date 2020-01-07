import React from "react";
import Helmet from "react-helmet";
// import { graphql, Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/Layout";
import {
  colors,
  fontSize,
  contentWidth,
  contentWidthMax,
  medium
} from "../constants/theme";

function About() {
  const config = {
    title: "About Desdevpro",
    meta: "About Desdevpro"
  };
  return (
    <Layout config={config}>
      <Helmet>
        <meta name="author" content={"Subir"} />
      </Helmet>
      <Article>
        <Title>About</Title>
        <p>
          I conceived Desdevpro way back in 2004, starting out as an amateur
          graphics and web designer. The origins can be traced back to early
          2003 when a group of like-minded coding enthusiasts got together to
          work on project ideas.
        </p>

        <p>
          What started as an after-school hobby club, with purely academic
          intent, attracted a flurry of commercial projects. We went
          professional, under the banner of 'Desdevpro'. Starting with desktop
          application development, we moved to the web, ventured into the world
          of CG with 3D modeling and animation, and also toyed with robotics.
          Commercial operations at Desdevpro ceased in 2010.
        </p>

        <p>
          Now, this serves as my space to share notes from my experiments with
          all kinds of tech, as I juggle my time between working a day job as a
          web-developer and my pet projects.
        </p>

        <Author>
          <img src="/images/Subir.jpg" alt="Subir Chowdhuri" />
          <p>
            I am a web-developer, CG enthusiast, hardware hacker, avid DIYer and
            a big proponent of free (as in beer) sharing of knowledge. Can hold
            my end of a conversation on robotics, Raspberry Pi, amateur
            astronomy, photography, amateur radio and 3D modeling. On my days
            off, if I am not working on one of my side-projects, I can be found
            on a nearby hiking trail. Hit me up on{" "}
            <a
              href="https://twitter.com/_subir_"
              rel="noopener"
              target="_blank"
            >
              Twitter
            </a>
            .<Name>Subir Chowdhuri</Name>
          </p>
        </Author>
      </Article>
    </Layout>
  );
}

const Article = styled.article`
  margin: 0 auto;
  max-width: ${contentWidthMax};
  padding: 0 0 4rem;
  width: ${contentWidth};

  p + p {
    margin-top: 1rem;
  }
  @media ${medium} {
    padding: 4rem 0;
  }
`;
const Title = styled.h1`
  font-size: ${fontSize[2]};
  font-weight: 300;
  line-height: 1.6em;
  margin: 70px auto 40px;
  max-width: ${contentWidthMax};
  position: relative;
  text-transform: uppercase;
  width: ${contentWidth};

  @media ${medium} {
    font-size: ${fontSize[0]};
    margin: 80px auto;
  }

  &:after {
    background: none repeat scroll 0 0 ${colors.primary};
    bottom: -15px;
    content: "";
    height: 4px;
    left: 0;
    position: absolute;
    width: 90px;
  }
`;
const Author = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 4rem 0 0;
  text-align: center;
  @media ${medium} {
    flex-direction: row;
    text-align: left;
  }
  img {
    border-radius: 50%;
    height: 128px;
    width: 128px;
  }
  p {
    font-style: italic;
    padding: 1rem;
    @media ${medium} {
      padding: 0 2rem;
    }
  }
`;
const Name = styled.span`
  display: block;
  font-weight: 600;
  margin-top: 1rem;
`;

export default About;
