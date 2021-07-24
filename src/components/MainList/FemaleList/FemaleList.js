import React, { useState, useRef, useEffect } from "react";
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
  StyledMdAddCircle,
} from "../MainListElements";
import Collapse from "@material-ui/core/Collapse";

// let femaleConfig = defaultArrangement.female.map((elem) => {
//   return elem.name;
// });
// let obj = defaultArrangement.female.map((elem) => {
//   return { name: elem.name, preferences: elem.preferences, toggle: false };
// });

const FemaleList = ({
  female,
  handleMalePreferences,
  handleMaleArr,
  handleDeleteFemaleList,
  handleAddFemaleItem,
  flagBtn,
  play,
  highlightFemaleIndex,
  bgColor,
  showAnimationCol,
  resetFemaleArray,
}) => {
  let obj = female.map((elem) => {
    return { ...elem, toggle: false, color: "" };
  });
  console.log(obj);

  const [femaleArr, setFemaleArr] = useState(obj);
  const [dragging, setDragging] = useState(false);
  const dragItem = useRef();
  const dragItemNode = useRef();
  // const myRef = useRef(new Array());

  useEffect(() => {
    if (highlightFemaleIndex !== -1) {
      // window.scrollTo(0, myRef.current[highlightFemaleIndex].offsetTop);
      let femaleEntity = document.getElementsByClassName(
        `female-${highlightFemaleIndex}`
      );
      console.log(femaleEntity[0]);
      femaleEntity[0].scrollIntoView({ behavior: "smooth", block: "center" });
    }
    if (Object.keys(bgColor).length !== 0) {
      let ar = [...femaleArr];
      ar[bgColor.index].color = bgColor.color;
      setFemaleArr(ar);
    }
  }, [highlightFemaleIndex, bgColor]);

  // It's not updating to obj while re-rendering wrt parent component, So I returned a new array from handleDeleteFemaleList fn!!
  // Now, Fixed !!
  useEffect(() => {
    if (flagBtn) {
      femaleArr.forEach((item, ind) => {
        obj[ind].toggle = item.toggle;
      });
    }
    setFemaleArr(obj);
  }, [female]);

  useEffect(() => {
    if (resetFemaleArray) {
      let ar = JSON.parse(JSON.stringify(femaleArr));
      ar.map((elem) => {
        elem.color = "";
        elem.toggle = false;
      });
      setFemaleArr(ar);
    }
  }, [resetFemaleArray]);

  const toggle = (ind) => {
    if (play) return;
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

  const handleDragStart = (e, item) => {
    console.log("Staring Drag...");
    dragItemNode.current = e.target;
    dragItemNode.current.addEventListener("dragend", handleDragEnd);
    dragItem.current = item;
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnter = (e, targetItem) => {
    console.log("Entering a drag target", targetItem);
    // 1st condition: Items should be different
    // (inorder to place the item in original position, 1st condition is removed !)
    // 2nd condition: Group should be same
    if (
      // dragItemNode.current !== e.target &&
      dragItem.current.index === targetItem.index
    ) {
      setFemaleArr((femaleArr) => {
        // let newMaleArr = JSON.parse(JSON.stringify(maleArr));
        // Make a shallow copy of the array
        let newFemaleArr = [...femaleArr];
        newFemaleArr[targetItem.index].preferences.splice(
          targetItem.ind,
          0,
          newFemaleArr[dragItem.current.index].preferences.splice(
            dragItem.current.ind,
            1
          )[0]
        );
        dragItem.current = targetItem;
        // localStorage.setItem('List', JSON.stringify(newList));
        handleMaleArr(newFemaleArr);
        return newFemaleArr;
      });
    }
  };

  const handleDragEnd = (e) => {
    setDragging(false);
    dragItem.current = null;
    dragItemNode.current.removeEventListener("dragend", handleDragEnd);
    dragItemNode.current = null;
  };

  const getStyles = (item) => {
    if (
      dragging &&
      dragItem.current.index === item.index &&
      dragItem.current.ind === item.ind
    ) {
      return true;
    }
    return false;
  };

  const handleDeleteItem = (ind) => {
    // let temp = [...femaleArr];
    if (play) return;
    let tempIndex = femaleArr[ind].index;
    femaleArr.splice(ind, 1);
    console.log(femaleArr, ind, tempIndex);
    handleDeleteFemaleList(femaleArr, tempIndex);
    // setFemaleArr(femaleArr);
  };

  const addFemaleItem = () => {
    if (play) return;
    handleAddFemaleItem();
  };

  const showAnimation = (ind) => {
    if (!play) return;
    showAnimationCol("female", ind);
  };

  return (
    <LeftContainer>
      {femaleArr.map((elem, index) => {
        return (
          <Collapse
            in={elem.toggle}
            collapsedHeight="85px"
            timeout="auto"
            style={{
              overflow: "inherit",
            }}
          >
            <StyledPaper
              elevation={10}
              key={index}
              // ref={(element) => myRef.current.push(element)}
              className={"female-" + index}
              highlight={highlightFemaleIndex === index ? true : false}
              bgColor={elem.color}
              onClick={() => showAnimation(index)}
            >
              <List flag={elem.toggle}>
                {!elem.toggle ? (
                  <StyledFaChevronCircleRight
                    onClick={() => toggle(index)}
                    play={play}
                  />
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
                  disabled={play}
                />
                <StyledRiDeleteBack2Fill
                  onClick={() => handleDeleteItem(index)}
                  play={play}
                />
              </List>
              {elem.toggle &&
                elem.preferences.map((pref, ind) => {
                  return (
                    <PreferenceList
                      ind={ind}
                      len={elem.preferences.length}
                      key={ind}
                      draggable
                      onDragStart={(e) => handleDragStart(e, { index, ind })}
                      onDragEnter={
                        dragging
                          ? (e) => {
                              handleDragEnter(e, { index, ind });
                            }
                          : null
                      }
                      styleFlag={getStyles({ index, ind })}
                    >
                      <StyledMdDragHandle
                        styleFlag={getStyles({ index, ind })}
                      />
                      <ListItem styleFlag={getStyles({ index, ind })}>
                        {pref}
                      </ListItem>
                    </PreferenceList>
                  );
                })}
            </StyledPaper>
          </Collapse>
        );
      })}
      <StyledMdAddCircle onClick={addFemaleItem} play={play} />
    </LeftContainer>
  );
};

export default FemaleList;
