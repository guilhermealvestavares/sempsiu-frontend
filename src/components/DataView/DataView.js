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
const DataView = () => {
  const DOMAIN_ENDPOINT = "https://sem-psiu.herokuapp.com/";
  const ENDPOINT_DENUNCIATIONS =
    DOMAIN_ENDPOINT + "dash/tipos-transportes-denuncias";

  const [dataDenunciations, setDataDenunciations] = useState([]);
  const [activeDenunciations, setActiveDenunciations] = useState(false);

  const axiosDenunciations = async () => {
    const responseAxios = await axios.get(ENDPOINT_DENUNCIATIONS);

    const arrayData = Object.entries(responseAxios.data.data);

    console.log("arrayData: ", arrayData);

    const arrayDataFormated = arrayData.map((item) => {
      return item[1];
    });

    console.log("arrayDataFormated: ", arrayDataFormated);

    setDataDenunciations(arrayDataFormated);
    console.log(dataDenunciations);
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
                  qtd_assedio,
                  qtd_racismo,
                  qtd_violencia_fisica,
                  qtd_violencia_verbal,
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
                      <TitleCard>Assédio</TitleCard>
                      <DescriptionCard>{qtd_assedio}</DescriptionCard>
                    </ContentCard>
                    <ContentCard>
                      <TitleCard>Violência física</TitleCard>
                      <DescriptionCard>{qtd_violencia_fisica}</DescriptionCard>
                    </ContentCard>
                    <ContentCard>
                      <TitleCard>Violência verbal</TitleCard>
                      <DescriptionCard>{qtd_violencia_verbal}</DescriptionCard>
                    </ContentCard>
                    <ContentCard>
                      <TitleCard>Racismo</TitleCard>
                      <DescriptionCard>{qtd_racismo}</DescriptionCard>
                    </ContentCard>
                  </Card>
                );
              }
            )}
          </BlockCard>
        </WrapperFlex>
      </WrapperDataView>
    </>
  );
};

export { DataView };
