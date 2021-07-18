import React, { useState, useEffect } from "react";
import {
  StyledPaper,
  AnimationList,
  Name,
  PreferenceList,
  ListItem,
  StyledFaChevronCircleRight,
  StyledFaChevronCircleDown,
} from "../MainListElements";
import Collapse from "@material-ui/core/Collapse";

const AnimationCol = ({ male, female, flag }) => {
  const [toggleMale, setToggleMale] = useState(false);
  const [toggleFemale, setToggleFemale] = useState(false);
  const [styleFemaleElement, setStyleFemaleElement] = useState({
    opacity: 0,
  });
  setTimeout(() => {
    setToggleMale(true);
  }, 2000);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Collapse
          in={toggleMale}
          collapsedHeight="85px"
          timeout="auto"
          style={{
            overflow: "inherit",
          }}
        >
          <StyledPaper elevation={10}>
            <AnimationList flag={toggleMale}>
              {!toggleMale ? (
                <StyledFaChevronCircleRight animation={true} />
              ) : (
                <StyledFaChevronCircleDown animation={true} />
              )}
              <Name>{male.name}</Name>
            </AnimationList>
            {toggleMale &&
              male.preferences.map((pref, ind) => {
                return (
                  <PreferenceList
                    ind={ind}
                    len={male.preferences.length}
                    key={ind}
                    animation={true}
                  >
                    <ListItem animation={true}>{pref}</ListItem>
                  </PreferenceList>
                );
              })}
          </StyledPaper>
        </Collapse>
        {flag && (
          <>
            <StyledPaper elevation={10} style={styleFemaleElement}>
              <AnimationList flag={toggleFemale}>
                {!toggleFemale ? (
                  <StyledFaChevronCircleRight animation={true} />
                ) : (
                  <StyledFaChevronCircleDown animation={true} />
                )}
                <Name>{female.name}</Name>
              </AnimationList>
              {toggleFemale &&
                female.preferences.map((pref, ind) => {
                  return (
                    <PreferenceList
                      ind={ind}
                      len={female.preferences.length}
                      key={ind}
                      animation={true}
                    >
                      <ListItem animation={true}>{pref}</ListItem>
                    </PreferenceList>
                  );
                })}
            </StyledPaper>
          </>
        )}
      </div>
    </>
  );
};

export default AnimationCol;
