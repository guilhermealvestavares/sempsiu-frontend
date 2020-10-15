import styled from "styled-components";

const WrapperMenu = styled.div`
  background-color: #ffffff;
  padding: 48px;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const CtaMenu = styled.a`
  margin-right: 32px;
  color: #000000;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 24px;
`;

export { WrapperMenu, Wrapper, CtaMenu };
