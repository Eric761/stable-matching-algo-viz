import React from "react";
import gif from "../../../../assets/toggle_stm_algoviz.gif";
import {
  PageContainer,
  Heading,
  PageNumber,
  InfoContent,
} from "./PagesElements";

const Page4 = () => {
  return (
    <PageContainer>
      <Heading>How do I put it to use ?</Heading>
      <InfoContent>
        You can edit the names of everyone in either <strong>male</strong> or{" "}
        <strong>female</strong> groups, and you can also see their list by
        clicking on their{" "}
        <strong>
          <i>arrow icon</i>
        </strong>
        .
      </InfoContent>
      <PageNumber>4/8</PageNumber>
      <img src={gif} style={{ width: "300px", height: "295px" }} />
    </PageContainer>
  );
};

export default Page4;