const cleanArray = (arr) => {
  var newArray = [];

  for (content of arr) {
    const isValidContent = !!content;

    if (isValidContent) {
      newArray = [...newArray, content];
    }
  }

  return newArray;
};

console.log(cleanArray([1, "", 2, "peixe", undefined, null, 0, false]));
