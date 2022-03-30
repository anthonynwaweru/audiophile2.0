import React from "react";
import styled from "styled-components";
import { MdOutlineNavigateNext } from "react-icons/md";

const Item = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  margin: 30px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 284px;
`;
const Title = styled.h1`
  font-family: "Manrope";
  margin-top: 42.5px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */
  margin-top: 116px;
  text-align: center;
  letter-spacing: 1.28571px;
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 204px;
  width: 100%;
  background-color: #f1f1f1;
  border-radius: 8px;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 28.17%;
  bottom: 0%;
`;
const Image = styled.img`
  position: absolute;
  width: 125px;
  height: auto;
  //   left: 32.48%;
  //   right: 32.39%;
  //   top: 0%;
  bottom: 43.66%;
  z-index: 2;
`;
const Link = styled.a`
  text-align: center;
  font-weight: 700;
  opacity: 0.5;
`;
const Button = styled.button`
  background: none;
  cursor: pointer;
  display:flex
  align-items: center;
//   text-align:center;
  border:none;
&:hover ${Link}{
  color:#d87d4a;
  opacity:1;
}
  
`;
const Icon = styled.span`
  vertical-align: middle;
  text-align: center;
  color: #d87d4a;
  font-size: 17px;
  font-weight: 700;
`;

const CategoryItem = (props) => {
  return (
    <Item>
      <Image src={props.image} />
      <Info>
        <Title>{props.title}</Title>
        <Button>
          <Link>SHOP</Link>
          <Icon>
            <MdOutlineNavigateNext />
          </Icon>
        </Button>
      </Info>
    </Item>
  );
};

export default CategoryItem;
