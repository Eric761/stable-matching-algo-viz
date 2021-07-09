import React, { useState, useRef } from "react";
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

const MaleList = ({
  male,
  handleFemalePreferences,
  handleFemaleArr,
  handleDeleteMaleList,
}) => {
  let obj = male.map((elem) => {
    return { ...elem, toggle: false };
  });
  console.log(obj);
  const [maleArr, setMaleArr] = useState(obj);
  const [dragging, setDragging] = useState(false);
  const dragItem = useRef();
  const dragItemNode = useRef();

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
    handleFemalePreferences(ind, event.target.value);
    setMaleArr(ar);
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
      console.log("Swapping..");
      setMaleArr((maleArr) => {
        // let newMaleArr = JSON.parse(JSON.stringify(maleArr));
        // Make a shallow copy of the array
        let newMaleArr = [...maleArr];
        newMaleArr[targetItem.index].preferences.splice(
          targetItem.ind,
          0,
          newMaleArr[dragItem.current.index].preferences.splice(
            dragItem.current.ind,
            1
          )[0]
        );
        dragItem.current = targetItem;
        // localStorage.setItem('List', JSON.stringify(newList));
        // let tempArr = [...maleArr];
        // tempArr.forEach((val) => {
        //   delete val.toggle;
        // });
        console.log(newMaleArr);
        handleFemaleArr(newMaleArr);
        return newMaleArr;
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
    // let temp = [...maleArr];
    let tempIndex = maleArr[ind].index;
    maleArr.splice(ind, 1);
    console.log(maleArr, ind, tempIndex);
    let newMaleArr = handleDeleteMaleList(maleArr, tempIndex);
    setMaleArr(newMaleArr);
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
              <StyledRiDeleteBack2Fill
                onClick={() => handleDeleteItem(index)}
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
                    <StyledMdDragHandle styleFlag={getStyles({ index, ind })} />
                    <ListItem styleFlag={getStyles({ index, ind })}>
                      {pref}
                    </ListItem>
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
