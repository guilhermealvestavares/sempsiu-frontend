import React, { useState, useEffect } from "react";
import {
  WrapperFlex,
  Title,
  Description,
  Card,
  ContentCard,
  TitleCard,
  DescriptionCard,
} from "./latestReports.style.js";
import axios from "axios";

const DOMAIN_ENDPOINT = "https://sem-psiu.herokuapp.com/";
const ENDPOINT_DENUNCIATION = DOMAIN_ENDPOINT + "denuncia";

const LatestReports = () => {
  const [denunciations, setDenunciations] = useState([{}]);

  useEffect(() => {
    axiosGetDenunciations();
  }, [setDenunciations]);

  const axiosGetDenunciations = () => {
    axios.get(ENDPOINT_DENUNCIATION).then(function(response) {
      setDenunciations(response.data.data.reverse());
      console.log(response.data.data);
    });
  };

  return (
    <>
      <Title>Últimas denúncias realizadas</Title>
      <Description>Veja quais foram as últimas denúncias</Description>

      <WrapperFlex>
        {denunciations?.map(({ tipo_agrs, id_lnha }, index) => {
          if (index <= 3) {
            return (
              <Card>
                <ContentCard>
                  <TitleCard>Tipo do delito</TitleCard>
                  <DescriptionCard>{tipo_agrs}</DescriptionCard>
                </ContentCard>
                <ContentCard>
                  <TitleCard>Linha</TitleCard>
                  <DescriptionCard>{id_lnha}</DescriptionCard>
                </ContentCard>
              </Card>
            );
          }
        })}
      </WrapperFlex>
    </>
  );
};

export { LatestReports };
