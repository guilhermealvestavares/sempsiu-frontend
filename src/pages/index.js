import React from "react";
import { Link } from "gatsby";
import { FlexContent } from "../components/FlexContent.style.js";
import { Card } from "../components/Card.style.js";
import Layout from "../components/layout";
import Image from "../components/image";
import { Container } from "../components/layoutComponents";
import SEO from "../components/seo";
import { Button } from "../components/Button";
import { FormSmall } from "../components/FormSmall";
import { ChoiceMenu } from "../components/ChoiceMenu";

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h2 style={{ color: "#ffffff", margin: "48px 0 0 0", padding: "0" }}>
        Relate um delito acontecido em algum transporte público de São Paulo em
        instantes
      </h2>
      <br></br>
      <ChoiceMenu />
      <FlexContent justifyContent="space-between">
        <FormSmall />
      </FlexContent>

      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Container>
  </Layout>
);

export default IndexPage;
