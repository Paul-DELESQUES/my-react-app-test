import PokemonCard from "./components/PokemonCard.jsx"
import React, { useState } from 'react';
import PropTypes from 'prop-types'



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
  const [thePokemon, setThePokemon] = useState(pokemonList[0]);

  function changePokemon() {
    const i = pokemonList.findIndex(e => e.name === thePokemon.name);
    const j = (i + 1) % pokemonList.length;
    
    setThePokemon(pokemonList[j]);
  }

  return (
    <div>
      <PokemonCard pokemon={thePokemon} />
      <button onClick={changePokemon}>Switch Pokemon</button>
    </div>
  );
}

App.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string,
  })
};


export default App;
