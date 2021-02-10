const calculator = require("../scripts/calculator");

const { add, subtract, multiply, divide } = calculator;

test("Add two numbers", () => {
  expect(add(3, 2)).toBe(5);
});

test("Subtract two numbers", () => {
  expect(subtract(3, 2)).toBe(1);
});

test("Multiply two numbers", () => {
  expect(multiply(3, 2)).toBe(6);
});

test("Divide two numbers", () => {
  expect(divide(6, 0)).toBeNull();
});
test("Divide two numbers", () => {
  expect(divide(6, 2)).toBe(3);
});
