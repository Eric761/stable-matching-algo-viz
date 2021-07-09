// Storing indices of male & female occuring in opposite gender preferences array

const addMaleIndices = (male, female) => {
  let newMaleArray = [];
  male.forEach((elem) => {
    let { name, preferences } = elem;
    let index = [];
    female.forEach((val) => {
      val.preferences.forEach((oppElem, ind) => {
        if (oppElem === name) {
          index.push(ind);
        }
      });
    });
    let tempObj = {
      name,
      preferences,
      index,
    };
    newMaleArray.push(tempObj);
  });

  return newMaleArray;
};

const addFemaleIndices = (male, female) => {
  let newFemaleArray = [];
  female.forEach((elem) => {
    let { name, preferences } = elem;
    let index = [];
    male.forEach((val) => {
      val.preferences.forEach((oppElem, ind) => {
        if (oppElem === name) {
          index.push(ind);
        }
      });
    });
    let tempObj = {
      name,
      preferences,
      index,
    };
    newFemaleArray.push(tempObj);
  });

  return newFemaleArray;
};

export { addMaleIndices, addFemaleIndices };
