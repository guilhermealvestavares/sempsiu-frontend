import React, { useState } from "react";
import Layout from "../components/layout";
import { Container } from "../components/layoutComponents";
import SEO from "../components/seo";
import { HowToAct } from "../components/HowToAct";

const WhatToDo = () => {
  return (
    <Layout>
      <Container>
        <SEO
          title="O que fazer"
          keywords={[`denúncia`, `assédio`, `Transporte Público`]}
        />
        <HowToAct />
      </Container>
    </Layout>
  );
};

export default WhatToDo;
