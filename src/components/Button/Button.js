import React, { useRef } from "react";
import { CtaButton, InlineButton, CtaTextItem } from "./Button.style";
import ContainerButton from "../Container/Container.style";
import { children, node, string } from "prop-types";

const propTypes = {
  children: node,
  color: string,
  bgColor: string,
  margin: string,
};

const Button = ({ children, color, bgColor, margin }) => (
  <CtaButton color={color} bgColor={bgColor} margin={margin}>
    <ContainerButton>
      <span>{children}</span>
      <span>></span>
    </ContainerButton>
  </CtaButton>
);

Button.propTypes = propTypes;

export { Button }
