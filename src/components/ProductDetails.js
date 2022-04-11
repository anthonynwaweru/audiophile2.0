import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Container = styled.div``;
const Header = styled.div`
  height: 97px;
  max-width: 100vw;
  margin: auto;
  display: flex;
  background: black;
`;
const ProductDetails = (props) => {
  console.log(props);
  return (
    <Container>
      <Header>
        <Navbar />
      </Header>
    </Container>
  );
};
export default ProductDetails;
