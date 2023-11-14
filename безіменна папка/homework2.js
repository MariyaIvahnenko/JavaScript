var prompt = require('prompt');
  prompt.start();
  prompt.get(['Ваш вік'], function (err, result) {
 // });
var age = Number(result['Ваш вік']);
if (age == 1){
    console.log(age + " Рік")
} 
else if (age >= 2 && age <= 4){
    console.log(age + " Роки")
} 
else {
    console.log(age + " Років")
}
if (age <= 0) {
    console.log("Введено некоректне значення року.");
}
});
