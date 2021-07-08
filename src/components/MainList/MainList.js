import React, { useState } from "react";
import MaleList from "./MaleList/MaleList";
import FemaleList from "./FemaleList/FemaleList";
import { defaultArrangement } from "../helper/arrangement";
import addIndices from "../helper/helperFns";

let { newMaleArray, newFemaleArray } = addIndices(
  defaultArrangement.male,
  defaultArrangement.female
);

const MainList = () => {
  const [maleArray, setMaleArray] = useState(newMaleArray);
  const [femaleArray, setFemaleArray] = useState(newFemaleArray);

  const handleMalePreferences = (ind, val) => {
    let temp = [...maleArray];
    let newInd = parseInt(ind);
    femaleArray[newInd].index.forEach((id, i) => {
      temp[i].preferences[id] = val;
    });
    console.log(temp);
    setMaleArray(temp);
  };
  const handleFemalePreferences = (ind, val) => {
    let temp = [...femaleArray];
    console.log(ind, val, maleArray, femaleArray);
    let newInd = parseInt(ind);
    maleArray[newInd].index.forEach((id, i) => {
      temp[i].preferences[id] = val;
    });
    console.log(temp);
    setFemaleArray(temp);
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <MaleList
        male={maleArray}
        handleFemalePreferences={handleFemalePreferences}
      />
      <FemaleList
        female={femaleArray}
        handleMalePreferences={handleMalePreferences}
      />
    </div>
  );
};

export default MainList;
