import React, { useState } from "react";
import { Link } from "gatsby";
import { FlexContent } from "../components/FlexContent.style.js";
import {
  WrapperMenu,
  Wrapper,
  CtaMenu,
} from "../components/ChoiceMenu/choiceMenu.style.js";
import { Card } from "../components/Card.style.js";
import Layout from "../components/layout";
import Image from "../components/image";
import { Container } from "../components/layoutComponents";
import SEO from "../components/seo";
import { Button } from "../components/Button";
import { FormSmall } from "../components/FormSmall";
import { DataView } from "../components/DataView";

const IndexPage = () => {
  const [display, setDisplay] = useState("form");

  return (
    <Layout>
      <Container>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h2 style={{ color: "#ffffff", margin: "48px 0 0 0", padding: "0" }}>
          Relate um delito acontecido em algum transporte público de São Paulo
          em instantes
        </h2>
        <br></br>
        <WrapperMenu>
          <Wrapper>
            <CtaMenu onClick={() => setDisplay("form")}>
              Faça uma denúncia
            </CtaMenu>
            <CtaMenu onClick={() => setDisplay("data")}>
              Informações sobre as linhas
            </CtaMenu>
          </Wrapper>
        </WrapperMenu>
        <FlexContent justifyContent="space-between">
          {display == "form" && <FormSmall />}
          {display == "data" && <DataView />}
        </FlexContent>

        {/* <Link to="/page-2/">Go to page 2</Link> */}
      </Container>
    </Layout>
  );
};

export default IndexPage;
