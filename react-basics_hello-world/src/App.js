import React from "react";
import "./styles.css";

function HelloWorld() {
  return <h1>Hello world!</h1>;
}

export default function App() {
  return <HelloWorld />;
}

// ### Render by Modifying the `App` component

// Render a heading with the text "Hello world!" to the browser. To do so, change the `div` into an `h1` and change its text accordingly.

// Look in the browser and be proud: you have successfully entered the React World!

// ### Create Your First Custom Component

// Let's go a step further and outsource the heading to its own component.

// To do so, create a component (i.e. function) called `HelloWorld`.

// Use the following hints as guideline:

// - In the [App.js](src/App.js), create a new function called `HelloWorld()` (it does not matter whether you write it above or below the `App` function - but not inside it!).
// - `HelloWorld()` should return the same HTML heading as in the first task above.
// - In the return statement of the `App` function, replace the `h1` with your `HelloWorld` component.
// - Look at the browser and be amazed: nothing has changed, but you've built and used your first React component!
