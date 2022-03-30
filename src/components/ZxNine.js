import React from "react";
import styled from "styled-components";
import zxNine from "../assets/home/desktop/image-speaker-zx9.png";
import circlePattern from "../assets/home/desktop/pattern-circles.svg";

const Container = styled.div`
  max-width: 1110px;
  margin: auto;
  background-color: #d87d4a;
  height: 560px;
  overflow: hidden;
  margin-bottom: 48px;
  border-radius: 8px;
  position: relative;
`;

const CirclePattern = styled.img`
  object-fit: contain;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  padding-top: 96px;
  z-index: 2;
  top: 0;
  bottom: 0;
  position: absolute;
`;
const LeftImage = styled.div`
  margin-left: 117px;
`;
const RightContent = styled.div`
  margin-right: 95px;
  margin-left: 135px;
`;
const Title = styled.h1`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 58px;
  /* or 104% */
  color: white;
  letter-spacing: 2px;
  margin-bottom: 24px;
`;
const Desc = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  /* or 167% */
  margin-bottom: 40px;
  color: #ffffff;

  mix-blend-mode: normal;
  opacity: 0.75;
`;
const Button = styled.button`
  width: 160;
  height: 48px;
  border: none;
  background: black;
  color: white;
  padding: 15px 35px;
  margin-bottom: 124px;
  cursor: pointer;
  &:hover {
    border: none;
    background: #4c4c4c;
    color: white;
  }
`;
const Image = styled.img`
  height: 493px;
  object-fit: contain;
  width: 410px;
`;

const ZxNine = () => {
  return (
    <Container>
      <CirclePattern src={circlePattern} />
      <Content>
        <LeftImage>
          <Image src={zxNine} />
        </LeftImage>
        <RightContent>
          <Title>ZX9 SPEAKER</Title>
          <Desc>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </Desc>
          <Button>SEE PRODUCT</Button>
        </RightContent>
      </Content>
    </Container>
  );
};

export default ZxNine;
