console.clear();

function handleUserLogin(onSuccess) {
  // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞
  onSuccess();
}

/* PART 1 */
function showWelcomeMessage() {
  console.log("Welcome! You are logged in now.");
}

handleUserLogin(showWelcomeMessage);

/* PART 2 */

handleUserLogin(() => {
  showWelcomeMessage();
});

// Part 3
handleUserLogin(() => {
  console.log("Welcome! You are logged in now.");
});
