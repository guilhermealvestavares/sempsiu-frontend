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

const FormSmall = () => {
  const formRef = useRef(null);

  const [selectBus, setSelectBus] = useState(false);
  const [dataSelectBus, setDataSelectBus] = useState({});
  const [selectTrain, setSelectTrain] = useState(false);
  const [dataSelectTrain, setDataSelectTrain] = useState({});
  const [selectMetro, setSelectMetro] = useState(false);
  const [dataSelectMetro, setDataSelectMetro] = useState({});

  useEffect(() => {
    axiosGetLines();
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

  const axiosGetLines = () => {
    axios.get(ENDPOINT_LINES).then(function(response) {
      setDataSelectBus(response.data.data.onibus);
      console.log(response.data.data.onibus);
      setDataSelectMetro(response.data.data.metro);
      console.log(response.data.data.metro);
      setDataSelectTrain(response.data.data.trem);
      console.log(response.data.data.trem);
    });
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
        <form
          onSubmit={handleSubmit}
          ref={formRef}
          method="POST"
          action="/visualizar-dados"
        >
          <LabelFields>1. O delito aconteceu:</LabelFields>
          <RadioGroup required name="tipo_dnca">
            <StyledFormControlLabel
              type="radio"
              value="No momento"
              label="No momento"
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

          <LabelFields>2. Selecione o transporte:</LabelFields>
          <RadioGroup required>
            <StyledFormControlLabel
              type="radio"
              value="Trem"
              label="Trem"
              control={<StyledRadio style={{ color: "#1565C0" }} />}
              labelPlacement="start"
              onClick={() => handleCheck("train")}
            />

            <StyledFormControlLabel
              type="radio"
              value="Metrô"
              label="Metrô"
              control={<StyledRadio style={{ color: "#1565C0" }} />}
              labelPlacement="start"
              onClick={() => handleCheck("metro")}
            />
            <StyledFormControlLabel
              type="radio"
              value="Ônibus"
              label="Ônibus"
              control={<StyledRadio style={{ color: "#1565C0" }} />}
              labelPlacement="start"
              onClick={() => handleCheck("bus")}
            />
          </RadioGroup>

          <LabelFields>3. Selecione a linha:</LabelFields>
          <div>
            <StyledSelect
              required
              variant="outlined"
              name="id_lnha"
              id="id_lnha"
            >
              {selectTrain &&
                dataSelectTrain?.map(({ _id, nm_lnha, cd_lnha }, index) => {
                  return (
                    <MenuItem value={_id} key={`option-train${index}`}>
                      {`${cd_lnha} | ${nm_lnha}`}
                    </MenuItem>
                  );
                })}
              {selectMetro &&
                dataSelectMetro?.map(({ _id, nm_lnha, cd_lnha }, index) => {
                  return (
                    <MenuItem value={_id} key={`option-metro${index}`}>
                      {`${cd_lnha} | ${nm_lnha}`}
                    </MenuItem>
                  );
                })}
              {selectBus &&
                dataSelectBus?.map(({ _id, nm_lnha, cd_lnha }, index) => {
                  return (
                    <MenuItem value={_id} key={`option-bus${index}`}>
                      {`${cd_lnha} | ${nm_lnha}`}
                    </MenuItem>
                  );
                })}
            </StyledSelect>
          </div>
          <LabelFields>4. Selecione o tipo do delito:</LabelFields>

          <RadioGroup name="tipo_agrs">
            <StyledFormControlLabel
              type="radio"
              value="Violência sexual"
              label="Violência sexual"
              control={<StyledRadio style={{ color: "#1565C0" }} />}
              labelPlacement="start"
              name="tipo_agrs"
            />
            <StyledFormControlLabel
              type="radio"
              value="Violência Física"
              label="Violência Física"
              control={<StyledRadio style={{ color: "#1565C0" }} />}
              labelPlacement="start"
              name="tipo_agrs"
            />
            <StyledFormControlLabel
              type="radio"
              value="Violência moral"
              label="Violência moral"
              control={<StyledRadio style={{ color: "#1565C0" }} />}
              labelPlacement="start"
              name="tipo_agrs"
            />
            <StyledFormControlLabel
              type="radio"
              value="Violência Social"
              label="Violência Social"
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
              value="-18"
              label="-18"
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
              value="26-35"
              label="26-35"
              control={<StyledRadio style={{ color: "#1565C0" }} />}
              labelPlacement="start"
              name="ds_agrr[faixa_etaria]"
            />
            <StyledFormControlLabel
              type="radio"
              value="36-45"
              label="36-45"
              control={<StyledRadio style={{ color: "#1565C0" }} />}
              labelPlacement="start"
              name="ds_agrr[faixa_etaria]"
            />
            <StyledFormControlLabel
              type="radio"
              value="46-60"
              label="46-60"
              control={<StyledRadio style={{ color: "#1565C0" }} />}
              labelPlacement="start"
              name="ds_agrr[faixa_etaria]"
            />
            <StyledFormControlLabel
              type="radio"
              value="60+"
              label="60+"
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
              label="Amarelo"
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
