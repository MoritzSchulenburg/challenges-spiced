import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState();
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=0");

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [url]);

  const previousPage = () => {
    setUrl(pokemon.previous);
  };

  const nextPage = () => {
    setUrl(pokemon.next);
  };

  return (
    <main>
      {pokemon?.previous && (
        <button onClick={previousPage} type="button">
          Previous Page
        </button>
      )}
      <button onClick={nextPage} type="button">
        Next Page
      </button>
      <ul>
        {pokemon &&
          pokemon.results &&
          pokemon.results.map(({ name }) => <li key={name}>{name}</li>)}
      </ul>
    </main>
  );
}

// There is a button to show the next page, but it has no functionality yet. Try to find a way to load the next page.

// > _Hint 1:_ You need a way to store which page you are displaying right now and be able to update this value to the next page.

// > _Hint 2:_ Have a look at the URL parameter `?offset=` used for `fetch`. The API starts by giving you the first `20` Pokémon. In the end the URL needs to change. You can either keep track of the offset yourself, or use the value given and `next` in the API response.
