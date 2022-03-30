import React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import headphones from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";

const Container = styled.div`
  max-width: 1110px;
  margin: 0 auto;
  padding: 120px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      <CategoryItem title="HEADPHONES" image={headphones} />
      <CategoryItem title="SPEAKERS" image={speakers} />
      <CategoryItem title="EARPHONES" image={earphones} />
    </Container>
  );
};

export default Categories;
