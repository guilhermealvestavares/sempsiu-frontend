import React from "react";
import {
  Wrapper,
  Title,
  Description,
  WrapperCards,
  WrapperCardsTitle,
  Cards,
  WrapperCardsFlex,
  TextCards,
} from "./chooseOption.style.js";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby";

const ChooseOption = () => {
  const chatIcon = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "icon-chat.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <Title>Aconteceu algo?</Title>
      <Description>
        Relate um delito acontecido em algum transporte público de São Paulo em
        instantes.
      </Description>
      <WrapperCards>
        <WrapperCardsTitle>DO que você precisa?</WrapperCardsTitle>
        <WrapperCardsFlex>
          <Link to="/page-2/" style={{ width: "100%", marginRight: "24px" }}>
            <Cards>
              <Img
                style={{ width: "20px" }}
                fluid={chatIcon.file.childImageSharp.fluid}
              />
              <TextCards>Fazer uma denúncia</TextCards>
            </Cards>
          </Link>
          <Link to="/page-2/" style={{ width: "100%" }}>
            <Cards>
              <Img
                style={{ width: "20px" }}
                fluid={chatIcon.file.childImageSharp.fluid}
              />
              <TextCards>Informações sobre as linhas</TextCards>
            </Cards>
          </Link>
        </WrapperCardsFlex>
      </WrapperCards>
    </Wrapper>
  );
};

export { ChooseOption };
