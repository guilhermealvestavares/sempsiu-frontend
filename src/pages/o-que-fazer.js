import React, { useState } from "react";
import Layout from "../components/layout";
import { Container } from "../components/layoutComponents";
import SEO from "../components/seo";

const WhatToDo = () => {
  return (
    <Layout>
      <Container>
        <SEO
          title="Denunciar"
          keywords={[`denúncia`, `assédio`, `Transporte Público`]}
        />
        teste
      </Container>
    </Layout>
  );
};

export default WhatToDo;
