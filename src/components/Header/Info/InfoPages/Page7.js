import React from "react";
import img from "../../../../assets/control_button.png";
import { PageContainer, PageNumber, FunctionList } from "./PagesElements";

const Page7 = () => {
  return (
    <PageContainer>
      <img
        src={img}
        style={{ width: "400px", height: "80px", marginBottom: "15px" }}
        alt="ControlButton_Image"
      />
      <ul>
        <FunctionList>
          The entities can be <strong>randomized</strong> by clicking the
          randomize icon.
        </FunctionList>
        <FunctionList>
          There is a <strong>default configuration</strong> when the visualizer
          starts, one can revert back to that with the reset to default.
        </FunctionList>
        <FunctionList>
          The user may <strong>download</strong> the configuration the
          visualizer currently has.
        </FunctionList>
        <FunctionList>
          The user may <strong>load</strong> the configuration that they saved
          from the visualizer and is stored at their device.
        </FunctionList>
        <FunctionList>
          The user may <strong>pause</strong> at any time the visualization is
          running.
        </FunctionList>
        <FunctionList>
          There is also an option to simply{" "}
          <strong>skip all the visualization</strong> and get to the results
          right away.
        </FunctionList>
        <FunctionList>
          The user may <strong>stop</strong> the visualization at any time and
          it will go back to their <strong>latest configuration</strong>.
        </FunctionList>
        <FunctionList>
          When the <strong>visualization is finished</strong>, the{" "}
          <strong>results can be interacted</strong>. User can check the pairs
          simply by <strong>clicking on any entity</strong>.
        </FunctionList>
      </ul>
      <PageNumber>7/8</PageNumber>
    </PageContainer>
  );
};

export default Page7;
