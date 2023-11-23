var services = {
  "Стрижка": 200,
  "Гоління": 150,
  "Миття голови": 90,
};

// Додаткові послуги
services["Розбити скло"] = 500;
services["Густе волосся"] = 50;
services["Догляд за волоссям"] = 1000;
services["Скрабування шкіри голови"] = 200;

var salon = {
  services: services,

  // Загальна вартість послуг
  price: function () {
    return Object.values(this.services).reduce(
      (total, price) => total + price,
      0
    );
  },

  // Мінімальна вартість
  minPrice: function () {
    return Math.min(...Object.values(this.services));
  },

  // Максимальна вартість
  maxPrice: function () {
    return Math.max(...Object.values(this.services));
  },
};

console.log("Загальна вартість послуг: " + salon.price() + " грн");
console.log("Мінімальна вартість: " + salon.minPrice() + " грн");
console.log("Максимальна вартість: " + salon.maxPrice() + " грн");
