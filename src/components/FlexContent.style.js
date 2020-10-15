import styled from "styled-components";

const FlexContent = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: ${(props) =>
      props.flexDirection ? props.flexDirection : "row"};
  }
`;

export { FlexContent };
