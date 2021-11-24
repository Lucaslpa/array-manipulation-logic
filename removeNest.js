const removeNest = (arr) => {
  var newArray = [];
  for (index in arr) {
    const itemArr = arr[index];
    const itemArrIsArray = itemArr.length > 0;

    if (itemArrIsArray) {
      itemArr.forEach((item) => newArray.push(item));
    } else {
      newArray.push(itemArr);
    }
  }

  return newArray;
};

console.log(removeNest([1, 2, [3, 6, 7, 8], [4, 5]]));
