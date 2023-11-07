var unit = "км";
var value = 1;

switch (unit) {
    case "км":
        console.log(value * 1000 + ' м');// переведення км в м
        break;
    case "год":
        console.log(value * 60 + ' хв');// переведення год в хв
        break;
    case "кг":
        console.log(value * 1000 + ' грм');// переведення кг в грм
        break;
    default:
        console.log('невідома одиниця виміру');//при введенні одиниці виміру, яка не входить в перевірку конструкцію switch, виведеться повідомлення 'невідома одиниця виміру'
}
