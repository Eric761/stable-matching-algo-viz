import React, { useState } from "react";
import MaleList from "./MaleList/MaleList";
import FemaleList from "./FemaleList/FemaleList";
import { defaultArrangement } from "../helper/arrangement";
import {
  addMaleIndices,
  addFemaleIndices,
  removeMaleIndex,
  removeFemaleIndex,
} from "../helper/helperFns";

let newMaleArray = addMaleIndices(
  defaultArrangement.male,
  defaultArrangement.female
);

let newFemaleArray = addFemaleIndices(
  defaultArrangement.male,
  defaultArrangement.female
);

const MainList = () => {
  const [maleArray, setMaleArray] = useState(newMaleArray);
  const [femaleArray, setFemaleArray] = useState(newFemaleArray);

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
    console.log(tempArr);
    return tempArr;
  };

  const handleDeleteFemaleList = (femaleArr, indexArr) => {
    let tempMale = removeFemaleIndex(maleArray, indexArr);
    let tempArr = addFemaleIndices(tempMale, femaleArr);
    setMaleArray(tempMale);
    setFemaleArray(tempArr);
    console.log(tempArr);
    return tempArr;
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <MaleList
        male={maleArray}
        handleFemalePreferences={handleFemalePreferences}
        handleFemaleArr={handleFemaleArr}
        handleDeleteMaleList={handleDeleteMaleList}
      />
      <FemaleList
        female={femaleArray}
        handleMalePreferences={handleMalePreferences}
        handleMaleArr={handleMaleArr}
        handleDeleteFemaleList={handleDeleteFemaleList}
      />
    </div>
  );
};

export default MainList;
