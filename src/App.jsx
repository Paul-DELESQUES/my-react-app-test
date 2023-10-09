import PokemonCard from "./components/PokemonCard.jsx"
import React, { useState } from 'react';
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew", 
  },
]
function App() {
  const [thePokemon, thePokemon2] = useState(pokemonList[0]);

  function changePokemon() {
    const i = pokemonList.findIndex(e => e.name === thePokemon.name)
    const j = (i + 1) % pokemonList.length;
    
    thePokemon2(pokemonList[j])
  }
  return (
    <div>
      <PokemonCard pokemon={thePokemon} />
      <button onClick={changePokemon}>Switch Pokemon</button>
    </div>
  );
}

export default App;
