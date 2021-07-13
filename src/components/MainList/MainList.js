import React, { useState, useEffect } from "react";
import MaleList from "./MaleList/MaleList";
import FemaleList from "./FemaleList/FemaleList";
import { defaultArrangement } from "../helper/arrangement";
import {
  addMaleIndices,
  addFemaleIndices,
  removeMaleIndex,
  removeFemaleIndex,
  addMaleItem,
  addFemaleItem,
  randomConfigClick,
} from "../helper/helperFns";

let newMaleArray = addMaleIndices(
  defaultArrangement.male,
  defaultArrangement.female
);

let newFemaleArray = addFemaleIndices(
  defaultArrangement.male,
  defaultArrangement.female
);

const MainList = ({ shuffle, reset, handleRandomConfig, handleReset }) => {
  const [maleArray, setMaleArray] = useState(
    JSON.parse(JSON.stringify(newMaleArray))
  );
  const [femaleArray, setFemaleArray] = useState(
    JSON.parse(JSON.stringify(newFemaleArray))
  );
  const [flagBtn, setFlagBtn] = useState(true);

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
      />
      <FemaleList
        female={femaleArray}
        handleMalePreferences={handleMalePreferences}
        handleMaleArr={handleMaleArr}
        handleDeleteFemaleList={handleDeleteFemaleList}
        handleAddFemaleItem={handleAddFemaleItem}
        flagBtn={flagBtn}
      />
    </div>
  );
};

export default MainList;
