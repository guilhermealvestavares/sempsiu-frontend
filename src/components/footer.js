import React from "react";
import styled from "styled-components";
import { Container } from "./layoutComponents";
import { Link } from "gatsby";

const Footer = ({ className }) => (
  <footer className={className}>
    <Container>
      <WrapperFooter>
        <Link to="/">Home</Link>
        <Link to="/enviar-denuncia">Enviar Denuncia</Link>
        <Link to="/visualizar-dados">Visualizar Dados</Link>
        <Link to="/o-que-fazer">O que fazer?</Link>
      </WrapperFooter>
    </Container>
  </footer>
);

const WrapperFooter = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #f8f8f8;
  padding: 0 0 24px 0;

  @media (min-width: 1024px) {
    justify-content: space-between;
  }
`;

const StyledFooter = styled(Footer)`
  font-size: 14px;
  color: #ffffff;
  background-color: #616161;
  padding: 1rem 0;
  padding: 0 auto;
  font-family: "Open Sans", sans-serif;
`;

export default StyledFooter;
