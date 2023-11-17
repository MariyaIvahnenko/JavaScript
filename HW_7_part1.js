/*function customIsNan(value) {
    return value !== value;
}
console.log(customIsNan(123));
console.log(customIsNan("ABC"));
console.log(customIsNan(true));
console.log(customIsNan(NaN));*/

function customIsNan(value) {
    return typeof value === "number";
}

console.log(customIsNan(123));
console.log(customIsNan("ABC"));
console.log(customIsNan(Infinity));
console.log(customIsNan(NaN));