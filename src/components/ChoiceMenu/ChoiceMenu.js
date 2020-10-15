import React from "react";
import { FlexContent } from "../FlexContent.style.js";
import { WrapperMenu, Wrapper, CtaMenu } from "./choiceMenu.style.js";
const ChoiceMenu = () => (
  <>
    <WrapperMenu>
      <Wrapper>
        <CtaMenu>Faça uma denúncia</CtaMenu>
        <CtaMenu>Informações sobre as linhas</CtaMenu>
      </Wrapper>
    </WrapperMenu>
  </>
);

export { ChoiceMenu };
