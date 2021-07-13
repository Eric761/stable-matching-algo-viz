// Storing indices of male & female occuring in opposite gender preferences array
import {
  maleNames,
  femaleNames,
  minimumEntityCount,
  maximumEntityCount,
} from "./arrangement.js";

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

const shuffleArray = (preferenceArr) => {
  let currentIndex = preferenceArr.length;
  let temporaryValue;
  let randomIndex;
  let mapIndex = {};

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = preferenceArr[currentIndex];
    preferenceArr[currentIndex] = preferenceArr[randomIndex];
    preferenceArr[randomIndex] = temporaryValue;
    mapIndex[preferenceArr[currentIndex]] = currentIndex;
  }
  return { preferenceArr, mapIndex };
};

const randomArraySized = (array, size) => {
  // Deep Clone: Used to prevent mutating the original array.
  let shuffledArray = shuffleArray(
    JSON.parse(JSON.stringify(array))
  ).preferenceArr;
  return shuffledArray.slice(0, size);
};

const addMaleItem = (maleArr, femaleArr) => {
  let nameMaleArr = [];
  let nameFemaleArr = [];
  maleArr.forEach((item) => {
    nameMaleArr.push(item.name);
  });
  femaleArr.forEach((item) => {
    nameFemaleArr.push(item.name);
  });
  let randomName = "";
  do {
    randomName = maleNames[Math.floor(Math.random() * maleNames.length)];
  } while (nameMaleArr.indexOf(randomName) != -1);
  let { preferenceArr, mapIndex } = shuffleArray(nameFemaleArr);
  console.log(preferenceArr, mapIndex);
  let indexArr = femaleArr.map((val) => {
    return maleArr.length;
  });
  let newMaleArr = [
    ...maleArr,
    {
      name: randomName,
      preferences: preferenceArr,
      index: indexArr,
    },
  ];
  let newFemaleArr = femaleArr.map((item) => {
    let tempPreference = [...item.preferences];
    tempPreference.push(randomName);
    let tempIndex = [...item.index];
    tempIndex.push(mapIndex[item.name]);
    return {
      name: item.name,
      preferences: tempPreference,
      index: tempIndex,
    };
  });
  console.log(newMaleArr, newFemaleArr);
  return { newMaleArr, newFemaleArr };
};

const addFemaleItem = (maleArr, femaleArr) => {
  let nameMaleArr = [];
  let nameFemaleArr = [];
  maleArr.forEach((item) => {
    nameMaleArr.push(item.name);
  });
  femaleArr.forEach((item) => {
    nameFemaleArr.push(item.name);
  });
  let randomName = "";
  do {
    randomName = femaleNames[Math.floor(Math.random() * femaleNames.length)];
  } while (nameFemaleArr.indexOf(randomName) != -1);
  let { preferenceArr, mapIndex } = shuffleArray(nameMaleArr);
  let indexArr = maleArr.map((val) => {
    return femaleArr.length;
  });
  let newFemaleArr = [
    ...femaleArr,
    {
      name: randomName,
      preferences: preferenceArr,
      index: indexArr,
    },
  ];
  let newMaleArr = maleArr.map((item) => {
    let tempPreference = item.preferences;
    tempPreference.push(randomName);
    let tempIndex = item.index;
    tempIndex.push(mapIndex[item.name]);
    return {
      name: item.name,
      preferences: tempPreference,
      index: tempIndex,
    };
  });
  return { newMaleArr, newFemaleArr };
};

const randomConfigClick = () => {
  let range = maximumEntityCount - minimumEntityCount;
  let randomMaleCount =
    Math.floor(Math.random() * (range + 1)) + minimumEntityCount;
  let randomFemaleCount =
    Math.floor(Math.random() * (range + 1)) + minimumEntityCount;
  // Get the names for each group.
  let randomMaleNames = randomArraySized(maleNames, randomMaleCount);
  let randomFemaleNames = randomArraySized(femaleNames, randomFemaleCount);
  let randomMaleArr = randomMaleNames.map((item) => {
    let tempArr = shuffleArray(
      JSON.parse(JSON.stringify(randomFemaleNames))
    ).preferenceArr;
    return {
      name: item,
      preferences: tempArr,
    };
  });
  let randomFemaleArr = randomFemaleNames.map((item) => {
    let tempArr = shuffleArray(
      JSON.parse(JSON.stringify(randomMaleNames))
    ).preferenceArr;
    return {
      name: item,
      preferences: tempArr,
    };
  });
  let randomFinalMaleArr = addMaleIndices(randomMaleArr, randomFemaleArr);
  let randomFinalFemaleArr = addFemaleIndices(randomMaleArr, randomFemaleArr);
  console.log(randomFinalMaleArr, randomFinalFemaleArr);
  return {
    randomFinalMaleArr,
    randomFinalFemaleArr,
  };
};

export {
  addMaleIndices,
  addFemaleIndices,
  removeFemaleIndex,
  removeMaleIndex,
  addMaleItem,
  addFemaleItem,
  randomConfigClick,
};
