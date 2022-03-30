import React from "react";
import styled from "styled-components";
import aboutImage from "../assets/shared/desktop/image-best-gear.jpg";

const Container = styled.div`
  max-width: 1110px;
  display: flex;
  margin: auto;
  margin-top: 200px;
  align-items: center;
  justify-content: space-between;
`;
const LeftContent = styled.div``;
const Info = styled.div`
  width: 445px;
  text-align: justified;
`;
const RightContent = styled.div``;
const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;
const Title = styled.h1`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 44px;
  /* or 110% */
  margin-bottom: 32px;
  letter-spacing: 1.42857px;
  text-transform: uppercase;
`;
const Desc = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  /* or 167% */

  opacity: 0.5;
`;
const TextOrange = styled.span`
  color: #d87d4a;
`;
const About = () => {
  return (
    <Container>
      <LeftContent>
        <Info>
          <Title>
            Bringing you the <TextOrange>best</TextOrange> audio gear
          </Title>
          <Desc>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </Desc>
        </Info>
      </LeftContent>
      <RightContent>
        <Image src={aboutImage} />
      </RightContent>
    </Container>
  );
};

export default About;
