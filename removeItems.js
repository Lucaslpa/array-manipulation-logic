const removeItems = (arr, ...itemsToRemove) => {
  var newArray = arr;

  for (i in itemsToRemove) {
    const itemToRemove = itemsToRemove[i];
    var toFilterArray = [];

    for (i in newArray) {
      const item = newArray[i];

      if (item !== itemToRemove) {
        toFilterArray = [...toFilterArray, item];
      }
    }

    newArray = toFilterArray;
  }

  return newArray;
};

console.log(removeItems([5, 4, 3, 2, 5, 8, 9, 10, 7, 7], 5, 3, 10, 7));
