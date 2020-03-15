import React from "react";
import Helmet from "react-helmet";
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
          <Author.ProfilePhoto src="/images/Subir.jpg" alt="Subir Chowdhuri" />
          <p>
            I am a web-developer, CG enthusiast, hardware hacker, avid DIYer and
            a big proponent of free (as in beer) sharing of knowledge. Can hold
            my end of a conversation on robotics, Raspberry Pi, amateur
            astronomy, photography, amateur radio and 3D modeling. On my days
            off, if I am not working on one of my side-projects, I can be found
            on a nearby hiking trail. .<Name>Subir Chowdhuri</Name>
            <Links>
              <li>
                <a
                  href="https://github.com/schowdhuri/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon mask="/images/github.svg" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/_subir_/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon mask="/images/twitter.svg" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/subirchowdhuri/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon mask="/images/linkedin.svg" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/subir.chowdhuri/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon mask="/images/instagram.svg" />
                </a>
              </li>
            </Links>
          </p>
        </Author>
      </Article>
    </Layout>
  );
}

const Article = styled.article`
  margin: 0 auto;
  max-width: ${contentWidthMax};
  padding: 4rem 0;
  width: ${contentWidth};

  p + p {
    margin-top: 1rem;
  }
  @media ${medium} {
    padding: 0 0 4rem;
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
  p {
    font-style: italic;
    padding: 1rem;
    @media ${medium} {
      padding: 0 2rem;
    }
  }
`;
Author.ProfilePhoto = styled.img`
  border-radius: 50%;
  max-height: 128px;
  max-width: 128px;
  @media ${medium} {
    align-self: start;
    flex-basis: 100%;
  }
`;
const Name = styled.span`
  display: block;
  font-size: ${fontSize[6]};
  font-weight: 600;
  margin-top: 1rem;
`;
const Links = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 40px 0 20px;
  padding: 0;

  @media ${medium} {
    justify-content: start;
    margin: 10px 0;
  }
`;
const Icon = styled.i`
  background: ${colors.gray[4]};
  display: block;
  height: 2rem;
  margin: 0 1rem;
  mask: ${props => `url(${props.mask})`};
  transition: background-color 0.3s;
  width: 2rem;
  @media ${medium} {
    height: 1.5rem;
    margin: 0 5px;
    width: 1.5rem;
  }

  &:hover {
    background: ${colors.secondary};
  }
`;

export default About;
