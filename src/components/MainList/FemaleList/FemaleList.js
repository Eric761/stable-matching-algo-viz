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

// let femaleConfig = defaultArrangement.female.map((elem) => {
//   return elem.name;
// });
// let obj = defaultArrangement.female.map((elem) => {
//   return { name: elem.name, preferences: elem.preferences, toggle: false };
// });

const FemaleList = ({ female, handleMalePreferences }) => {
  let obj = female.map((elem) => {
    return { ...elem, toggle: false };
  });
  console.log(obj);
  const [femaleArr, setFemaleArr] = useState(obj);

  const toggle = (ind) => {
    console.log(ind);
    let ar = [...femaleArr];
    let temp = ar[ind].toggle;
    ar[ind].toggle = !temp;
    setFemaleArr(ar);
  };
  console.log(femaleArr);

  const handleNameChange = (event) => {
    console.log(event.target);
    let ind = event.target.id;
    // Make a shallow copy of the array
    let ar = [...femaleArr];
    ar[ind].name = event.target.value;
    handleMalePreferences(ind, event.target.value);
    setFemaleArr(ar);
  };
  return (
    <LeftContainer>
      {femaleArr.map((elem, index) => {
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

export default FemaleList;
