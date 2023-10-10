import React from "react";

function NavBar({pokemonList, setThePokemon}) {
  return(
    <div>
      {pokemonList.map((pokemon, i) => (
        <button key = {i} onClick={() => setThePokemon(i)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  )
}

export default NavBar;