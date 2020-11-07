import React from "react";
import { FlexContent } from "../FlexContent.style.js";
import {
  WrapperDataView,
  WrapperFlex,
  Title,
  Description,
  BlockText,
  BlockCard,
  Card,
  ContentCard,
  TitleCard,
  DescriptionCard,
} from "./dataView.style.js";
const DataView = () => (
  <>
    <WrapperDataView>
      <WrapperFlex>
        <BlockText>
          <Title>Informações sobre as linhas</Title>
          <Description>
            Temos um ranking das linhas mais perigosas de São Paulo e os delitos
            mais cometidos em cada uma delas.
          </Description>
        </BlockText>
        <BlockCard>
          <Card>
            <ContentCard>
              <TitleCard>Transporte</TitleCard>
              <DescriptionCard>Trem</DescriptionCard>
            </ContentCard>
            <ContentCard>
              <TitleCard>Linha</TitleCard>
              <DescriptionCard>Diamante</DescriptionCard>
            </ContentCard>
            <ContentCard>
              <TitleCard>Delito mais cometido</TitleCard>
              <DescriptionCard>Violência verbal</DescriptionCard>
            </ContentCard>
            <ContentCard>
              <TitleCard>Número de relatos</TitleCard>
              <DescriptionCard>1567 relatos</DescriptionCard>
            </ContentCard>
          </Card>
          <Card>
            <ContentCard>
              <TitleCard>Transporte</TitleCard>
              <DescriptionCard>a</DescriptionCard>
            </ContentCard>
            <ContentCard>
              <TitleCard>Linha</TitleCard>
              <DescriptionCard>a</DescriptionCard>
            </ContentCard>
            <ContentCard>
              <TitleCard>Delito mais cometido</TitleCard>
              <DescriptionCard>a</DescriptionCard>
            </ContentCard>
            <ContentCard>
              <TitleCard>Número de relatos</TitleCard>
              <DescriptionCard>a</DescriptionCard>
            </ContentCard>
          </Card>
        </BlockCard>
      </WrapperFlex>
    </WrapperDataView>
  </>
);

export { DataView };
