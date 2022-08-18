const add = (...param) => {
  let sum = 0;
  param.forEach((item) => {
    sum += item;
  });
  return sum;
};

const subtract = (a, b) => a - b;

const multiply = (...param) => {
  const result = param.reduce((a, b) => a * b);
  return result;
};

const divide = (a, b) => a / b;

module.exports = {
  add, subtract, multiply, divide,
};
