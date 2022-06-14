/**                                             * 2*:
                    Преобразовать задание 1* таким образом, чтобы первым делом
             в функции проверялся тип данных. И если он не Number - кидалась ошибка. 
 */
let age_2 = 18;
let age_3 = 60;

function checkAge(age) {
  let strToNum = Number(age);
  if (typeof strToNum == "number") {
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
    return "Вы ввели не число а << " + strToNum + " >>";
  }
}
console.log(checkAge(17));
console.log(checkAge(18));
console.log(checkAge(61));
console.log(checkAge("3213"));
console.log(checkAge("я тут ввёл строку случайно))000"));
