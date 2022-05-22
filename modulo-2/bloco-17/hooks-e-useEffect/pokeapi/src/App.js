import React, { useState, useEffect } from 'react';
import BestPokemon from './components/BestPokemon';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [limit, setLimit] = useState(20);
  const [visible, setVisible] = useState(false)

  const endpoint = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;

  const handleLimit = () => {
    setLimit(limit + 30)
  }

  useEffect(() => {
    const getPokemon = async () => {
      const {results} = await fetch(endpoint).then(response => response.json());
      setPokemonList(results);
    }
    getPokemon();
  }, [endpoint, limit])

  return (
    <>
      <h1>Lista de Pokemon</h1>
      <div>
        <button
          type="button"
          onClick={() => setVisible(!visible)}
        >
          Mostrar melhor pokemon
        </button>
        { visible && <BestPokemon /> }
        <ol>
          {pokemonList.map(({name}) => <li key={name}>{name}</li>)}
          {/* {pokemonList.map(pokemon => <li key={pokemon.name}>{pokemon.name}</li>)} */}
        </ol>
        <button
          type="button"
          onClick={handleLimit}
        >
          Mostrar mais pokemon
        </button>
      </div>
    </>
  );
}

export default App;
