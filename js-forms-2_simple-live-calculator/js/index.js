console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

firstInput.addEventListener("input", (event) => {
  const firstValue = firstInput.value;
  const secondValue = secondInput.value;
  const finalResult = firstValue * secondValue;
  result.textContent = finalResult;
});

secondInput.addEventListener("input", (event) => {
  //   console.log(event.target.value);

  const firstValue = firstInput.value;
  const secondValue = secondInput.value;
  const finalResult = firstValue * secondValue;
  result.textContent = finalResult;
});
