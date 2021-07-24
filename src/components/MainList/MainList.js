import React, { useState, useEffect } from "react";
import MaleList from "./MaleList/MaleList";
import FemaleList from "./FemaleList/FemaleList";
import AnimationCol from "./AnimationCol/AnimationCol";
import { defaultArrangement } from "../helper/arrangement";
import {
  addMaleIndices,
  addFemaleIndices,
  removeMaleIndex,
  removeFemaleIndex,
  addMaleItem,
  addFemaleItem,
  randomConfigClick,
  isValidConfig,
  userSaveFile,
  validateJSONConfig,
  nameIndexMapper,
} from "../helper/helperFns";
import { SMPAlgo } from "../helper/algorithm";
import Scheduler from "../helper/scheduler";

let newMaleArray = addMaleIndices(
  defaultArrangement.male,
  defaultArrangement.female
);

let newFemaleArray = addFemaleIndices(
  defaultArrangement.male,
  defaultArrangement.female
);

let animationQueue;
let stableMarriageNameIndex;
let stableMarriageAlgorithm;
let stableMarriageProcessQueue;

const MainList = ({
  shuffle,
  reset,
  saveFile,
  uploadFile,
  play,
  pause,
  skip,
  stop,
  SMPVizActive,
  SMPVizDone,
  handleRandomConfig,
  handleReset,
  handleSaveFile,
  handleInputFile,
  handlePlay,
  handleVizActive,
  handleVizDone,
  handlePause,
  handleSkip,
  handleStop,
}) => {
  const [maleArray, setMaleArray] = useState(
    JSON.parse(JSON.stringify(newMaleArray))
  );
  const [femaleArray, setFemaleArray] = useState(
    JSON.parse(JSON.stringify(newFemaleArray))
  );
  const [resetMaleArray, setResetMaleArray] = useState(false);
  const [resetFemaleArray, setResetFemaleArray] = useState(false);

  const [entityMale, setEntityMale] = useState({});
  const [entityFemale, setEntityFemale] = useState({});
  const [flagBtn, setFlagBtn] = useState(true);
  const [highlightMaleIndex, setHighlightMaleIndex] = useState(-1);
  const [highlightFemaleIndex, setHighlightFemaleIndex] = useState(-1);
  const [toggleOpacity, setToggleOpacity] = useState(false);
  const [showFemaleEntity, setShowFemaleEntity] = useState(false);
  const [expandMalePreference, setExpandMalePreference] = useState(false);
  const [expandFemalePreference, setExpandFemalePreference] = useState(false);
  const [scrollMaleIndex, setScrollMaleIndex] = useState(false);
  const [scrollFemaleIndex, setScrollFemaleIndex] = useState(false);
  const [highlightMalePrefIndex, setHighlightMalePrefIndex] = useState(-1);
  const [highlightFemalePrefIndex, setHighlightFemalePrefIndex] = useState(-1);
  const [bgColor, setBgColor] = useState("");
  const [bgLeftColor, setBgLeftColor] = useState({});
  const [bgRightColor, setBgRightColor] = useState({});
  const [engageIndex, setEngageIndex] = useState(-1);
  const [showAnimationColor, setShowAnimationColor] = useState(false);

  const showAnimationCol = (state, index) => {
    if (!stableMarriageAlgorithm || !SMPVizDone) return;
    console.log(state, index);
    animationQueue.clear();
    animationQueue.add(function () {
      setToggleOpacity(false);
      setExpandMalePreference(false);
      setExpandFemalePreference(false);
      setEntityMale({});
      setEntityFemale({});
      setHighlightMaleIndex(-1);
      setHighlightFemaleIndex(-1);
      setShowFemaleEntity(false);
      setScrollMaleIndex(false);
      setScrollFemaleIndex(false);
      setBgColor("");
      setBgLeftColor({});
      setBgRightColor({});
      setHighlightMalePrefIndex(-1);
      setHighlightFemalePrefIndex(-1);
      setEngageIndex(-1);
      setShowAnimationColor(false);
    }, 250);
    if (state === "male" && index !== undefined) {
      let entity = stableMarriageAlgorithm.male[index];
      if (entity.partner !== null) {
        let male = entity;
        let female = entity.partner;
        animationQueue.add(function () {
          setEntityMale(male);
          setEntityFemale(female);
          setBgColor("green !important");
          setShowAnimationColor(true);
        }, 250);
        animationQueue.add(function () {
          setToggleOpacity(true);
        }, 250);
        animationQueue.add(function () {
          setExpandMalePreference(true);
        }, 250);
        animationQueue.add(function () {
          setScrollMaleIndex(true);
        }, 250);
        animationQueue.add(function () {
          let femaleIndex = male.preferencesName.indexOf(female.name);
          setHighlightMalePrefIndex(femaleIndex);
        }, 500);
        animationQueue.add(function () {
          setShowFemaleEntity(true);
        }, 250);
        animationQueue.add(function () {
          setExpandFemalePreference(true);
        }, 250);
        animationQueue.add(function () {
          setScrollFemaleIndex(true);
        }, 250);
        animationQueue.add(function () {
          let maleIndex = female.preferencesName.indexOf(male.name);
          setHighlightFemalePrefIndex(maleIndex);
        }, 500);
        animationQueue.add(function () {
          setExpandMalePreference(false);
        }, 250);
        animationQueue.add(function () {
          setExpandFemalePreference(false);
        }, 250);
      } else {
        // TODO
      }
    } else if (state === "female" && index !== undefined) {
      let entity = stableMarriageAlgorithm.female[index];
      if (entity.partner !== null) {
        let male = entity.partner;
        let female = entity;
        animationQueue.add(function () {
          setEntityMale(male);
          setEntityFemale(female);
          setBgColor("green !important");
          setShowAnimationColor(true);
        }, 250);
        animationQueue.add(function () {
          setToggleOpacity(true);
        }, 250);
        animationQueue.add(function () {
          setExpandMalePreference(true);
        }, 250);
        animationQueue.add(function () {
          setScrollMaleIndex(true);
        }, 250);
        animationQueue.add(function () {
          let femaleIndex = male.preferencesName.indexOf(female.name);
          setHighlightMalePrefIndex(femaleIndex);
        }, 500);
        animationQueue.add(function () {
          setShowFemaleEntity(true);
        }, 250);
        animationQueue.add(function () {
          setExpandFemalePreference(true);
        }, 250);
        animationQueue.add(function () {
          setScrollFemaleIndex(true);
        }, 250);
        animationQueue.add(function () {
          let maleIndex = female.preferencesName.indexOf(male.name);
          setHighlightFemalePrefIndex(maleIndex);
        }, 500);
        animationQueue.add(function () {
          setExpandMalePreference(false);
        }, 250);
        animationQueue.add(function () {
          setExpandFemalePreference(false);
        }, 250);
      } else {
        // TODO
      }
    }
  };

  const showResult = () => {
    if (!stableMarriageAlgorithm) return;
    handleVizActive(true);
    handleVizDone(true);
    // Animation stops and containers are again uninteractive.
    animationQueue.clear();
    setToggleOpacity(false);
    setBgLeftColor({});
    setBgRightColor({});

    setTimeout(function () {
      console.log(stableMarriageAlgorithm);
      for (let entity of stableMarriageAlgorithm.male) {
        console.log(entity);
        let curMaleIndex = stableMarriageNameIndex[entity.name];
        if (entity.partner !== null) {
          setBgLeftColor({ index: curMaleIndex, color: "green !important" });
        } else {
          setBgLeftColor({ index: curMaleIndex, color: "pink !important" });
        }
      }
      for (let entity of stableMarriageAlgorithm.female) {
        let curFemaleIndex = stableMarriageNameIndex[entity.name];
        console.log(entity);
        if (entity.partner !== null) {
          setBgRightColor({
            index: curFemaleIndex,
            color: "green !important",
          });
        } else {
          setBgRightColor({
            index: curFemaleIndex,
            color: "pink !important",
          });
        }
      }
    }, 0);
  };

  const animationStep = () => {
    let { process, content } = stableMarriageProcessQueue.shift();
    let { male, female, dumped } = content;
    let curMaleIndex = stableMarriageNameIndex[male.name];
    let curFemaleIndex = stableMarriageNameIndex[female.name];
    // If the process is in between
    if (process !== "done" && process !== "start") {
      animationQueue.add(function () {
        setToggleOpacity(true);
      }, 250);
      animationQueue.add(function () {
        setExpandMalePreference(true);
      }, 250);
      animationQueue.add(function () {
        setScrollMaleIndex(true);
      }, 250);
      let selectIndex = male.preferencesName.indexOf(female.name);
      if (selectIndex !== undefined) {
        animationQueue.add(function () {
          setHighlightMalePrefIndex(selectIndex);
        }, 500);
      }
    }

    // 1st Step
    if (process === "start") {
      animationQueue.add(function () {
        setHighlightMaleIndex(curMaleIndex);
      }, 250);
      animationQueue.add(function () {
        setEntityMale(male);
        setEntityFemale(female);
      }, 250);
    }

    // Engage Process
    else if (process === "engage") {
      animationQueue.add(function () {
        setHighlightFemaleIndex(curFemaleIndex);
      }, 250);
      animationQueue.add(function () {
        setShowFemaleEntity(true);
      }, 250);
      animationQueue.add(function () {
        setExpandFemalePreference(true);
      }, 250);
      animationQueue.add(function () {
        setScrollFemaleIndex(true);
      }, 250);
      let selectIndex = female.preferencesName.indexOf(male.name);
      if (selectIndex !== undefined) {
        animationQueue.add(function () {
          setHighlightFemalePrefIndex(selectIndex);
        }, 500);
      }
      animationQueue.add(function () {
        setExpandMalePreference(false);
      }, 250);
      animationQueue.add(function () {
        setExpandFemalePreference(false);
      }, 250);
      animationQueue.add(function () {
        setBgColor("orange !important");
      }, 500);
      animationQueue.add(function () {
        setBgLeftColor({ index: curMaleIndex, color: "orange !important" });
        setBgRightColor({
          index: curFemaleIndex,
          color: "orange !important",
        });
        // notifier.queueMessage(
        //   "warning",
        //   `${male.name} is engaged with ${female.name}.`,
        //   1000
        // );
      }, 500);
    }

    // Break Process
    else if (process === "break") {
      animationQueue.add(function () {
        let oldPartnerIndex = female.preferencesName.indexOf(dumped.name);
        setEngageIndex(oldPartnerIndex);
      }, 250);
      animationQueue.add(function () {
        setShowFemaleEntity(true);
      }, 250);
      animationQueue.add(function () {
        setExpandFemalePreference(true);
      }, 250);
      animationQueue.add(function () {
        setScrollFemaleIndex(true);
      }, 250);
      animationQueue.add(function () {
        let maleIndex = female.preferencesName.indexOf(male.name);
        setHighlightFemalePrefIndex(maleIndex);
        // notifier.queueMessage('warning', `${female.name} breaks up with current partner ${dumped.name} and engages with ${male.name}.`, 2000);
      }, 500);
      animationQueue.add(function () {
        setExpandMalePreference(false);
      }, 250);
      animationQueue.add(function () {
        setExpandFemalePreference(false);
      }, 250);
      animationQueue.add(function () {
        let dumpedMaleIndex = stableMarriageNameIndex[dumped.name];
        setBgColor("orange !important");
        setBgLeftColor({ index: curMaleIndex, color: "orange !important" });
        setBgLeftColor({ index: dumpedMaleIndex, color: "pink !important" });
      }, 500);
    }

    // Reject Process
    else if (process === "reject") {
      // This is the animation for reject.
      // Reject means the female stays with their current partner, opposite of break.
      animationQueue.add(function () {
        let partnerIndex = female.preferencesName.indexOf(female.partner.name);
        setEngageIndex(partnerIndex);
      }, 250);
      animationQueue.add(function () {
        setShowFemaleEntity(true);
      }, 250);
      animationQueue.add(function () {
        setExpandFemalePreference(true);
      }, 250);
      animationQueue.add(function () {
        setScrollFemaleIndex(true);
      }, 250);
      animationQueue.add(function () {
        let maleIndex = female.preferencesName.indexOf(male.name);
        setHighlightFemalePrefIndex(maleIndex);
      }, 250);
      animationQueue.add(function () {
        setExpandMalePreference(false);
      }, 250);
      animationQueue.add(function () {
        setExpandFemalePreference(false);
      }, 250);

      animationQueue.add(function () {
        setBgColor("pink !important");
        // notifier.queueMessage(
        //   "warning",
        //   `${female.name} stays with current partner ${female.partner.name} and rejects ${male.name}.`,
        //   2000
        // );
      }, 250);
      animationQueue.add(function () {
        setBgLeftColor({ index: curMaleIndex, color: "pink !important" });
        setBgRightColor({
          index: curFemaleIndex,
          color: "pink !important",
        });
      }, 250);

      animationQueue.add(function () {
        setBgRightColor({
          index: curFemaleIndex,
          color: "orange !important",
        });
      }, 500);
    }

    // Last step process
    else if (process === "done") {
      // Animation for when the process is done. Removes the elements.
      animationQueue.add(function () {
        setToggleOpacity(false);
      }, 250);
      animationQueue.add(function () {
        setEntityMale({});
        setEntityFemale({});
        setShowFemaleEntity(false);
        setScrollMaleIndex(false);
        setScrollFemaleIndex(false);
        setBgColor("");
        setBgLeftColor({});
        setBgRightColor({});
        setHighlightMalePrefIndex(-1);
        setHighlightFemalePrefIndex(-1);
        setEngageIndex(-1);
      }, 250);
    }
    if (stableMarriageProcessQueue.length === 0) {
      animationQueue.add(function () {
        showResult();
      }, 100);
    } else {
      animationQueue.add(function () {
        animationStep();
      }, 250);
    }
  };

  useEffect(() => {
    if (shuffle) {
      let { randomFinalMaleArr, randomFinalFemaleArr } = randomConfigClick();
      setFlagBtn(false);
      setMaleArray(randomFinalMaleArr);
      setFemaleArray(randomFinalFemaleArr);
      handleRandomConfig(false);
      // To avoid undefined behaviour of toggle property in respective gender array!
      setTimeout(() => {
        setFlagBtn(true);
      }, 500);
    }
    if (reset) {
      setFlagBtn(false);
      setMaleArray(JSON.parse(JSON.stringify(newMaleArray)));
      setFemaleArray(JSON.parse(JSON.stringify(newFemaleArray)));
      handleReset(false);
      setTimeout(() => {
        console.log(maleArray, femaleArray);
        setFlagBtn(true);
      }, 500);
    }
  }, [shuffle, reset]);

  useEffect(() => {
    if (saveFile) {
      if (isValidConfig(maleArray, femaleArray)) {
        userSaveFile(
          JSON.stringify({ male: maleArray, female: femaleArray }, null, 5),
          "configuration.json",
          "application/json"
        );
      } else {
        alert("Invalid config!");
      }
      handleSaveFile(false);
    }
    if (uploadFile.state && uploadFile.event) {
      console.log(uploadFile);
      let file = uploadFile.event.target.files[0];
      let reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.addEventListener("load", function (readerEvent) {
        try {
          let config = JSON.parse(readerEvent.target.result);
          // This would throw an error if anything is wrong and prevent further lines in the same block from being executed;
          console.log(config);
          validateJSONConfig(config);
          setFlagBtn(false);
          setMaleArray([...config.male]);
          setFemaleArray([...config.female]);
          setTimeout(() => {
            handleInputFile("", false);
            setFlagBtn(true);
          }, 500);
        } catch (error) {
          // Shows an error in the UI.
          alert(error);
        } finally {
          // Make sure to reset the value of this file input to reload the same file, if given the same file.
          uploadFile.event.target.value = "";
        }
      });
    }
  }, [saveFile, uploadFile]);

  useEffect(() => {
    if (play) {
      if (!SMPVizActive && !SMPVizDone) {
        let config = {
          male: maleArray,
          female: femaleArray,
        };
        if (!isValidConfig(maleArray, femaleArray)) {
          // TODO
          return;
        }
        animationQueue = new Scheduler();
        stableMarriageNameIndex = nameIndexMapper(config);
        stableMarriageAlgorithm = new SMPAlgo(config, stableMarriageNameIndex);
        stableMarriageProcessQueue = [];

        while (!stableMarriageAlgorithm.isDone()) {
          stableMarriageAlgorithm.algoIterate();
          stableMarriageProcessQueue.push(
            ...stableMarriageAlgorithm.capture.getCurrent()
          );
        }
        // Make sure the animationQueue is not disabled.
        animationQueue.disable = false;
        console.log(stableMarriageProcessQueue);

        // Disable controls except for play, skip, pause, and stop.
        // Make the containers uninteractive
        // TODO

        // notifier.queueMessage('valid', 'Visualization start.');
        handleVizActive(true);
        animationStep();
      } else if (SMPVizActive && animationQueue && animationQueue.disable) {
        handlePause(false);
        animationQueue.continue();
        // notifier.queueMessage('valid', 'Visualization continuing.');
        // Third conditional is for when the visualization is done, and the user
        // can only use stop to reset everything.
      }
      // else {
      //     notifier.queueMessage('warning', 'Use the stop button to reset the visualization.');
      // }
    }
  }, [play]);

  useEffect(() => {
    if (pause) {
      if (
        (animationQueue && animationQueue.disable) ||
        !SMPVizActive ||
        SMPVizDone
      ) {
        return;
      }
      animationQueue.pause();
      handlePlay(false);
      // ADD Notifier
    }
    if (skip) {
      if (!SMPVizActive || SMPVizDone) return;
      showResult();
      // Make reset button disable
      handleSkip(false);
      // ADD Notifier
    }
  }, [pause, skip]);

  useEffect(() => {
    if (stop) {
      animationQueue.clear();

      // Reset the necessary variables.
      stableMarriageAlgorithm = null;
      stableMarriageNameIndex = null;
      stableMarriageProcessQueue = [];
      handleVizActive(false);
      handleVizDone(false);
      handlePlay(false);
      handleSkip(false);
      handlePause(false);
      setHighlightMaleIndex(-1);
      setHighlightFemaleIndex(-1);

      // TODO - > Reset the controls to correct state.

      // Animate the removal of the entities.
      let timeoutQueue = new Scheduler();
      timeoutQueue.add(function () {
        setToggleOpacity(false);
        setExpandMalePreference(false);
        setExpandFemalePreference(false);
        setEntityMale({});
        setEntityFemale({});
        setShowFemaleEntity(false);
        setScrollMaleIndex(false);
        setScrollFemaleIndex(false);
        setBgColor("");
        setBgLeftColor({});
        setBgRightColor({});
        setHighlightMalePrefIndex(-1);
        setHighlightFemalePrefIndex(-1);
        setEngageIndex(-1);
        setShowAnimationColor(false);
      }, 100);

      // Repopulate the DOM.
      setResetMaleArray(true);
      setResetFemaleArray(true);
      timeoutQueue.add(function () {
        console.log(maleArray, resetMaleArray);
        setResetMaleArray(false);
        setResetFemaleArray(false);
        handleStop(false);
      }, 2000);
    }
  }, [stop]);

  const handleMaleArr = (arr) => {
    let tempArr = addMaleIndices(maleArray, arr);
    setMaleArray(tempArr);
    console.log(tempArr);
  };

  const handleFemaleArr = (arr) => {
    let tempArr = addFemaleIndices(arr, femaleArray);
    setFemaleArray(tempArr);
    console.log(tempArr);
  };

  const handleMalePreferences = (ind, val) => {
    let tempMale = [...maleArray];
    let tempFemale = [...femaleArray];
    let newInd = parseInt(ind);
    femaleArray[newInd].index.forEach((id, i) => {
      tempMale[i].preferences[id] = val;
    });
    // femaleArray[newInd].name = val;
    tempFemale[newInd].name = val;
    setMaleArray(tempMale);
    setFemaleArray(tempFemale);
  };
  const handleFemalePreferences = (ind, val) => {
    let tempFemale = [...femaleArray];
    let tempMale = [...maleArray];
    console.log(ind, val, maleArray, femaleArray);
    let newInd = parseInt(ind);
    maleArray[newInd].index.forEach((id, i) => {
      tempFemale[i].preferences[id] = val;
    });
    // maleArray[newInd].name = val;
    tempMale[newInd].name = val;
    setMaleArray(tempMale);
    setFemaleArray(tempFemale);
  };

  const handleDeleteMaleList = (maleArr, indexArr) => {
    let tempFemale = removeMaleIndex(femaleArray, indexArr);
    let tempArr = addMaleIndices(maleArr, tempFemale);
    setFemaleArray(tempFemale);
    setMaleArray(tempArr);
  };

  const handleDeleteFemaleList = (femaleArr, indexArr) => {
    let tempMale = removeFemaleIndex(maleArray, indexArr);
    let tempArr = addFemaleIndices(tempMale, femaleArr);
    setMaleArray(tempMale);
    setFemaleArray(tempArr);
  };

  const handleAddMaleItem = () => {
    let { newMaleArr, newFemaleArr } = addMaleItem(maleArray, femaleArray);
    setMaleArray(newMaleArr);
    setFemaleArray(newFemaleArr);
  };

  const handleAddFemaleItem = () => {
    let { newMaleArr, newFemaleArr } = addFemaleItem(maleArray, femaleArray);
    setMaleArray(newMaleArr);
    setFemaleArray(newFemaleArr);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <MaleList
        male={maleArray}
        handleFemalePreferences={handleFemalePreferences}
        handleFemaleArr={handleFemaleArr}
        handleDeleteMaleList={handleDeleteMaleList}
        handleAddMaleItem={handleAddMaleItem}
        flagBtn={flagBtn}
        play={play}
        highlightMaleIndex={highlightMaleIndex}
        bgColor={bgLeftColor}
        showAnimationCol={showAnimationCol}
        resetMaleArray={resetMaleArray}
      />
      <AnimationCol
        male={entityMale}
        female={entityFemale}
        showFemaleEntity={showFemaleEntity}
        toggleOpacity={toggleOpacity}
        expandMalePreference={expandMalePreference}
        expandFemalePreference={expandFemalePreference}
        scrollMaleIndex={scrollMaleIndex}
        scrollFemaleIndex={scrollFemaleIndex}
        highlightMalePrefIndex={highlightMalePrefIndex}
        highlightFemalePrefIndex={highlightFemalePrefIndex}
        bgColor={bgColor}
        engageIndex={engageIndex}
        showAnimationColor={showAnimationColor}
        play={play}
      />
      <FemaleList
        female={femaleArray}
        handleMalePreferences={handleMalePreferences}
        handleMaleArr={handleMaleArr}
        handleDeleteFemaleList={handleDeleteFemaleList}
        handleAddFemaleItem={handleAddFemaleItem}
        flagBtn={flagBtn}
        play={play}
        highlightFemaleIndex={highlightFemaleIndex}
        bgColor={bgRightColor}
        showAnimationCol={showAnimationCol}
        resetFemaleArray={resetFemaleArray}
      />
    </div>
  );
};

export default MainList;
