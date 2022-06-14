/**                                        3**:
Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
 */
let age_2 = 18;
let age_3 = 60;

function checkAge(age) {
  let strToNum = Number("" + age);
  if (!isNaN(strToNum)) {
    if (strToNum < age_2 && strToNum > 0) {
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
      return "Вы ввели не число а '' " + age + " ''";
    }
  } else {
    return "Вы ввели не число а '' " + age + " '' ";
  }
}
console.log(checkAge(17));
console.log(checkAge(19));
console.log(checkAge(-17));
console.log(checkAge(""));
console.log(checkAge(false));
console.log(checkAge(true));
console.log(checkAge("я тут ввёл строку случайно))000"));
