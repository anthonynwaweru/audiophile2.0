import React, { useEffect, useState } from "react";
import styled from "styled-components";
import About from "./About";
import Categories from "./Categories";
import { data } from "./data";
import Footer from "./Footer";
import Headphone from "./Headphone";
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
const HeadPhones = () => {
  const [headPhones, setHeadPhones] = useState([]);

  // console.log(category);
  useEffect(() => {
    const processedData = data.filter((dta) => dta.category === "headphones");
    setHeadPhones(processedData);
  }, []);
  return (
    <Container>
      <Header>
        <Navbar />
        <Title>HEADPHONES</Title>
      </Header>
      {headPhones.map((dta, index) => {
        return <Headphone key={dta.id} index={index} details={dta} />;
      })}

      <Categories />
      <About />
      <Footer />
    </Container>
  );
};
export default HeadPhones;
