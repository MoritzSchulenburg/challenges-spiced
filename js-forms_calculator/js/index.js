console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const numA = parseInt(form.numberA.bvalue);
  const numB = parseInt(form.numberB.bvalue);
  console.log(numA, numB);

  let result;

  if (data.operator === "addition") {
    result = add(numberA, numberB);
  } else if (data.operator === "subtraction") {
    result = subtract(numberA, numberB);
  } else if (data.operator === "multiplication") {
    result = multiply(numberA, numberB);
  } else if (data.operator === "division" && numberB !== 0) {
    result = divide(numberA, numberB);
  } else if (data.operator === "division" && numberB === 0) {
    result = "no";
    close();
  }

  // --v-- write your code here --v--

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
