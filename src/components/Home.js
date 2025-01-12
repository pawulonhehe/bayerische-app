import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="KC DOMCIA <333"
        description="BOZE JAK JA CIEBIE KC"
        backgroundImg="domciaqueen1.png"
        leftBtnText="Nie da sb zlozyc order"
        rightBtnText="Bo jestes bezcenna oraz moja"
      />
      <Section
        title="JESTES JAK...."
        description="pyszna kawcia z rana (potrzebuje Cb codziennie)"
        backgroundImg="domciaqueen2.png"
        leftBtnText="BUZIACZKI ORAZ KC :****"
        rightBtnText="DOMCIA DZWONI ŁUP ŁUP ŁUP"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Learn more"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Learn more"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Shop now"
        rightBtnText=""
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  color: #393c41;
`;
