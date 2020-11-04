import React, { useRef, useState, useEffect } from "react";
import {
  LabelRadio,
  LabelFields,
  LabelFieldsWithSomesRadios,
  WrapperForm,
  Title,
  Description,
  StyledRadio,
  StyledFormControlLabel,
  StyledSelect,
  StyledTextareaAutosize,
  StyledButton,
} from "./formSmall.style.js";
import axios from "axios";
import { RadioGroup, MenuItem, Button } from "@material-ui/core";
import styled from "styled-components";

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
        <Description>Responda as perguntas abaixo</Description>
        <form onSubmit={handleSubmit} ref={formRef} method="POST">
          <LabelFields>3. O delito aconteceu:</LabelFields>
          <RadioGroup name="tipo_dnca">
            <StyledFormControlLabel
              type="radio"
              value="Agora"
              label="Agora"
              control={<StyledRadio style={{ color: "#1565C0" }} />}
              labelPlacement="start"
              name="tipo_dnca"
            />
            <StyledFormControlLabel
              type="radio"
              value="Já aconteceu"
              label="Já aconteceu"
              control={<StyledRadio style={{ color: "#1565C0" }} />}
              labelPlacement="start"
              name="tipo_dnca"
            />
          </RadioGroup>

          <LabelFields>1. Selecione o transporte:</LabelFields>
          <RadioGroup name="typeTransport">
            <StyledFormControlLabel
              type="radio"
              value="Trem"
              label="Trem"
              control={<StyledRadio style={{ color: "#1565C0" }} />}
              labelPlacement="start"
              name="typeTransport"
              onClick={() => handleCheck("train")}
            />

            <StyledFormControlLabel
              type="radio"
              value="Metrô"
              label="Metrô"
              control={<StyledRadio style={{ color: "#1565C0" }} />}
              labelPlacement="start"
              name="typeTransport"
              onClick={() => handleCheck("metro")}
            />
            <StyledFormControlLabel
              type="radio"
              value="Ônibus"
              label="Ônibus"
              control={<StyledRadio style={{ color: "#1565C0" }} />}
              labelPlacement="start"
              name="typeTransport"
              onClick={() => handleCheck("bus")}
            />
          </RadioGroup>

          <LabelFields>2. Selecione a linha:</LabelFields>
          <div>
            <StyledSelect variant="outlined" name="id_lnha" id="id_lnha">
              {selectTrain &&
                dataSelectTrain.map(({ line }, index) => {
                  return (
                    <MenuItem value={line} key={`option-train${index}`}>
                      {line}
                    </MenuItem>
                  );
                })}
              {selectMetro &&
                dataSelectMetro.map(({ line }, index) => {
                  return (
                    <MenuItem value={line} key={`option-metro${index}`}>
                      {line}
                    </MenuItem>
                  );
                })}
              {selectBus &&
                dataSelectBus.map(({ _id, id, name }, index) => {
                  return (
                    <MenuItem value={_id} key={`option-bus${index}`}>
                      {`${id} | ${name}`}
                    </MenuItem>
                  );
                })}
            </StyledSelect>
          </div>
          <LabelFields>4. Selecione o tipo do delito:</LabelFields>

          <RadioGroup name="tipo_agrs">
            <StyledFormControlLabel
              type="radio"
              value="Assédio"
              label="Assédio"
              control={<StyledRadio style={{ color: "#1565C0" }} />}
              labelPlacement="start"
              name="tipo_agrs"
            />
            <StyledFormControlLabel
              type="radio"
              value="Racismo"
              label="Racismo"
              control={<StyledRadio style={{ color: "#1565C0" }} />}
              labelPlacement="start"
              name="tipo_agrs"
            />
            <StyledFormControlLabel
              type="radio"
              value="Violência física"
              label="Violência física"
              control={<StyledRadio style={{ color: "#1565C0" }} />}
              labelPlacement="start"
              name="tipo_agrs"
            />
            <StyledFormControlLabel
              type="radio"
              value="Violência verbal"
              label="Violência verbal"
              control={<StyledRadio style={{ color: "#1565C0" }} />}
              labelPlacement="start"
              name="tipo_agrs"
            />
          </RadioGroup>

          <LabelFields>
            5. Selecione algumas informações sobre o agressor:
          </LabelFields>
          <LabelFields>Sexo</LabelFields>
          <RadioGroup name="ds_agrr[sexo]">
            <StyledFormControlLabel
              type="radio"
              value="Masculino"
              label="Masculino"
              control={<StyledRadio style={{ color: "#1565C0" }} />}
              labelPlacement="start"
              name="ds_agrr[sexo]"
            />
            <StyledFormControlLabel
              type="radio"
              value="Feminino"
              label="Feminino"
              control={<StyledRadio style={{ color: "#1565C0" }} />}
              labelPlacement="start"
              name="ds_agrr[sexo]"
            />
          </RadioGroup>

          <LabelFields>Faixa etária</LabelFields>
          <RadioGroup name="ds_agrr[sexo]">
            <StyledFormControlLabel
              type="radio"
              value="Menor de idade"
              label="Menor de idade"
              control={<StyledRadio style={{ color: "#1565C0" }} />}
              labelPlacement="start"
              name="ds_agrr[faixa_etaria]"
            />
            <StyledFormControlLabel
              type="radio"
              value="18-25"
              label="18-25"
              control={<StyledRadio style={{ color: "#1565C0" }} />}
              labelPlacement="start"
              name="ds_agrr[faixa_etaria]"
            />
            <StyledFormControlLabel
              type="radio"
              value="26-40"
              label="26-40"
              control={<StyledRadio style={{ color: "#1565C0" }} />}
              labelPlacement="start"
              name="ds_agrr[faixa_etaria]"
            />
            <StyledFormControlLabel
              type="radio"
              value="40-60"
              label="40-60"
              control={<StyledRadio style={{ color: "#1565C0" }} />}
              labelPlacement="start"
              name="ds_agrr[faixa_etaria]"
            />
            <StyledFormControlLabel
              type="radio"
              value="Acima de 60"
              label="Acima de 60"
              control={<StyledRadio style={{ color: "#1565C0" }} />}
              labelPlacement="start"
              name="ds_agrr[faixa_etaria]"
            />
          </RadioGroup>

          <LabelFields>Etnia</LabelFields>
          <RadioGroup name="ds_agrr[etnia]">
            <StyledFormControlLabel
              type="radio"
              value="Negro"
              label="Negro"
              control={<StyledRadio style={{ color: "#1565C0" }} />}
              labelPlacement="start"
              name="ds_agrr[etnia]"
            />
            <StyledFormControlLabel
              type="radio"
              value="Branco"
              label="Branco"
              control={<StyledRadio style={{ color: "#1565C0" }} />}
              labelPlacement="start"
              name="ds_agrr[etnia]"
            />
            <StyledFormControlLabel
              type="radio"
              value="Pardo"
              label="Pardo"
              control={<StyledRadio style={{ color: "#1565C0" }} />}
              labelPlacement="start"
              name="ds_agrr[etnia]"
            />
            <StyledFormControlLabel
              type="radio"
              value="Amarelo"
              label="Pardo"
              control={<StyledRadio style={{ color: "#1565C0" }} />}
              labelPlacement="start"
              name="ds_agrr[etnia]"
            />
          </RadioGroup>
          <LabelFields>Cabelo</LabelFields>
          <RadioGroup name="ds_agrr[cabelo]">
            <StyledFormControlLabel
              type="radio"
              value="Curto"
              label="Curto"
              control={<StyledRadio style={{ color: "#1565C0" }} />}
              labelPlacement="start"
              name="ds_agrr[cabelo]"
            />
            <StyledFormControlLabel
              type="radio"
              value="Longo"
              label="Longo"
              control={<StyledRadio style={{ color: "#1565C0" }} />}
              labelPlacement="start"
              name="ds_agrr[cabelo]"
            />
          </RadioGroup>

          <LabelFields>Informações adicionais:</LabelFields>
          <div>
            <StyledTextareaAutosize
              name="ds_dnca"
              placeholder="Digite aqui"
              rows="5"
            />
          </div>

          <StyledButton type="submit" variant="contained">
            Enviar denúncia
          </StyledButton>
        </form>
      </WrapperForm>
    </>
  );
};

export { FormSmall };
