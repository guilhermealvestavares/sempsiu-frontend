import React, { useState, useEffect } from "react";
import axios from "axios";
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
import { LatestReports } from "../LatestReports";
import { VerticalBarBus, VerticalBarMetro, VerticalBarTrain } from "../Charts";

const DataView = () => {
  const DOMAIN_ENDPOINT = "https://sem-psiu.herokuapp.com/";
  const ENDPOINT_DENUNCIATIONS =
    DOMAIN_ENDPOINT + "dash/tipos-transportes-denuncias";

  const [dataDenunciations, setDataDenunciations] = useState([]);
  const [activeDenunciations, setActiveDenunciations] = useState(false);

  const axiosDenunciations = async () => {
    const responseAxios = await axios.get(ENDPOINT_DENUNCIATIONS);

    const arrayData = Object.entries(responseAxios.data.data);

    const arrayDataFormated = arrayData.map((item) => {
      return item[1];
    });

    setDataDenunciations(arrayDataFormated);
  };

  useEffect(() => {
    axiosDenunciations();
  }, [setDataDenunciations]);

  return (
    <>
      <WrapperDataView>
        <WrapperFlex>
          <BlockText>
            <Title>Informações sobre as linhas</Title>
            <Description>
              Temos um ranking das linhas mais perigosas de São Paulo e os
              delitos mais cometidos em cada uma delas.
            </Description>
          </BlockText>
          <BlockCard>
            {dataDenunciations?.map(
              (
                {
                  qtd_violencia_sexual,
                  qtd_violencia_social,
                  qtd_violencia_fisica,
                  qtd_violencia_moral,
                  transporte,
                },
                index
              ) => {
                return (
                  <Card key={`card${index}`}>
                    <ContentCard>
                      <TitleCard>Transporte</TitleCard>
                      <DescriptionCard>{transporte}</DescriptionCard>
                    </ContentCard>
                    <ContentCard>
                      <TitleCard>Violência Sexual</TitleCard>
                      <DescriptionCard>{qtd_violencia_sexual}</DescriptionCard>
                    </ContentCard>
                    <ContentCard>
                      <TitleCard>Violência Física</TitleCard>
                      <DescriptionCard>{qtd_violencia_fisica}</DescriptionCard>
                    </ContentCard>
                    <ContentCard>
                      <TitleCard>Violência Moral</TitleCard>
                      <DescriptionCard>{qtd_violencia_moral}</DescriptionCard>
                    </ContentCard>
                    <ContentCard>
                      <TitleCard>Violência Social</TitleCard>
                      <DescriptionCard>{qtd_violencia_social}</DescriptionCard>
                    </ContentCard>
                  </Card>
                );
              }
            )}
          </BlockCard>
        </WrapperFlex>
        <LatestReports />
        <VerticalBarBus />
        <VerticalBarMetro />
        <VerticalBarTrain />
      </WrapperDataView>
    </>
  );
};

export { DataView };
