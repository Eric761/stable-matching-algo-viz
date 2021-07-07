import React, { useState } from "react";
import {
  LeftContainer,
  StyledPaper,
  StyledInput,
  StyledFaChevronCircleRight,
  StyledFaChevronCircleDown,
  StyledRiDeleteBack2Fill,
} from "../MainListElements";
import { defaultArrangement } from "../../helper/arrangement";

let maleConfig = defaultArrangement.male.map((elem) => {
  return elem.name;
});

const MaleList = () => {
  // let maleConfig = defaultArrangement.male.map((elem) => {
  //   return elem.name;
  // });

  const [right, setRight] = useState(true);
  const [maleArr, setMaleArr] = useState(maleConfig);
  const toggle = () => {
    setRight(!right);
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
    ar[ind] = event.target.value;
    setMaleArr(ar);
  };

  return (
    <LeftContainer>
      {maleArr.map((elem, index) => {
        return (
          <StyledPaper elevation={10} key={index}>
            {right ? (
              <StyledFaChevronCircleRight onClick={toggle} />
            ) : (
              <StyledFaChevronCircleDown onClick={toggle} />
            )}
            <StyledInput
              placeholder="Enter name"
              spellCheck="false"
              value={elem}
              onChange={handleNameChange}
              id={index}
            />
            <StyledRiDeleteBack2Fill />
          </StyledPaper>
        );
      })}
    </LeftContainer>
  );
};

export default MaleList;
