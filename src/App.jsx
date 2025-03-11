import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const pokemonArray=["pikachu","squirtle","charmander","onix","bulbasaur","caterpie",
    "rattata","spearow","nidorino","clefairy","jigglypuff","mewtwo"];
  const pokeUrl="https://pokeapi.co/api/v2/pokemon/";  
  const [pokemonInfoArray,setPokemonInfoArray]=useState([]);
  useEffect(()=>{
    async function getPokemon(){
      const promises=pokemonArray.map(pokemon=>fetch(pokeUrl+pokemon).then(res=>res.json()));
      const pokemonData= await Promise.all(promises);
      setPokemonInfoArray(pokemonData);
      console.log(pokemonData[0].name)

    }
    getPokemon();

  }, []);

  // console.log(pokemonInfoArray);

  return (
    <>
      
    </>
  )
}

export default App
