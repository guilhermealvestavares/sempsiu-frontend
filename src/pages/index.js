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
        <SEO
          title="Home"
          keywords={[`denúncia`, `assédio`, `Transporte Público`]}
        />
        <ChooseOption />
      </Container>
    </Layout>
  );
};

export default IndexPage;
