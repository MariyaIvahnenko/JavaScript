function pad(str, char, count, isStart) {
  if (
    typeof str !== "string" ||
    typeof char !== "string" ||
    typeof count !== "number" ||
    typeof isStart !== "boolean"
  ) {
    return null;
  }

  const currentLength = str.length;
  const targetLength = Math.max(count, currentLength);

  let paddedStr = str;

  while (paddedStr.length < targetLength) {
    if (isStart) {
      paddedStr = char + paddedStr;
    } else {
      paddedStr += char;
    }
  }

  return paddedStr;
}

console.log(pad("qwerty", "+", 7, true)); // +qwerty
console.log(pad("qwerty", "+", 7, false)); // qwerty+
