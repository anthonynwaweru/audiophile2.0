import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import headerImg from "../assets/home/desktop/image-hero.jpg";

const Container = styled.div`
  height: 729px;
  width: 100vw;
  //   margin-top: 120px;
  background-image: url(${headerImg});
  border-radius: 8px;
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
const Content = styled.div`
  color: white;
  max-width: 1110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  overflow: hidden;
`;
const LeftContent = styled.div`
  width: 35%;
  margin-top: 128px;
  text-align: justified;
`;
const LightHeader = styled.h1`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 24px;
  letter-spacing: 10px;
`;
const LeadHeader = styled.h1`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 58px;
  /* or 104% */
  margin-bottom: 24px;
  letter-spacing: 2px;
`;
const Desc = styled.p`
  text-align: justified;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  mix-blend-mode: normal;
  opacity: 0.75;
  margin-bottom: 40px;
`;
const Button = styled.button`
  background-color: #d87d4a;
  color: white;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  /* identical to box height */
  border: none;
  width: 160px;
  height: 48px;
  letter-spacing: 1px;
  cursor: pointer;
  &:hover {
    background: #fbaf85;
  }
`;

const Header = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Content>
          <LeftContent>
            <LightHeader>NEW PRODUCT</LightHeader>
            <LeadHeader>XX99 Mark II Headphones</LeadHeader>
            <Desc>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </Desc>
            <Button>SEE PRODUCT</Button>
          </LeftContent>
        </Content>
      </Container>
    </>
  );
};

export default Header;
