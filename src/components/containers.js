import styled from "styled-components"

 const ContainerButton = styled.div`
    display: flex;
    justify-content: ${props => props.jContent ? props.jContent : "space-between"};
    align-items: center;
    width: 100%;
    height: 100%;
`

export default ContainerButton