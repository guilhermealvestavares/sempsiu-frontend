import styled from "styled-components"

const CtaButton = styled.a`
    font-family: Poppins;
    font-weight: 600;
    text-transform: uppercase;
    width: 100%;
    border-radius: 4px;
    padding-left: 16px;
    padding-right: 16px;
    height: 48px;
    display: flex;
    color: ${props => props.color ? props.color : "#ffffff"};
    background-color: ${props => props.bgColor ? props.bgColor : "var(--primary-color)"};
    border: 1px solid ${props => props.borderColor ? props.borderColor : "transparent"};
`

const InlineButton = styled.a`
    font-family: Poppins;
    font-weight: 600;
    text-transform: uppercase;
    width: 100%;
    color: ${props => props.color ? props.color : "var(--primary-color)"};
    text-decoration: underline;
`

const CtaTextItem = styled.span`
   margin: ${props => props.margin ? props.margin : "0"};
`

export {CtaButton,InlineButton, CtaTextItem }