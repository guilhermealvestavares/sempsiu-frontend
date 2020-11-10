import React, { useState, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Title, Description } from "./charts.style.js";
import axios from "axios";

const VerticalBarBus = () => {
  const [dataDenunciations, setDataDenunciations] = useState([]);
  const [dataBus, setDataBus] = useState([]);
  const [dataTrain, setDataTrain] = useState([]);
  const [dataMetro, setDataMetro] = useState([]);
  useEffect(() => {
    axiosDenunciations();
  }, [setDataDenunciations]);

  const DOMAIN_ENDPOINT = "https://sem-psiu.herokuapp.com/";
  const ENDPOINT_DENUNCIATIONS =
    DOMAIN_ENDPOINT + "dash/tipos-transportes-denuncias";

  const axiosDenunciations = async () => {
    const responseAxios = await axios.get(ENDPOINT_DENUNCIATIONS);

    setDataBus(responseAxios.data.data.onibus);
    setDataTrain(responseAxios.data.data.trem);
    setDataMetro(responseAxios.data.data.metro);
  };

  const data = {
    labels: [
      "Violência Sexual",
      "Violência Física",
      "Violência Moral",
      "Violência Social",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [
          dataBus.qtd_violencia_sexual,
          dataBus.qtd_violencia_fisica,
          dataBus.qtd_violencia_moral,
          dataBus.qtd_violencia_social,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <div>
        <Title>Informações sobre delitos que mais ocorrem</Title>
        <Description>Informações sobre Ônibus</Description>
      </div>
      <Line data={data} options={options} />
    </>
  );
};

export { VerticalBarBus };
