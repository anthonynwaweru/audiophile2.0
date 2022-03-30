import React from "react";
import styled from "styled-components";
import zxsevenSpeaker from "../assets/home/desktop/image-speaker-zx7.jpg";

const Container = styled.div`
  max-width: 1110px;
  margin-right: auto;
  margin-left: auto;
  height: 320px;
  background-image: URL(${zxsevenSpeaker});
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 8px;
`;
const Info = styled.div`
  margin-bottom: 101px;
  padding-top: 101px;
  padding-left: 95px;
`;
const Title = styled.h1`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 2px;
`;
const Button = styled.button`
  width: 160px;
  height: 48px;
  border-radius: none;
  border: 1px solid;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  /* identical to box height */
  cursor: pointer;
  letter-spacing: 1px;
  &:hover {
    border: none;
    background: black;
    color: white;
  }
`;

const ZxSeven = () => {
  return (
    <Container>
      <Info>
        <Title>ZX7 SPEAKER</Title>
        <Button>SEE PRODUCT</Button>
      </Info>
    </Container>
  );
};

export default ZxSeven;
