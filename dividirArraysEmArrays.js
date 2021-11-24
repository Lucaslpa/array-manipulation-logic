const DividirArrayEmArrays = (arr, quantity) => {
  var newArray = [];

  for (i in arr) {
    const newArrayIsEmpty = newArray.length === 0;
    if (newArrayIsEmpty) {
      newArray.push(arr.slice(0, quantity));
    } else {
      const initialIndex = i * quantity;
      const endIndex = initialIndex + quantity;
      newArray.push(arr.slice(initialIndex, endIndex));
    }
  }

  return newArray.filter((item) => item.length !== 0);
};

console.log(DividirArrayEmArrays([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));
