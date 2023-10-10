import React from "react";

function NavBar({ clickPrevious, clickNext, disabledPrevious, disabledNext }) {
    return (
      <div>
        <button onClick={clickPrevious} disabled={disabledPrevious}>
          Précédent
        </button>
        <button onClick={clickNext} disabled={disabledNext}>
          Suivant
        </button>
      </div>
    );
  }
  
  export default NavBar;