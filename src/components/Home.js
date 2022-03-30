import React from "react";
import styled from "styled-components";
import About from "./About";
import Categories from "./Categories";
import Footer from "./Footer";
import Header from "./Header";
import YxOne from "./YxOne";
import ZxNine from "./ZxNine";
import ZxSeven from "./ZxSeven";

const Container = styled.div`
  max-width: 100vw;
  margin: auto;
`;

const Home = () => {
  return (
    <>
      <Container>
        <Header />
        <Categories />
        <ZxNine />
        <ZxSeven />
        <YxOne />
        <About />
        <Footer />
      </Container>
    </>
  );
};
export default Home;
