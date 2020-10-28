import styled from "styled-components";

const LabelRadio = styled.label`
  margin: 0 8px;
  font-family: "Lato", sans-serif;
`;

const LabelFields = styled.label`
  display: block;
  margin-top: 32px;
  font-weight: 700;
  font-family: "Lato", sans-serif;
`;

const LabelFieldsWithSomesRadios = styled.label`
  display: block;
  margin: 8px 0 0 0;
  font-family: "Lato", sans-serif;
`;

const Button = styled.button`
  width: 100%;
  border-radius: 4px;
  color: white;
  font-family: "Lato", sans-serif;
  background-color: #06D6A0;
  border: 0;
  margin-top: 32px;
`;

const WrapperForm = styled.div`
  background-color: #ffffff;
  padding: 28px;
  width: 100%;
  border-top: 2px solid #f8f8f8;
  height: auto;
  margin: 0 auto;

  @media (min-width: 1024px) {
    width: 50%;
    height: 100vh;
    margin: 0 auto;
  }
`;

export { LabelRadio, LabelFields, LabelFieldsWithSomesRadios, Button, WrapperForm };
