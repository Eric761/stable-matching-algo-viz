import React from "react";
import {
  PageContainer,
  Heading,
  PageNumber,
  InfoContent,
  PageLink,
} from "./PagesElements";

const Page8 = () => {
  return (
    <PageContainer>
      <Heading style={{ fontSize: "45px" }}>Enjoy !</Heading>
      <InfoContent style={{ fontSize: "28px", marginTop: "15px" }}>
        I hope you have just as much fun playing around with this visualization
        tool as I had building it ❤️
      </InfoContent>
      <InfoContent style={{ fontSize: "28px", marginTop: "15px" }}>
        If you want to see the source code for this application, check out my{" "}
        <PageLink
          href="https://github.com/Eric761/stable-matching-algo-viz"
          target="_blank"
        >
          github
        </PageLink>
        .
      </InfoContent>
      <PageNumber>8/8</PageNumber>
    </PageContainer>
  );
};

export default Page8;
