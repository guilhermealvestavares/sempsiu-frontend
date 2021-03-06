import styled from "styled-components";

const WrapperDataView = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 17px 15px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  padding: 80px 24px 40px 24px;
  margin-bottom: 110px;

  @media (min-width: 1024px) {
    padding: 40px 50px;
    width: 876px;
    margin: 0 auto;
  }
`;

const WrapperFlex = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

const Title = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;

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
    line-height: 30px;
    width: 320px;
  }
`;

const BlockText = styled.div`
  width: 100%;
  margin-bottom: 32px;
  @media (min-width: 1024px) {
    width: 354px;
  }
`;

const BlockCard = styled.div`
  width: 100%;
  @media (min-width: 1024px) {
    width: 354px;
  }
`;

const Card = styled.div`
  background: #f9f9f9;
  border: 1px solid #ff9a03;
  box-sizing: border-box;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  margin-bottom: 24px;

  @media (min-width: 1024px) {
    width: 336px;
  }
`;

const ContentCard = styled.div`
  margin-bottom: 16px;
  @media (min-width: 1024px) {
  }
`;

const TitleCard = styled.div`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;

  @media (min-width: 1024px) {
  }
`;

const DescriptionCard = styled.div`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #757575;

  @media (min-width: 1024px) {
  }
`;

export {
  WrapperDataView,
  WrapperFlex,
  Title,
  Description,
  BlockText,
  BlockCard,
  Card,
  ContentCard,
  TitleCard,
  DescriptionCard,
};
