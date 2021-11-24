const createObject = (arr) => {
  var obj = {};

  for (array of arr) {
    const key = array[0];
    const value = array[1];

    obj[key] = value;
  }

  return obj;
};

console.log(
  createObject([
    ["c", 2],
    ["d", 4],
  ])
);
