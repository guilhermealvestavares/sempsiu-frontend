import React from "react";
import {
  WrapperHowToAct,
  Title,
  Description,
  WrapperFlex,
  Text,
  DenounceHere,
} from "./howToAct.style.js";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const ImgStyled = styled(Img)`
  width: 100%;
`;

const HowToAct = () => {
  const assedio = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "assedio-1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <>
      <WrapperHowToAct>
        <Title>Veja o que fazer ao sofrer/relatar um delito:</Title>
        <WrapperFlex reverse>
          <ImgStyled fluid={assedio.file.childImageSharp.fluid} />
          <Text>
            Caso seja vítima de importunação sexual em espaços públicos, faça
            valer o seu direito e peça apoio, não se cale. Apesar de chegarem
            inúmeros casos de mulheres que são vítimas desses crimes, a Polícia
            Civil acredita que ainda existem subnotificações, pois muitas
            mulheres deixam de denunciar por vergonha e medo.
          </Text>
        </WrapperFlex>
        <WrapperFlex>
          <ImgStyled fluid={assedio.file.childImageSharp.fluid} />
          <Text>
            Relate e informe o que está ocorrendo aos profissionais
            responsáveis, de algum modo, por resguardar a sua integridade. Seja
            motoristas e cobradores, em transporte coletivos, ou agentes de
            segurança, em casos de lugares privados.
          </Text>
        </WrapperFlex>
        <WrapperFlex reverse>
          <ImgStyled fluid={assedio.file.childImageSharp.fluid} />
          <Text>
            Não deixe de acionar a Polícia Militar ou registrar uma ocorrência
            policial na delegacia mais próxima. Somente assim haverá
            visibilidade necessária ao assunto.
          </Text>
        </WrapperFlex>
        <WrapperFlex>
          <ImgStyled fluid={assedio.file.childImageSharp.fluid} />
          <Text>
            Caso o abuso seja no ônibus, a vítima pode pedir para o motorista
            levá-la a uma delegacia ou procurar a polícia, informando o número
            do veículo, data e hora aproximada da ocorrência para que a polícia
            busque identificar o agressor por meio das imagens de
            videomonitoramento dos ônibus ou terminais de integração.
          </Text>
        </WrapperFlex>

        <DenounceHere>Faça uma denúncia anônima aqui:</DenounceHere>
        <img
          style={{ margin: "0 auto", display: "block" }}
          src="http://www.ssp.sp.gov.br/img/banner_denuncia.png"
        ></img>

        <p style={{ fontSize: "12px", marginTop: "24px" }}>
          fonte:
          https://www.agazeta.com.br/es/policia/o-que-fazer-ao-perceber-um-caso-de-assedio-especialistas-respondem-1019
        </p>
      </WrapperHowToAct>
    </>
  );
};

export { HowToAct };
