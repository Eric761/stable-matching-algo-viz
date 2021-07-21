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
  SMPVizActive,
  SMPVizDone,
  handleRandomConfig,
  handleReset,
  handleSaveFile,
  handleInputFile,
  handlePlay,
}) => {
  const [maleArray, setMaleArray] = useState(
    JSON.parse(JSON.stringify(newMaleArray))
  );
  const [femaleArray, setFemaleArray] = useState(
    JSON.parse(JSON.stringify(newFemaleArray))
  );
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
  const [bgLeftColor, setBgLeftColor] = useState("");
  const [bgRightColor, setBgRightColor] = useState("");

  const animationStep = () => {
    let { process, content } = stableMarriageProcessQueue.shift();
    let { male, female, dumped } = content;
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
      let curMaleIndex = stableMarriageNameIndex[male.name];
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
      let curFemaleIndex = stableMarriageNameIndex[female.name];
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
        setBgLeftColor("orange !important");
        setBgRightColor("orange !important");
        // notifier.queueMessage(
        //   "warning",
        //   `${male.name} is engaged with ${female.name}.`,
        //   1000
        // );
      }, 500);
    }

    // Break Process
    else if (process === "break") {
      // groundFemaleDOM.classList.add("engage");

      let oldPartnerIndex = female.preferencesName.indexOf(dumped.name);
      // groundFemaleDOM
      //   .querySelector(".preference")
      //   .children[oldPartnerIndex].classList.add("partner-highlight");

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
        setHighlightMalePrefIndex(maleIndex);
        // notifier.queueMessage('warning', `${female.name} breaks up with current partner ${dumped.name} and engages with ${male.name}.`, 2000);
      }, 500);

      animationQueue.add(function () {
        setExpandMalePreference(false);
      }, 250);
      animationQueue.add(function () {
        setExpandFemalePreference(false);
      }, 250);

      // animationQueue.add(function () {
      //   groundMaleDOM.classList.remove("reject");
      //   groundMaleDOM.classList.add("engage");

      //   male.element.classList.remove("reject");
      //   male.element.classList.add("engage");

      //   dumped.element.classList.remove("engage");
      //   dumped.element.classList.add("reject");
      // }, 500);
    } else if (process === "done") {
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
        setBgLeftColor("");
        setBgRightColor("");
      }, 250);
    }
    // if (stableMarriageProcessQueue.length == 0) {
    //   return;
    // } else {
    //   animationQueue.add(function () {
    //     animationStep();
    //   }, 250);
    // }
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

        // SMPVizActive = true;
        animationStep();
        animationStep();
        animationStep();
        animationStep();
        animationStep();
        animationStep();
        animationStep();
        animationStep();
        animationStep();
        animationStep();
        animationStep();
        animationStep();
      }
      //   else if (stableMarriageVisualizationRunning && animationQueue.disable) {
      //     animationQueue.continue();
      //     notifier.queueMessage('valid', 'Visualization continuing.');
      // // Third conditional is for when the visualization is done, and the user
      // // can only use stop to reset everything.
      // } else {
      //     notifier.queueMessage('warning', 'Use the stop button to reset the visualization.');
      // }
    }
  }, [play]);

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
        highlightMaleIndex={highlightMaleIndex}
        bgColor={bgLeftColor}
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
      />
      <FemaleList
        female={femaleArray}
        handleMalePreferences={handleMalePreferences}
        handleMaleArr={handleMaleArr}
        handleDeleteFemaleList={handleDeleteFemaleList}
        handleAddFemaleItem={handleAddFemaleItem}
        flagBtn={flagBtn}
        highlightFemaleIndex={highlightFemaleIndex}
        bgColor={bgRightColor}
      />
    </div>
  );
};

export default MainList;
