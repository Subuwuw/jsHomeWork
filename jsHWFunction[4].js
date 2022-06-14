/**                                            4***:
Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
 */
let age_2 = 18;
let age_3 = 60;
let age = prompt("Введите Ваш возраст");
function checkAge(age) {
  let strToNum = Number(age);
  if (!isNaN(strToNum)) {
    if (strToNum < age_2) {
      return (
        "You don’t have access cause your age is " +
        strToNum +
        " It’s less then"
      );
    } else if (strToNum >= age_2 && age < age_3) {
      return "Welcome, your age is " + age;
    } else if (strToNum > age_3) {
      return "Keep calm and look Culture channel, u are " + strToNum;
    } else {
      return "Technical work";
    }
  } else {
    return "Вы ввели не число а << " + age + " >>";
  }
}
let resCheck = String(checkAge(age));
document.getElementById("result").innerHTML = resCheck;
console.log(resCheck);
