import styled from "styled-components";
import {
  Radio,
  FormControlLabel,
  Select,
  TextareaAutosize,
  Button,
} from "@material-ui/core";

const StyledRadio = styled(Radio)``;

const StyledFormControlLabel = styled(FormControlLabel)`
  justify-content: space-between;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 16px;
  margin-left: 0 !important;
`;

const StyledSelect = styled(Select)`
  width: 100%;
  font-family: "Open Sans", sans-serif;
`;

const StyledTextareaAutosize = styled(TextareaAutosize)`
  width: 100%;
  font-family: "Open Sans", sans-serif;

  &::placeholder {
    padding: 8px 0 0 16px;
    color: #757575;
    font-size: 16px;
    font-family: "Open Sans", sans-serif;
  }
`;

const StyledButton = styled(Button)`
  width: 100%;
  font-family: "Open Sans", sans-serif;
  background-color: #1565c0 !important;
  height: 56px;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;
  color: #ffffff !important;
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
  }
`;

const LabelRadio = styled.label`
  margin: 0 8px;
  font-family: "Open Sans", sans-serif;
`;

const LabelFields = styled.label`
  display: block;
  margin: 32px 0 16px 0;
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
  StyledButton,
  WrapperForm,
  Title,
  Description,
  StyledRadio,
  StyledFormControlLabel,
  StyledSelect,
  StyledTextareaAutosize,
};
