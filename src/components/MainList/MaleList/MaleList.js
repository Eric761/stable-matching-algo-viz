import React, { useState } from "react";
import {
  LeftContainer,
  StyledPaper,
  List,
  PreferenceList,
  ListItem,
  StyledInput,
  StyledFaChevronCircleRight,
  StyledFaChevronCircleDown,
  StyledRiDeleteBack2Fill,
  StyledMdDragHandle,
} from "../MainListElements";
import { defaultArrangement } from "../../helper/arrangement";

// let maleConfig = defaultArrangement.male.map((elem) => {
//   return elem.name;
// });
let obj = defaultArrangement.male.map((elem) => {
  return { name: elem.name, preferences: elem.preferences, toggle: false };
});

const MaleList = () => {
  console.log(obj);
  // const [maleArr, setMaleArr] = useState(maleConfig);
  const [maleArr, setMaleArr] = useState(obj);

  const toggle = (ind) => {
    console.log(ind);
    let ar = [...maleArr];
    let temp = ar[ind].toggle;
    ar[ind].toggle = !temp;
    setMaleArr(ar);
  };
  console.log(maleArr);

  const handleNameChange = (event) => {
    console.log(event.target);
    // Wrong Approach: Everytime new element gets created
    // setMaleArr([...maleArr, ([event.target.name] = event.target.value)]);
    // Right Approach
    let ind = event.target.id;
    // Make a shallow copy of the array
    let ar = [...maleArr];
    ar[ind].name = event.target.value;
    setMaleArr(ar);
  };

  return (
    <LeftContainer>
      {maleArr.map((elem, index) => {
        return (
          <StyledPaper elevation={10} key={index}>
            <List flag={elem.toggle}>
              {!elem.toggle ? (
                <StyledFaChevronCircleRight onClick={() => toggle(index)} />
              ) : (
                <StyledFaChevronCircleDown onClick={() => toggle(index)} />
              )}
              <StyledInput
                autoComplete="off"
                placeholder="Enter name"
                spellCheck="false"
                value={elem.name}
                onChange={handleNameChange}
                id={index}
              />
              <StyledRiDeleteBack2Fill />
            </List>
            {elem.toggle &&
              elem.preferences.map((pref, ind) => {
                return (
                  <PreferenceList ind={ind} len={elem.preferences.length}>
                    <StyledMdDragHandle />
                    <ListItem>{pref}</ListItem>
                  </PreferenceList>
                );
              })}
          </StyledPaper>
        );
      })}
    </LeftContainer>
  );
};

export default MaleList;
