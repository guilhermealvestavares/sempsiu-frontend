import React, { useRef, useState, useEffect } from "react";
import { FlexContent } from "../FlexContent.style.js";
import {
  LabelRadio,
  LabelFields,
  LabelFieldsWithSomesRadios,
  Button,
  Select,
  WrapperForm,
  Title,
} from "./formSmall.style.js";
import axios from "axios";

const DOMAIN_ENDPOINT = "https://sem-psiu.herokuapp.com/";
const ENDPOINT_DENUNCIATION = DOMAIN_ENDPOINT + "denuncia";
const ENDPOINT_LINES = DOMAIN_ENDPOINT + "linha";
const GET_DATA_AND_SEPARATE_IN_GROUPS = /(.*?)\[(.*?)\]/;

const TRAIN_LINES = [
  { line: "7 - Rubi" },
  { line: "8 - Diamante" },
  { line: "9 - Esmeralda" },
  { line: "10 - Turquesa" },
  { line: "11 - Coral" },
  { line: "12 - Safira" },
  { line: "13 - Jade" },
  { line: "Expresso Aeroporto" },
  { line: "Connect Aeroporto" },
];

const METRO_LINES = [
  { line: "1 - Azul" },
  { line: "2 - Verde" },
  { line: "3 - Vermelha" },
  { line: "4 - Amarela" },
  { line: "5 - Lilás" },
  { line: "15 - Prata" },
];

