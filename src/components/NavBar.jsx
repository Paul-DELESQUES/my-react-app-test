import React from "react";

function NavBar({pokemonList, thePokemon, setThePokemon}) {
  const handleClick = (i) => {
    setThePokemon(i)
  };
  
  if (pokemonList[thePokemon].name === 'pikachu'){
    alert('pika pikachu !!!')
  }


  return(
    <div>
      {pokemonList.map((pokemon, i) => (
        <button key = {i} onClick={() => handleClick(i)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  )
}

export default NavBar;