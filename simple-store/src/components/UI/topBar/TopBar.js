import React from "react";
import styled from "styled-components";
import TopBarItem from "./TopBarItem";

const TopBar = () => {
  return (
    <div>
      <TopBarLogoContainer>Top bar</TopBarLogoContainer>
      <TopBarItemsContainer>
        {items.map((e) => (
          <TopBarItem title={e.title} linkTo={e.linkTo} />
        ))}
      </TopBarItemsContainer>
    </div>
  );
};

const items = [
  {
    title: "Paintings",
    linkTo: "paintings",
  },
  {
    title: "Drawings",
    linkTo: "drawings",
  },
  {
    title: "Sculpture",
    linkTo: "sculpture",
  },
  {
    title: "Artists",
    linkTo: "artists",
  },
];

const TopBarLogoContainer = styled.div`
  display: inline-flex;
`;

const TopBarItemsContainer = styled.div`
  display: inline-flex;
  float: right;
`;

export default TopBar;
