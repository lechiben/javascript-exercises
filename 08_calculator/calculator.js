const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	return array.reduce((total, num) => total + num, 0);
};

const multiply = function(array) {
  return array.reduce((product,current) => product * current);
};

const power = function(base, exponent) {
  let result = 1;
  for (let i = 1; i <= exponent; i++){
    result *= base;
  }
  return result;
};

const factorial = function(number) {
  if (number == 0) return 1;
  let result = 1;
  for (let i = 1; i <= number; i++){
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
