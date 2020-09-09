import styled from "styled-components";

const Card = styled.div`
    position: relative;
    padding: 8px;
    border-radius: 8px;
    background-color: #f8f8f8;
    color: #118AB2;
    box-shadow: 0 0 0 1px #eee;
    flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : "row")};
    width: 100%;
    max-width: 280px;
`;


export { Card };
