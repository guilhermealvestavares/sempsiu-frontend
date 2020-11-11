import styled from "styled-components";

const WrapperHowToAct = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 17px 15px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  padding: 80px 24px 40px 24px;
  margin-bottom: 110px;

  @media (min-width: 1024px) {
    padding: 40px 50px;
    width: 1024px;
    margin: 0 auto;
    margin-bottom: 110px;
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

const Text = styled.p`
  font-family: "Open Sans", sans-serif;
  color: #616161;

  font-size: 18px;
  line-height: 28px;
  color: #616161;
  font-weight: normal;
  margin: 36px 0;

  @media (min-width: 1024px) {
    line-height: 30px;
    width: 800px;
    margin: 0 36px 0 36px;
  }
`;

const WrapperFlex = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media (min-width: 1024px) {
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
    margin-top: 64px;
  }
`;

const DenounceHere = styled.p`
  font-size: 28px;
  font-family: "Open Sans", sans-serif;
  color: #000000;
  text-align: center;
  padding-top: 48px;
`;

export { WrapperHowToAct, Title, Text, WrapperFlex, DenounceHere };
