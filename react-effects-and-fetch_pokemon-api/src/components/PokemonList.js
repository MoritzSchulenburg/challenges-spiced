// import { useState } from "react";
import { useState, useEffect } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(
    () =>
      async function loadPokemon() {
        try {
          const response = await fetch("https://pokeapi.co/api/v2/pokemon");
          const data = await response.json();
          setPokemon(data.results);
        } catch (error) {
          console.log(error);
        }
      }
  );
  // useEffect(() => {
  //   loadPokemon();
  // }, []);

  return (
    <main>
      <button type="button">Load Pokémon</button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}

// Open the file [`src/components/PokemonList.js`](./src/components/PokemonList.js).

// For now the Pokémon are only fetched when we click the button below. Let's change the code so that our app does this automatically when the app renders.

// - Remove the 'Load Pokémon' button.
// - Change the code below so that the `loadPokemon` function is only executed when the app component is rendered initially`

// _Hint:_ Don't forget the dependency array!
