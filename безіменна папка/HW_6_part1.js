function drawTriangle(height, symbol) {
  for (let i = 1; i <= height; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row += symbol;
    }

    console.log(row);
  }
}
drawTriangle(5, "*");
// перший варіант виконання, з використанням фцнкції drawTriangel


const height = 5;
const symbol = "*";

for (let i = 1; i <= height; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += symbol;
  }

  console.log(row);
}

// другий спосіб виводу трикутника з зірочками
