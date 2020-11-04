import React, { useState } from "react";
import Layout from "../components/layout";
import { Container } from "../components/layoutComponents";
import SEO from "../components/seo";
import { FormSmall } from "../components/FormSmall";

const Form = () => {
  return (
    <Layout>
      <Container>
        <SEO
          title="Denunciar"
          keywords={[`denúncia`, `assédio`, `Transporte Público`]}
        />
        <FormSmall />
      </Container>
    </Layout>
  );
};

export default Form;
