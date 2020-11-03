import styled from "styled-components";

const Title = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 70px;

  @media (min-width: 1024px) {
    font-size: 56px;
  }
`;

const LabelRadio = styled.label`
  margin: 0 8px;
  font-family: "Open Sans", sans-serif;
`;

const LabelFields = styled.label`
  display: block;
  margin-top: 32px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 21px;
  font-family: "Open Sans", sans-serif;
`;

const LabelFieldsWithSomesRadios = styled.label`
  display: block;
  margin: 8px 0 0 0;
  font-family: "Open Sans", sans-serif;
`;

const Button = styled.button`
  width: 100%;
  border-radius: 2px;
  color: white;
  font-family: "Open Sans", sans-serif;
  background-color: #06d6a0;
  border: 0;
  margin-top: 32px;
  padding: 24px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px 0;
`;

const WrapperForm = styled.div`
  background: #ffffff;
  box-shadow: 0px 17px 15px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  padding: 28px;
  width: 100%;
  border-top: 2px solid #f8f8f8;
  height: auto;
  margin: 0 auto;

  @media (min-width: 1024px) {
    margin: 0 auto;
    width: 516px;
  }
`;

export {
  LabelRadio,
  LabelFields,
  LabelFieldsWithSomesRadios,
  Button,
  Select,
  WrapperForm,
  Title,
};
