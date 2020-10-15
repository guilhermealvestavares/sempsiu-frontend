import React from "React";
import { FlexContent } from "../FlexContent.style.js";
import { Button } from "../Button";
import {
  LabelRadio,
  LabelFields,
  LabelFieldsWithSomesRadios,
  WrapperForm,
} from "./formSmall.style.js";
const FormSmall = () => (
  <>
    <WrapperForm>
      <LabelFields>1. Selecione o transporte:</LabelFields>
      <div>
        <input type="radio" value="Ônibus" name="radioButtonFormSmall" />
        <LabelRadio>Ônibus</LabelRadio>
        <input type="radio" value="Trem" name="radioButtonFormSmall" />
        <LabelRadio>Trem</LabelRadio>
        <input type="radio" value="Metrô" name="radioButtonFormSmall" />
        <LabelRadio>Metrô</LabelRadio>
      </div>
      <LabelFields>2. Selecione a linha:</LabelFields>
      <div>
        <select name="lines" id="lines">
          <option value="1 - Azul">1 - Azul</option>
          <option value="3 - Vermelha">3 - Vermelha</option>
          <option value="4 - Amarela">4 - Amarela</option>
          <option value="5 - Lilás">5 - Lilás</option>
        </select>
      </div>
      <LabelFields>3. O delito aconteceu agora?</LabelFields>
      <div>
        <input type="radio" value="Não" name="occurrenceNow" />
        <LabelRadio>Não</LabelRadio>
        <input type="radio" value="Sim" name="occurrenceNow" />
        <LabelRadio>Sim</LabelRadio>
      </div>

      <LabelFields>4. Selecione o tipo do delito:</LabelFields>
      <div>
        <input type="radio" value="Assédio" name="occurrenceType" />
        <LabelRadio>Assédio</LabelRadio>
        <input type="radio" value="Racismo" name="occurrenceType" />
        <LabelRadio>Racismo</LabelRadio>
        <input type="radio" value="Violência física" name="occurrenceType" />
        <LabelRadio>Violência física</LabelRadio>
        <input type="radio" value="Violência verbal" name="occurrenceType" />
        <LabelRadio>Violência verbal</LabelRadio>
      </div>

      <LabelFields>
        5. Selecione algumas informações sobre o agressor:
      </LabelFields>
      <div>
        <LabelFieldsWithSomesRadios>Cabelo</LabelFieldsWithSomesRadios>
        <input type="radio" value="Curto" name="InfosAgressorHair" />
        <LabelRadio>Curto</LabelRadio>
        <input type="radio" value="Longo" name="InfosAgressorHair" />
        <LabelRadio>Longo</LabelRadio>

        <LabelFieldsWithSomesRadios>Altura</LabelFieldsWithSomesRadios>
        <input type="radio" value="Alto" name="InfosAgressorHeight" />
        <LabelRadio>Alto</LabelRadio>
        <input type="radio" value="Baixo" name="InfosAgressorHeight" />
        <LabelRadio>Baixo</LabelRadio>

        <LabelFieldsWithSomesRadios>Cor</LabelFieldsWithSomesRadios>
        <input type="radio" value="Negro" name="InfosAgressorSkin" />
        <LabelRadio>Negro</LabelRadio>
        <input type="radio" value="Branco" name="InfosAgressorSkin" />
        <LabelRadio>Branco</LabelRadio>
      </div>

      <LabelFields>Informações adicionais:</LabelFields>
      <div>
        <textarea placeholder="opcional"></textarea>
      </div>
      <Button bgColor="#06D6A0" margin="0 16px 0 0">
        Clique aqui para fazer uma denúncia
      </Button>
    </WrapperForm>
  </>
);

export { FormSmall };
