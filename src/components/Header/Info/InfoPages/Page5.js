import React from "react";
import gif from "../../../../assets/swap_stm_algoviz.gif";
import {
  PageContainer,
  Heading,
  PageNumber,
  InfoContent,
} from "./PagesElements";

const Page5 = () => {
  return (
    <PageContainer>
      <Heading>How do I put it to use ?</Heading>
      <InfoContent>
        Preference list of both male and female groups can be rearranged by{" "}
        <strong>
          <i>dragging & dropping</i>
        </strong>
        . You can also delete the entity by clicking the{" "}
        <strong>delete icon</strong>, or add more by clicking the{" "}
        <strong>add icon</strong>.
      </InfoContent>
      <PageNumber>5/8</PageNumber>
      <img src={gif} style={{ width: "300px", height: "275px" }} />
    </PageContainer>
  );
};

export default Page5;
