import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Container = styled.div``;
const Header = styled.div`
  height: 97px;
  max-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
`;
const ProductDetails = () => {
  return (
    <Container>
      <Header>
        <Navbar />
      </Header>
    </Container>
  );
};
export default ProductDetails;
