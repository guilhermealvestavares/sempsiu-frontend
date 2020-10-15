import styled from "styled-components";

const LabelRadio = styled.label`
  margin: 0 8px;
  font-family: "Lato", sans-serif;
`;

const LabelFields = styled.label`
  display: block;
  margin-top: 24px;
  font-weight: 700;
  font-family: "Lato", sans-serif;
`;

const LabelFieldsWithSomesRadios = styled.label`
  display: block;
  margin: 6px 0 0 0;
  font-family: "Lato", sans-serif;
`;

const WrapperForm = styled.div`
  background-color: #ffffff;
  padding: 28px;
  width: 50%;
  border-top: 2px solid #f8f8f8;
`;

export { LabelRadio, LabelFields, LabelFieldsWithSomesRadios, WrapperForm };