const reverseArray = (arr) => {
  var newArray = [];
  for (index in arr) {
    newArray = [arr[index], ...newArray];
  }

  return newArray;
};

console.log(reverseArray(["pão", "arroz", "feijão"]));
