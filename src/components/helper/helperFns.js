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

const removeMaleIndex = (female, ind) => {
  female.forEach((elem, i) => {
    elem.preferences.splice(ind[i], 1);
  });
  return female;
};

const removeFemaleIndex = (male, ind) => {
  male.forEach((elem, i) => {
    elem.preferences.splice(ind[i], 1);
  });
  return male;
};

export { addMaleIndices, addFemaleIndices, removeFemaleIndex, removeMaleIndex };
