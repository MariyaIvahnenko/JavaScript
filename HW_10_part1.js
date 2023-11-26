const regex = /^(?!.*[Aa]).{6,}$/;

const testString1 = "Abca123";
const testString2 = "BbaA1561";

console.log(regex.test(testString1));
console.log(regex.test(testString2));
