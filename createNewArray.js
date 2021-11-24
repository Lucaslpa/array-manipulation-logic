const createNewArray = (quantity, content) => {
  var loopTime = quantity;
  var newArray = [];
  while (loopTime > 0) {
    newArray[loopTime - 1] = content;
    loopTime -= 1;
  }
  return newArray;
};

console.log(createNewArray(10, 2));
