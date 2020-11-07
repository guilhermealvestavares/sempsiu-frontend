import React from "react";
import {
  WrapperWhatToDo,
  WrapperFlex,
  Title,
  Description,
  BlockText,
} from "./whatToDo.style.js";
const WhatToDo = () => (
  <WrapperWhatToDo>
    <WrapperFlex>
      <BlockText>
        <Title>Informações sobre as linhas</Title>
        <Description>
          Temos um ranking das linhas mais perigosas de São Paulo e os delitos
          mais cometidos em cada uma delas.
        </Description>
      </BlockText>
    </WrapperFlex>
  </WrapperWhatToDo>
);

export { WhatToDo };
