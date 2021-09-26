import React from "react";
import styled from "styled-components";

const ProductItem = (props) => {
  const { title } = props;
  return (
    <Wrapper>
      <img src="https://picsum.photos/id/1033/300/300" alt="Product item" />
      <div>{title}</div>
      <div>Product subtitle</div>
      <div>Date</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #ff0000;
`

export default ProductItem;
