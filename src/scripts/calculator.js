const calculator = {
  add: (a, b) => {
    return a + b;
  },

  divide: (a, b) => {
    if (b !== 0) {
      return a / b;
    } else {
      console.log("Can't divide by 0");
      return null;
    }
  },

  multiply: (a, b) => {
    return a * b;
  },

  subtract: (a, b) => {
    return a - b;
  },
};

module.exports = calculator;
