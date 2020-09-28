# goit-js-hw-02



задание 1
const getItemsString = function (array) {
  let result = "";

  for (let i = 0; i < array.length; i += 1) {
    console.log(array);
    result += `${[i + 1]} - ${array[i]}\n`;
  }
  return result;
};

console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));

//  1 - Mango
//  2 - Poly
//  3 - Ajax
//  4 - Lux
// 5 - Jay
//  6 - Kong

console.log(getItemsString([5, 10, 15]));

// 1 - 5
//  2 - 10
//  3 - 15





задание 2
const calculateEngravingPrice = (message = "", pricePerWord = 0) =>
  message.split(" ").length * pricePerWord; // Write code in this line

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); // 80

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); // 160

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
); // 240

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
); // 120

console.log(calculateEngravingPrice("Uno", 100)); // 100



задание 3
function findLongestWord(string = "") {
  // Write code under this line
  let words = "";
  let longestWord = "";
  words = string.split(" ");

  longestWord = words[0];

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
// 'force'




задание 4
function formatString(string, maxLength = 40) {
  // Write code under this line
  let formattedString = " ";

  if (string.length > maxLength) {
    formattedString = string.slice(0, maxLength) + "...";
  } else {
    formattedString = string;
  }
  return formattedString;
}

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
);
// 'Vestibulum facilisis, purus ne...'




задание 5
// вариант 1
function checkForSpam(str) {
  "use strict";
  // Write code under this line

  let message = " ";
  const blackListWord1 = "spam";
  const blackListWord2 = "sale";
  message = str.toLowerCase();
  if (message.includes(blackListWord1) || message.includes(blackListWord2)) {
    return true;
  }

  return false;
}

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// вариант 2
// function checkForSpam(str) {
//   "use strict";
//   // Write code under this line

//   let message = " ";
//   message =
//     str.toLowerCase().includes("spam") || str.toLowerCase().includes("sale")
//       ? true
//       : false;

//   return message;
// }

// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true



задание 6
function mapArray(array) {
  "use strict";
  const numbers = new Array(array.length);
  for (let i = 0; i < array.length; i += 1) {
    // Write code under this line
    numbers[i] = array[i] * 10;
  }
  return numbers;
}
console.log(mapArray([-2, 0, 2]));
// [-20, 0, 20]

console.log(mapArray([-2.5, 0, 2.5]));
// [-25, 0, 25]



задание 7
function filterArray(array) {
  "use strict";
  const numbers = [];
  let x = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (Number.isFinite(array[i])) {
      x = array[i];
      numbers.push(x);
    }
  }
  return numbers;
}
console.log(filterArray([-2, 0, 2]));
// [-2, 0, 2]

console.log(filterArray([1, NaN, Infinity]));
// [1]

console.log(filterArray([0, -0, 100, "100"]));
// [0, 0, 100]

console.log(filterArray([undefined, false, null, [], 1]));
// [1]

console.log(filterArray([{}, () => {}, 2]));
// [2]



задание 8
function reduceArray(array) {
  "use strict";
  let total = 0;
  // Write code under this line
  for (let i = 0; i < array.length; i += 1) {
    if (array.length > 0) {
      total += array[i];
    } else {
      return 0;
    }
  }
  return total;
}

console.log(reduceArray([1, 2, 3]));
// 6

console.log(reduceArray([-2, 0, 2]));
// 0

console.log(reduceArray([1, 2, 2.5]));
// 5.5




задание 9
function isLoginValid(login, min = 4, max = 16) {
  if (login.length >= min && login.length <= max) {
    return true;
  } else {
    return false;
  }
}

function isLoginUnique(allLogins, login) {
  "use strict";
  return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
  "use strict";
  const SUCCESS = "Логин успешно добавлен!";
  const REFUSAL = "Такой логин уже используется!";
  const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
  let message;

  if (isLoginValid(login)) {
    if (isLoginUnique(allLogins, login)) {
      allLogins.push(login);
      return (message = SUCCESS);
    } else {
      return (message = REFUSAL);
    }
  } else {
    return (message = ERROR);
  }
}

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

console.log(addLogin(logins, "Ajax"));
("Логин успешно добавлен!");

console.log(addLogin(logins, "robotGoogles"));
// 'Такой логин уже используется!'

console.log(addLogin(logins, "Zod"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, "jqueryisextremelyfast"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(logins);

