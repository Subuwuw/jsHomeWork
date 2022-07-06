/*
__________________________________________1*___________________________________________
Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
Вывести в консоль результат работы функции с возрастами 17, 18, 61

*/

let age_2 = 18;
let age_3 = 60;

function checkAge(age) {
  if (age < age_2) {
    return "You don’t have access cause your age is " + age + " It’s less then";
  } else if (age >= age_2 && age < age_3) {
    return "Welcome, your age is " + age;
  } else if (age > age_3) {
    return "Keep calm and look Culture channel, u are " + age;
  } else {
    return "Technical work";
  }
}

console.log(checkAge(17));
console.log(checkAge(18));
console.log(checkAge(61));
