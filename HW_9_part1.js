function myBlend(arr) {
  const mixedArray = arr.slice();

  for (let i = mixedArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [mixedArray[i], mixedArray[j]] = [mixedArray[j], mixedArray[i]];
  }

  return mixedArray;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const blendedArray = myBlend(arr);
console.log(blendedArray);
