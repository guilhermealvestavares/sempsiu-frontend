import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #ffffff;
  padding: 28px;
  width: 100%;
  height: 90vh;

  @media (min-width: 1024px) {
    width: 410px;
    margin: 0 auto;
  }
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
  color: #000000;

  @media (min-width: 1024px) {
    font-size: 56px;
    line-height: 70px;
  }
`;

const Description = styled.p`
  font-family: "Open Sans", sans-serif;
  color: #616161;

  font-size: 18px;
  line-height: 28px;
  color: #616161;
  font-weight: normal;
  margin-bottom: 36px;

  @media (min-width: 1024px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

const WrapperCards = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
  }
`;

const WrapperCardsTitle = styled.p`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;
  margin-bottom: 16px;
  color: #000000;

  @media (min-width: 1024px) {
  }
`;

const Cards = styled.div`
  background: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  height: 181px;
  width: 100%;
  max-width: 130px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 1024px) {
    max-width: 100%;
  }

  &:first-child {
    margin-right: 24px;
  }
`;

const TextCards = styled.span`
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  @media (min-width: 1024px) {
  }
`;

const WrapperCardsFlex = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 1024px) {
  }
`;

export {
  Wrapper,
  Title,
  Description,
  WrapperCards,
  WrapperCardsTitle,
  Cards,
  WrapperCardsFlex,
  TextCards,
};
