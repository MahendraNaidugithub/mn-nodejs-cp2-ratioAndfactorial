const factorialOfNumber = require("../factorial/index.js");
const ratioOfTwoNumbers = require("../ratio/index.js");
const ratioAndFactorial = (num1, num2, num3) => {
  const factorial = factorialOfNumber(num3);
  const ratio = ratioOfTwoNumbers(num1, num2);

  return { factorial, ratio };
};

module.exports = ratioAndFactorial;
console.log(ratioAndFactorial(1, 2, 3));
