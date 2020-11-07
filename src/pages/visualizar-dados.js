import React, { useState } from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { Container } from "../components/layoutComponents";
import SEO from "../components/seo";
import { DataView } from "../components/DataView";

const ViewData = () => {
  return (
    <Layout>
      <Container>
        <SEO
          title="Home"
          keywords={[`denúncia`, `assédio`, `Transporte Público`]}
        />
        <DataView />
      </Container>
    </Layout>
  );
};

export default ViewData;
