import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { Container } from "./layoutComponents";

const Header = ({ siteTitle, className }) => (
  <header className={className}>
    <Container>
      <Link to="/">
        <h1>Sem Psiu</h1>
      </Link>
    </Container>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

const StyledHeader = styled(Header)`
  color: #ffffff;
  background: var(--primary-color);
  padding: 1rem 0;
  margin-bottom: 1rem;
  h1 {
    margin: 0;
  }
`;

export default StyledHeader;
