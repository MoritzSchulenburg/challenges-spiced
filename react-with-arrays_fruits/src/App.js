import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "Banana",
      color: "yellow",
    },
    {
      id: 1338,
      name: "Apple",
      color: "red",
    },
    {
      id: 1339,
      name: "Strawberry",
      color: "purple",
    },
    {
      id: 1340,
      name: "Grapefruit",
      color: "pink",
    },
    {
      id: 1341,
      name: "Mango",
      color: "yellow",
    },
  ];

  return (
    <div className="app">
      {/* <Card name="🍌 banana" /> */}
      {fruits.map(({ id, name }) => (
        <Card key={id} name={name} />
      ))}
    </div>
  );
}
