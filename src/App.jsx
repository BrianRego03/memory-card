import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const pokemonArray=["pikachu","squirtle","charmander","onix","bulbasaur","caterpie",
    "rattata","spearow","nidorino","clefairy","jigglypuff","mewtwo"];
  const pokeUrl="https://pokeapi.co/api/v2/pokemon/";  
  const [pokemonInfoArray,setPokemonInfoArray]=useState([]);
  useEffect(()=>{
    async function getPokemon(){
      const promises=pokemonArray.map(pokemon=>fetch(pokeUrl+pokemon)
                                  .then(res=>res.json())
                                      .then(data=>({name:data.name,image:data.sprites.other["official-artwork"].front_default})));
      const pokemonData= await Promise.all(promises);
      setPokemonInfoArray(pokemonData);
      console.log(pokemonData[8]);

    }
    getPokemon();

  }, []);

  // console.log(pokemonInfoArray);

  return (
    <>
      <p>Memory Card Game</p>
      <div>

      </div>
      
    </>
  )
}

export default App
