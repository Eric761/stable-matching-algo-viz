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

const MaleList = ({
  male,
  handleFemalePreferences,
  handleFemaleArr,
  handleDeleteMaleList,
  handleAddMaleItem,
  flagBtn,
}) => {
  let obj = male.map((elem) => {
    return { ...elem, toggle: false };
  });
  console.log(obj);

  const [maleArr, setMaleArr] = useState(obj);
  const [dragging, setDragging] = useState(false);
  const dragItem = useRef();
  const dragItemNode = useRef();

  // It's not updating to obj while re-rendering wrt parent component, So I returned a new array from handleDeleteMaleList fn !!
  // Now, Fixed !!
  useEffect(() => {
    if (flagBtn) {
      maleArr.forEach((item, ind) => {
        obj[ind].toggle = item.toggle;
      });
    }
    setMaleArr(obj);
  }, [male]);

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
        // A shallow copy means the first level is copied, deeper levels are referenced.
        // For deep copy: JSON.parse(JSON.stringify(maleArr))
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

  //  let temp = [...maleArr];
  //  let tempIndex = maleArr[ind].index;
  //  maleArr.splice(ind, 1);
  //  console.log(maleArr, ind, tempIndex);
  //  let newMaleArr = handleDeleteMaleList(maleArr, tempIndex);
  //  setMaleArr(newMaleArr);

  const handleDeleteItem = (ind) => {
    // let temp = [...maleArr];
    let tempIndex = maleArr[ind].index;
    maleArr.splice(ind, 1);
    console.log(maleArr, ind, tempIndex);
    handleDeleteMaleList(maleArr, tempIndex);
    // setMaleArr(temp);
  };

  const addMaleItem = () => {
    handleAddMaleItem();
  };

  return (
    <LeftContainer>
      {maleArr.map((elem, index) => {
        return (
          <Collapse
            in={elem.toggle}
            collapsedHeight="85px"
            timeout="auto"
            style={{
              overflow: "inherit",
            }}
          >
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
      <StyledMdAddCircle onClick={addMaleItem} />
    </LeftContainer>
  );
};

export default MaleList;
