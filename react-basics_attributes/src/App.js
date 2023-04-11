import React from "react";
import "./styles.css";

export default function App() {
  // return <div>Replace me with an article</div>;
  return <Component />;
}

function Component() {
  return (
    <article className="article">
      <h2 className="article__title">text of my choice</h2>
      <label htmlFor="react-input"></label>
      <input id="react-input"></input>
      <a
        className="article__link"
        href="https://github.com/spiced-academy/savory-web-dev/blob/main/sessions/react-basics/challenges-react-basics.md"
      >
        This is a link to an article of my choice
      </a>
    </article>
  );
}

// Write an `Article` component and use it to replace the given `<div>`.

// Your component should contain the following parts:

// - an `<article>` as a wrapper HTML element with the class `article`
// - an `<h2>` with the class `article__title` and a text of your choice
// - a `<label>` and `<input>` tag connected with `id` and `htmlFor` (!) attributes
// - an `<a>` tag with the class `article__link` as well as text content and `href` attribute of your choice (What about a Wikipedia article?)

// ## Notes

// - You rendered Article component does not have any styling? Remember that you need to use `className` instead of `class` in JSX.
// - You only have to touch the [App.js](src/App.js) file.
