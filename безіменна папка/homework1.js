var result = 'number' + 3 + 3;// number33
console.log(result);

var result = null + 3;// 3
console.log(result);

var result = 5 && "qwerty";// qwerty
console.log(result);

var result = +'40' + +'2' + "hillel";// 42hillel
console.log(result);

var result = '10' - 5 === 6;// false
console.log(result);

var result = true + false;// 1
console.log(result);

var result = '4px' - 3;// NaN
console.log(result);

var result = '4' - 3;// 1
console.log(result);

var result = '6' + 3 ** 0;// 61 
console.log(result);

var result = 12 / '6';// 2
console.log(result);

var result = '10' + (5 === 6);// 10false
console.log(result);

var result = null == '';// false
console.log(result);

var result = 3 ** (9 / 3);// 27
console.log(result);

var result = !!'false' == !!'true';// true
console.log(result);

var result = 0 || '0' && 1;// 1 
console.log(result);

var result = (+null == false) < 1;// false
console.log(result);

var result = false && true || true;// true
console.log(result);

var result = false && (false || true);// false
console.log(result);

var result = (+null == false) < 1 ** 5;// false
console.log(result);