//Перший варіант реалізації функції

function customIsNan(value) {
  return value !== value;
}
console.log(customIsNan(123));
console.log(customIsNan("ABC"));
console.log(customIsNan(true));
console.log(customIsNan(NaN));

//Другий варіант реалізації функції
/*function customIsNan(value) {
    return typeof value === "number";
}

console.log(customIsNan(123));
console.log(customIsNan("ABC"));
console.log(customIsNan(true));
console.log(customIsNan(NaN));*/


//Виправленний ваіант реалізації функції з перевіркою типу value
function customIsNaN2(value) {
    return typeof value === 'number' && Number(value) !== value;
  }  



console.log(customIsNaN2(123));
console.log(customIsNaN2("ABC"));
console.log(customIsNaN2(Infinity));
console.log(customIsNaN2(NaN));
