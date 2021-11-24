[1, 2, 3, 3, 2, 4, 5, 4, 7, 3, 3, 3, 3];

const removeDuplicate = (arr) => {
  var newArray = [];

  for (i in arr) {
    const item = arr[i];
    const itemIsNotInNewArray = !newArray.includes(item);
    if (itemIsNotInNewArray) {
      newArray.push(item);
    }
  }

  return newArray;
};

console.log(removeDuplicate([1, 2, 3, 3, 2, 4, 5, 4, 7, 3]));
