console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  const formElements = event.target.elements;
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log("data: ", data);

  const tos = formElements.tos.checked;
  console.log("tos: ", tos);

  // --^-- write your code here --^--

  if (tos === true) {
    return hideTosError();
  } else {
    showTosError();
  }

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});
