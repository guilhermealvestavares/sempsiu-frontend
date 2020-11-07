import React from "react";
import { WhatToDo } from "../components/WhatToDo";
import Layout from "../components/layout";
import { Container } from "../components/layoutComponents";
import SEO from "../components/seo";

const WhatToDoPage = () => {
  return (
    <Layout>
      <Container>
        <SEO
          title="Home"
          keywords={[`denúncia`, `assédio`, `Transporte Público`]}
        />
        <WhatToDo />
      </Container>
    </Layout>
  );
};

export { WhatToDoPage };
