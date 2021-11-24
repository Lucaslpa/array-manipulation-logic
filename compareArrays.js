const compareArrays = (firstArray, secondArray) => {
  var arrayIsEqual = true;

  const lengthIsNotEqual = firstArray.length !== secondArray.length;

  if (lengthIsNotEqual) {
    arrayIsEqual = false;
    return arrayIsEqual;
  }

  for (i in firstArray) {
    const itemFirstArray = firstArray[i];
    const itemSecondArray = secondArray[i];

    if (itemFirstArray !== itemSecondArray) {
      arrayIsEqual = false;
    }
  }

  return arrayIsEqual;
};

console.log(compareArrays([1, 2, 3, 4], [1, 2, 3, 4]));
