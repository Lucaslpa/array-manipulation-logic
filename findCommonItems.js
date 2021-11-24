const findCommonItems = (firstArray, secondArray) => {
  const CommonItems = [];

  for (item of firstArray) {
    const findItemInSecondArray = secondArray.includes(item);

    if (findItemInSecondArray) {
      CommonItems.push(item);
    }
  }

  return CommonItems;
};

console.log(findCommonItems([6, 8, 3, 5, 1], [8, 9, 4, 5]));