const FormSmall = () => {
  const formRef = useRef(null);

  const [selectBus, setSelectBus] = useState(false);
  const [dataSelectBus, setDataSelectBus] = useState("");
  const [selectTrain, setSelectTrain] = useState(true);
  const [dataSelectTrain, setDataSelectTrain] = useState(TRAIN_LINES);
  const [selectMetro, setSelectMetro] = useState(false);
  const [dataSelectMetro, setDataSelectMetro] = useState(METRO_LINES);

  useEffect(() => {
    getLinesTrain();
    axiosGetLinesBus();
    getLinesMetro();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosPostDenunciation(setupDataPost());
  };

  const axiosPostDenunciation = (data) => {
    axios
      .post(ENDPOINT_DENUNCIATION, data)
      .then(function(response) {
        console.log("then: " + response);
      })
      .catch(function(error) {
        console.log("catch: " + error);
      });
  };

  const setupDataPost = () => {
    const { current } = formRef;

    const formData = new FormData(current);

    const objectData = {};

    [...formData.entries()].forEach(([key, value]) => {
      const objectKey = key.match(GET_DATA_AND_SEPARATE_IN_GROUPS);

      if (objectKey) {
        if (!objectData[objectKey[1]]) {
          objectData[objectKey[1]] = {};
        }
        objectData[objectKey[1]][objectKey[2]] = value;
      } else {
        objectData[key] = value;
      }
    });

    objectData["dt_dnca"] = Date.now();
    return objectData;
  };

  const axiosGetLinesBus = () => {
    axios.get(ENDPOINT_LINES).then(function(response) {
      setDataSelectBus(response.data.data);
    });
  };

  const getLinesTrain = () => {
    setDataSelectTrain(TRAIN_LINES);
  };

  const getLinesMetro = () => {
    setDataSelectMetro(METRO_LINES);
  };

  const handleCheck = (transport) => {
    if (transport == "bus") {
      setSelectBus(true);
      setSelectTrain(false);
      setSelectMetro(false);
    }
    if (transport == "train") {
      setSelectBus(false);
      setSelectTrain(true);
      setSelectMetro(false);
    }
    if (transport == "metro") {
      setSelectBus(false);
      setSelectTrain(false);
      setSelectMetro(true);
    }
  };

  return (
    <>
      <WrapperForm>
        <Title>Faça sua denúncia.</Title>
        <form onSubmit={handleSubmit} ref={formRef} method="POST">
          <LabelFields>3. O delito aconteceu:</LabelFields>
          <div>
            <input checked type="radio" value="Agora" name="tipo_dnca" />
            <LabelRadio>Agora</LabelRadio>
            <input type="radio" value="Já aconteceu" name="tipo_dnca" />
            <LabelRadio>Já aconteceu</LabelRadio>
          </div>

          <LabelFields>1. Selecione o transporte:</LabelFields>
          <div>
            <LabelRadio>
              <input
                type="radio"
                value="Trem"
                name="typeTransport"
                onClick={() => handleCheck("train")}
              />
              Trem
            </LabelRadio>
            <LabelRadio>
              <input
                type="radio"
                value="Metrô"
                name="typeTransport"
                onClick={() => handleCheck("metro")}
              />
              Metrô
            </LabelRadio>
            <LabelRadio>
              <input
                type="radio"
                value="Ônibus"
                name="typeTransport"
                onClick={() => handleCheck("bus")}
              />
              Ônibus
            </LabelRadio>
          </div>
          <LabelFields>2. Selecione a linha:</LabelFields>
          <div>
            <Select name="id_lnha" id="id_lnha">
              {selectTrain &&
                dataSelectTrain.map(({ line }, index) => {
                  return (
                    <option value={line} key={`option-train${index}`}>
                      {line}
                    </option>
                  );
                })}
              {selectMetro &&
                dataSelectMetro.map(({ line }, index) => {
                  return (
                    <option value={line} key={`option-metro${index}`}>
                      {line}
                    </option>
                  );
                })}
              {selectBus &&
                dataSelectBus.map(({ _id, id, name }, index) => {
                  return (
                    <option value={_id} key={`option-bus${index}`}>
                      {`${id} | ${name}`}
                    </option>
                  );
                })}
            </Select>
          </div>

          <LabelFields>4. Selecione o tipo do delito:</LabelFields>
          <div>
            <input checked type="radio" value="Assédio" name="tipo_agrs" />
            <LabelRadio>Assédio</LabelRadio>
            <input type="radio" value="Racismo" name="tipo_agrs" />
            <LabelRadio>Racismo</LabelRadio>
            <input type="radio" value="Violência física" name="tipo_agrs" />
            <LabelRadio>Violência física</LabelRadio>
            <input type="radio" value="Violência verbal" name="tipo_agrs" />
            <LabelRadio>Violência verbal</LabelRadio>
          </div>

          <LabelFields>Informações adicionais:</LabelFields>
          <div>
            <textarea name="ds_dnca" placeholder="opcional"></textarea>
          </div>

          <LabelFields>
            5. Selecione algumas informações sobre o agressor:
          </LabelFields>
          <div>
            <LabelFieldsWithSomesRadios>Sexo</LabelFieldsWithSomesRadios>
            <input
              checked
              type="radio"
              value="Masculino"
              name="ds_agrr[sexo]"
            />
            <LabelRadio>Masculino</LabelRadio>
            <input type="radio" value="Feminino" name="ds_agrr[sexo]" />
            <LabelRadio>Feminino</LabelRadio>

            <LabelFieldsWithSomesRadios>
              Faixa etária
            </LabelFieldsWithSomesRadios>
            <input
              checked
              type="radio"
              value="Menor de idade"
              name="ds_agrr[faixa_etaria]"
            />
            <LabelRadio>Menor de idade</LabelRadio>
            <input type="radio" value="18-25" name="ds_agrr[faixa_etaria]" />
            <LabelRadio>18-25</LabelRadio>
            <input type="radio" value="26-40" name="ds_agrr[faixa_etaria]" />
            <LabelRadio>26-40</LabelRadio>
            <input type="radio" value="40-60" name="ds_agrr[faixa_etaria]" />
            <LabelRadio>40-60</LabelRadio>
            <input
              type="radio"
              value="Acima de 60"
              name="ds_agrr[faixa_etaria]"
            />
            <LabelRadio>Acima de 60</LabelRadio>

            <LabelFieldsWithSomesRadios>Etnia</LabelFieldsWithSomesRadios>
            <input checked type="radio" value="Negro" name="ds_agrr[etnia]" />
            <LabelRadio>Negro</LabelRadio>
            <input type="radio" value="Branco" name="ds_agrr[etnia]" />
            <LabelRadio>Branco</LabelRadio>

            <LabelFieldsWithSomesRadios>Cabelo</LabelFieldsWithSomesRadios>
            <input checked type="radio" value="Curto" name="ds_agrr[cabelo]" />
            <LabelRadio>Curto</LabelRadio>
            <input type="radio" value="Longo" name="ds_agrr[cabelo]" />
            <LabelRadio>Longo</LabelRadio>
          </div>
          <Button type="submit">Clique aqui para fazer uma denúncia</Button>
        </form>
      </WrapperForm>
    </>
  );
};

export { FormSmall };
