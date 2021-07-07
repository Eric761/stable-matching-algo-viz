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

let femaleConfig = defaultArrangement.female.map((elem) => {
  return elem.name;
});

const FemaleList = () => {
  const [right, setRight] = useState(true);
  const [femaleArr, setFemaleArr] = useState(femaleConfig);
  const toggle = () => {
    setRight(!right);
  };
  console.log(femaleArr);

  const handleNameChange = (event) => {
    console.log(event.target);
    let ind = event.target.id;
    // Make a shallow copy of the array
    let ar = [...femaleArr];
    ar[ind] = event.target.value;
    setFemaleArr(ar);
  };

  return (
    <LeftContainer>
      {femaleArr.map((elem, index) => {
        return (
          <StyledPaper elevation={10} key={index}>
            {right ? (
              <StyledFaChevronCircleRight onClick={toggle} />
            ) : (
              <StyledFaChevronCircleDown onClick={toggle} />
            )}
            <StyledInput
              autoComplete="off"
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

export default FemaleList;
