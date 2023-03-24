console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  const listElement = document.createElement("li");

  toastContainer.append(listElement);

  listElement.classList.add("toast-container__message");
  listElement.textContent = "Im a new message";
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  const toastContainer = document.querySelector('[data-js="toast-container"]');
  toastContainer.innerHTML = "";
});
