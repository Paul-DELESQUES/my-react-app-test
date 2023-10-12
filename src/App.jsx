import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PokemonCard from "./components/PokemonCard.jsx";
import NavBar from './components/NavBar.jsx';

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [thePokemon, setThePokemon] = useState[0];

  // function changePokemon(e) {
  //   if (e === "previous" && thePokemon > 0) {
  //     setThePokemon(thePokemon - 1);
  //   } else if (e === "next" && thePokemon < pokemonList.length - 1) {
  //     setThePokemon(thePokemon + 1);
  //   }
  // }

  return (
    <div>
      <PokemonCard pokemon={pokemonList[thePokemon]} />
      <NavBar
         pokemonList={pokemonList}
         setThePokemon={setThePokemon}
      />
    </div>
  );
}

App.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }),
};

export default App;
