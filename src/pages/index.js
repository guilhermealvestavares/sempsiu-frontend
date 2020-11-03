import React, { useState } from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { Container } from "../components/layoutComponents";
import SEO from "../components/seo";
import { FormSmall } from "../components/FormSmall";
import { DataView } from "../components/DataView";
import { ChooseOption } from "../components/ChooseOption";

const IndexPage = () => {
  return (
    <Layout>
      <Container>
        {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h2 style={{ color: "#ffffff", margin: "48px 0 0 0", padding: "0" }}>
          Relate um delito acontecido em algum transporte público de São Paulo
          em instantes
        </h2>
         */}
        <ChooseOption />
      </Container>
    </Layout>
  );
};

export default IndexPage;
