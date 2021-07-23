import React, { useState, useEffect } from "react";
import {
  AnimationStyledPaper,
  AnimationList,
  Name,
  PreferenceList,
  ListItem,
  StyledFaChevronCircleRight,
  StyledFaChevronCircleDown,
} from "../MainListElements";
import Collapse from "@material-ui/core/Collapse";

const AnimationCol = ({
  male,
  female,
  showFemaleEntity,
  toggleOpacity,
  expandMalePreference,
  expandFemalePreference,
  scrollMaleIndex,
  scrollFemaleIndex,
  highlightMalePrefIndex,
  highlightFemalePrefIndex,
  bgColor,
  engageIndex,
  showAnimationColor,
  play,
}) => {
  const [toggleMale, setToggleMale] = useState(false);
  const [toggleFemale, setToggleFemale] = useState(false);
  const [styleElementFlag, setStyleElementFlag] = useState(false);
  const [malePrefInd, setMalePrefInd] = useState(-1);
  const [femalePrefInd, setFemalePrefInd] = useState(-1);

  useEffect(() => {
    setStyleElementFlag(toggleOpacity);
  }, [toggleOpacity]);
  useEffect(() => {
    let fm = expandMalePreference;
    let ff = expandFemalePreference;
    setToggleMale(fm);
    setToggleFemale(ff);
  }, [expandMalePreference, expandFemalePreference]);
  useEffect(() => {
    if (scrollMaleIndex) {
      let maleEntity = document.getElementsByClassName("entity-male");
      console.log(maleEntity[0]);
      maleEntity[0].scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [scrollMaleIndex]);
  useEffect(() => {
    if (scrollFemaleIndex) {
      let femaleEntity = document.getElementsByClassName("entity-female");
      console.log(femaleEntity[0]);
      femaleEntity[0].scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [scrollFemaleIndex]);
  useEffect(() => {
    // if (highlightMalePrefIndex !== -1) {
    // }
    // if (highlightFemalePrefIndex !== -1) {
    // }
    // Will move to updated preference index !
    setMalePrefInd(highlightMalePrefIndex);
    setFemalePrefInd(highlightFemalePrefIndex);
  }, [highlightMalePrefIndex, highlightFemalePrefIndex]);

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
          <AnimationStyledPaper
            elevation={10}
            styleElementFlag={styleElementFlag}
            highlight={!toggleMale && bgColor === ""}
            className="entity-male"
            bgColor={bgColor}
            engageIndex={-1}
            toggle={toggleMale}
          >
            <AnimationList
              flag={toggleMale}
              engageIndex={-1}
              showAnimationColor={showAnimationColor}
            >
              {!toggleMale ? (
                <StyledFaChevronCircleRight animation={true} />
              ) : (
                <StyledFaChevronCircleDown animation={true} />
              )}
              <Name>{male.name}</Name>
            </AnimationList>
            {toggleMale &&
              male &&
              male.preferencesName.map((pref, ind) => {
                return (
                  <PreferenceList
                    ind={ind}
                    len={male.preferencesName.length}
                    key={ind}
                    animation={true}
                    highlight={malePrefInd === ind ? true : false}
                    engageHighlight={false}
                    showAnimationColor={showAnimationColor}
                    play={play}
                  >
                    <ListItem animation={true}>{pref}</ListItem>
                  </PreferenceList>
                );
              })}
          </AnimationStyledPaper>
        </Collapse>
        {showFemaleEntity && (
          <>
            <AnimationStyledPaper
              elevation={10}
              styleElementFlag={styleElementFlag}
              highlight={!toggleFemale && bgColor === ""}
              className="entity-female"
              bgColor={bgColor}
              engageIndex={engageIndex}
              toggle={toggleFemale}
            >
              <AnimationList
                flag={toggleFemale}
                engageIndex={engageIndex}
                showAnimationColor={showAnimationColor}
              >
                {!toggleFemale ? (
                  <StyledFaChevronCircleRight animation={true} />
                ) : (
                  <StyledFaChevronCircleDown animation={true} />
                )}
                <Name>{female.name}</Name>
              </AnimationList>
              {toggleFemale &&
                female &&
                female.preferencesName.map((pref, ind) => {
                  return (
                    <PreferenceList
                      ind={ind}
                      len={female.preferencesName.length}
                      key={ind}
                      animation={true}
                      highlight={femalePrefInd === ind ? true : false}
                      engageHighlight={engageIndex === ind ? true : false}
                      showAnimationColor={showAnimationColor}
                      play={play}
                    >
                      <ListItem animation={true}>{pref}</ListItem>
                    </PreferenceList>
                  );
                })}
            </AnimationStyledPaper>
          </>
        )}
      </div>
    </>
  );
};

export default AnimationCol;
