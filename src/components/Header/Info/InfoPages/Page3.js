import React from "react";
import gif from "../../../../assets/Gale-Shapley.gif";
import { PageContainer, H6, PageNumber } from "./PagesElements";

const Page3 = () => {
  return (
    <PageContainer>
      <H6 style={{ fontWeight: "600" }}>
        Animation showing an example of the Gale – Shapley algorithm:
      </H6>
      <PageNumber>3/8</PageNumber>
      <img
        src={gif}
        style={{ width: "470px", height: "370px", marginTop: "10px" }}
      />
    </PageContainer>
  );
};

export default Page3;
