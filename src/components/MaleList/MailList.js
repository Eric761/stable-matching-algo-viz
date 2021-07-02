import React, { useState } from "react";
import {
  LeftContainer,
  StyledPaper,
  StyledInput,
  StyledFaChevronCircleRight,
  StyledFaChevronCircleDown,
  StyledRiDeleteBack2Fill,
} from "./MailListElements";

const MailList = () => {
  const [right, setRight] = useState(true);
  const toggle = () => {
    setRight(!right);
  };

  return (
    <LeftContainer>
      {[1, 2, 3].map((elem) => {
        return (
          <StyledPaper elevation={10} key={elem}>
            {right ? (
              <StyledFaChevronCircleRight onClick={toggle} />
            ) : (
              <StyledFaChevronCircleDown onClick={toggle} />
            )}
            <StyledInput defaultValue="Hello world" spellCheck="false" />
            <StyledRiDeleteBack2Fill />
          </StyledPaper>
        );
      })}
    </LeftContainer>
  );
};

export default MailList;
