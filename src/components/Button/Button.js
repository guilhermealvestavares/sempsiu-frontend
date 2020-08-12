import React, { useRef } from "react";
import { CtaButton, InlineButton, CtaTextItem } from "./Button.style";
import ContainerButton from "../Container/Container.style";

const Button = () => (
  <CtaButton href="/">
    <ContainerButton>
      <span>Busque a sua linha de ônibus</span>
      <span>></span>
    </ContainerButton>
  </CtaButton>
);

export { Button };
