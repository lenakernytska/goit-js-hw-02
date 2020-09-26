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
