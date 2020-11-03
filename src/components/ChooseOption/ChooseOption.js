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
import styled from "styled-components";

const ChooseOption = () => {
  const chatIcon = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "icon-chat.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const LinkStyled = styled(Link)`
    text-decoration: none;
    color: #000000;
    width: 100%;
    &:first-child {
      margin-right: 24px;
    }
  `;

  const ImgStyled = styled(Img)`
    width: 20px;
  `;

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
          <LinkStyled to="/form/">
            <Cards>
              <ImgStyled fluid={chatIcon.file.childImageSharp.fluid} />
              <TextCards>Fazer uma denúncia</TextCards>
            </Cards>
          </LinkStyled>
          <LinkStyled to="/page-2/">
            <Cards>
              <ImgStyled fluid={chatIcon.file.childImageSharp.fluid} />
              <TextCards>Informações sobre as linhas</TextCards>
            </Cards>
          </LinkStyled>
        </WrapperCardsFlex>
      </WrapperCards>
    </Wrapper>
  );
};

export { ChooseOption };
