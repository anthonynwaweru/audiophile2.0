import React, { useEffect, useState } from "react";
import styled from "styled-components";
import About from "./About";
import Categories from "./Categories";
import { data } from "./data";
import Product from "./Product";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Container = styled.div``;
const Header = styled.div`
  background: black;
  max-width: 100vw;
  margin: auto;

  height: 336px;
`;
const Title = styled.h1`
  text-align: center;
  margin: 98px 0;
  color: white;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 44px;
  /* identical to box height, or 110% */

  text-align: center;
  letter-spacing: 1.42857px;
`;
const Earphones = () => {
  const [earphones, setEarphones] = useState([]);

  useEffect(() => {
    const speakersData = data.filter((dta) => dta.category === "earphones");
    setEarphones(speakersData);
  }, []);

  return (
    <Container>
      <Header>
        <Navbar />
        <Title>EARPHONES</Title>
      </Header>
      {earphones.map((dta, index) => (
        <Product details={dta} index={index} />
      ))}
      <Categories />
      <About />
      <Footer />
    </Container>
  );
};

export default Earphones;
