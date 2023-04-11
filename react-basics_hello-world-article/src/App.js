import React from "react";
import "./styles.css";

export default function App() {
  // return <div>Replace me with your Component!</div>;
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>HelloWorldArticle!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. kwebxhx
        khbehbex jevjhxbv ebdub kebb.
      </p>
    </article>
  );
}

// Render an HTML `article` tag containing a heading and a paragraph to the browser. To do so, create a component called `HelloWorldArticle`.

// Use the following hints as guideline:

// - In the [App.js](src/App.js), create a new function called `HelloWorldArticle()`.
// - `HelloWorldArticle()` should return an HTML `article` tag as a wrapper which contains;
//   - an `h1` heading
//   - at least one `p` tag
//   - Note: Add whatever tags you like, but the predefined styles are limited ;)
// - In the return statement of your `App` function, replace the `div` with your `HelloWorldArticle` component.
// - Once again, look at the browser and be amazed!
