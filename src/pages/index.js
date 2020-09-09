import React from "react";
import { Link } from "gatsby";
import { FlexContent } from "../components/FlexContent.style.js";
import { Card } from "../components/Card.style.js";
import Layout from "../components/layout";
import Image from "../components/image";
import { Container } from "../components/layoutComponents";
import SEO from "../components/seo";
import { Button } from "../components/Button";

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <FlexContent>
        <Button bgColor="#EF476F" margin="0 16px 0 0">Clique aqui para fazer uma denúncia</Button>
        <Button>Clique aqui para ver dados dos transportes</Button>
      </FlexContent>

      <Card>Teste</Card>
      {/* <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> */}
    </Container>
  </Layout>
);

export default IndexPage;
