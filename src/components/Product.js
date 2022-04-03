import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1110px;
  margin: auto;
  margin-top:160px;
  height: 560px;
  display flex;
  align-items:center;
  justify-content:space-between;
`;

const ImageContent = styled.div`
  background-color: #f1f1f1;
  width: 540px;
  height: 100%;
  border-radius: 8px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;
const TextContent = styled.div`

  display;flex;
  align-items:center;
 justify-content:center;
`;
const Info = styled.div`
  width: 445px;
  height: 343px;
`;
const NewTitle = styled.h1`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 10px;

  color: #d87d4a;
`;
const Title = styled.h1`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 44px;
  /* or 110% */

  letter-spacing: 1.42857px;
`;
const Desc = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  opacity: 0.5;
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
const Product = (props) => {
  const { details, index } = props;
  console.log(details);
  const { name, image, description, ...data } = details;
  console.log(image);
  const { desktop } = image;
  console.log(`${desktop}`);
  const imgFile = `.${desktop}`;
  console.log(imgFile);

  if (index % 2 === 0) {
    return (
      <Container>
        <ImageContent>
          <Image src={imgFile} alt={name} />
        </ImageContent>
        <TextContent>
          <Info>
            {data.new && <NewTitle>NEW PRODUCT</NewTitle>}
            <Title>{name}</Title>
            <Desc>{description}</Desc>
            <Button>SEE PRODUCT</Button>
          </Info>
        </TextContent>
      </Container>
    );
  } else if (index % 2 !== 0) {
    return (
      <Container>
        <TextContent>
          <Info>
            {data.new && <NewTitle>NEW PRODUCT</NewTitle>}
            <Title>{name}</Title>
            <Desc>{description}</Desc>
            <Button>SEE PRODUCT</Button>
          </Info>
        </TextContent>
        <ImageContent>
          <Image src={imgFile} alt={name} />
        </ImageContent>
      </Container>
    );
  }
};

export default Product;
