import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Title, Description } from "./charts.style.js";
import axios from "axios";

const VerticalBarMetro = () => {
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
          dataMetro.qtd_violencia_sexual,
          dataMetro.qtd_violencia_fisica,
          dataMetro.qtd_violencia_moral,
          dataMetro.qtd_violencia_social,
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
        <Description>Informações sobre Metrô</Description>
      </div>
      <Bar data={data} options={options} />
    </>
  );
};

export { VerticalBarMetro };
