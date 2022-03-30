import React from "react";
import styled from "styled-components";
import yxEarphones from "../assets/home/desktop/image-earphones-yx1.jpg";

const Container = styled.div`
  max-width: 1110px;
  margin-top: 48px;
  height: 320px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftContent = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;
const RightContent = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #f1f1f1;
  border-radius: 8px;
`;
const Image = styled.img`
  object-fit: contain;
  border-radius: 8px;
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
const YxOne = () => {
  return (
    <Container>
      <LeftContent>
        <Image src={yxEarphones} />
      </LeftContent>
      <RightContent>
        <Title>YX1 EARPHONES</Title>
        <Button>SEE PRODUCT</Button>
      </RightContent>
    </Container>
  );
};

export default YxOne;
