import React, { useRef, useState } from "react";
import { FlexContent } from "../FlexContent.style.js";
import {
  LabelRadio,
  LabelFields,
  LabelFieldsWithSomesRadios,
  Button,
  WrapperForm,
} from "./formSmall.style.js";
import axios from "axios";

const DOMAIN_ENDPOINT = "https://sem-psiu.herokuapp.com/";
const ENDPOINT_DENUNCIATION = DOMAIN_ENDPOINT + "denuncia";
const ENDPOINT_LINES = DOMAIN_ENDPOINT + "linha";
const GET_DATA_AND_SEPARATE_IN_GROUPS = /(.*?)\[(.*?)\]/;

const FormSmall = () => {
  const formRef = useRef(null);

  const [select, setSelect] = useState(false);
  const [dataSelect, setDataSelect] = useState("");

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

  const handleCheckTransport = () => {
    axiosGetLines();
    setSelect(true);
  };

  const axiosGetLines = () => {
    axios.get(ENDPOINT_LINES, {}).then(function(response) {
      setDataSelect(response.data.data);
      console.log(dataSelect);
    });
  };

  return (
    <>
      <WrapperForm>
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
            <input
              checked
              type="radio"
              value="Ônibus"
              name="typeTransport"
              onClick={handleCheckTransport}
            />
            <LabelRadio>Ônibus</LabelRadio>
            <input type="radio" value="Trem" name="typeTransport" />
            <LabelRadio>Trem</LabelRadio>
            <input type="radio" value="Metrô" name="typeTransport" />
            <LabelRadio>Metrô</LabelRadio>
          </div>
          <LabelFields>2. Selecione a linha:</LabelFields>
          <div>
            <select name="id_lnha" id="id_lnha">
              {select &&
                dataSelect.map((item, index) => {
                  return (
                    <option value={item._id} key={`option-${index}`}>
                      {item.id}
                    </option>
                  );
                })}
            </select>
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
