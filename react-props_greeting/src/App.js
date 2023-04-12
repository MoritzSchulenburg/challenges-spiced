import "./styles.css";

// export default function App() {
//   return <h1>Replace me with your component!</h1>;
// }

export default function App() {
  return <Greeting name="Moritz" />;
}

function Greeting({ name }) {
  const isCoach = ["Klaus", "Gimena", "Jan", "Sven"];
  // return <h1>Hello, {isCoach.includes({ name })}!</h1>;
  return <h1>Hello {isCoach.includes(name) ? "Coach" : name}!!</h1>;
}

// Look at the [`src/App.js`](./src/App.js) file: the `App` component returns a default heading element. Replace this element with a custom `Greeting` component, which renders a greeting according to its props.

// You can use the following hints as guideline:

// - Write the `Greeting` component inside of the [`App.js`](src/App.js).
//   - It accepts a prop called `name` (make sure to destructure it).
//   - It returns an HTML element and uses the `name` prop to render "Hello, [name]!";
// - Inside of the return statement of your `App` component, replace the heading with your `Greeting` component and pass it a `name` prop with a value of your choice.
