import React from "react"
import Layout from "../components/layout"
import { Container } from "../components/layoutComponents"
import { CtaButton, InlineButton, CtaTextItem } from "../components/button"
import ContainerButton from "../components/containers"

const Components = () => (
  <Layout>
    <Container>
      <CtaButton href="/">
        <ContainerButton>
         <span>Busque a sua linha de ônibus</span> 
         <span>></span> 
        </ContainerButton>
      </CtaButton>
      <br/>
      <CtaButton href="/" color="#118AB2" borderColor="#118AB2" bgColor="#ffffff">
        <ContainerButton>
         <CtaTextItem>Busque a sua linha de ônibus </CtaTextItem> 
         <CtaTextItem>></CtaTextItem> 
        </ContainerButton>
      </CtaButton>
      <br/>
      <CtaButton href="/" bgColor="#06D6A0">
        <ContainerButton jContent="center">
         <CtaTextItem>Busque a sua linha de ônibus </CtaTextItem>  
        </ContainerButton>
      </CtaButton>
      <br/>
      <InlineButton href="/">
        <ContainerButton jContent="flex-start">
         <CtaTextItem margin="0 16px 0 0">Busque a sua linha de ônibus </CtaTextItem>
         <CtaTextItem>></CtaTextItem>  
        </ContainerButton>
      </InlineButton>
    </Container>
  </Layout>
)

export default Components
