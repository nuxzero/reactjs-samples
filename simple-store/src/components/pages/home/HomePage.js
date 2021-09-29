import React from "react";
import styled from "styled-components";
import ProductItem from "../../UI/products/ProductItem";
import Template from "../../UI/Template";

const HomePage = () => {
  return <Template content={products()} />;
};

const mockData = [
  {
    title: "Warm Basekt",
    subtitle: "Flora Powers",
    shortDescription: "Acrylic on wood, 2014",
    image: "https://picsum.photos/id/1033/300/300",
  },
  {
    title: "Wallowing Breeze",
    subtitle: "Ria Arante",
    shortDescription: "Gouache on paper, 2018",
    image: "https://picsum.photos/id/1048/300/300",
  },
];

const products = () => {
  return (
    <div>
      <h1>Featured Paintings</h1>
      <ProductsContainer>
        {mockData.map((e) => (
          <ProductItem product={e} />
        ))}
      </ProductsContainer>
    </div>
  );
};

const ProductsContainer = styled.div`
  display: flex;
`;

export default HomePage;
