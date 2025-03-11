import { useEffect, useState } from 'react'

import './App.css'

import './components/PokemonCard.jsx'
import GeneratePokemonCard from './components/PokemonCard.jsx';

function App() {
  const pokemonArray=["pikachu","squirtle","charmander","onix","bulbasaur","caterpie",
    "rattata","spearow","nidorino","clefairy","jigglypuff","mewtwo"];
  const pokeUrl="https://pokeapi.co/api/v2/pokemon/";  
  const [pokemonInfoArray,setPokemonInfoArray]=useState([]);
  useEffect(()=>{
    async function getPokemon(){
      const promises=pokemonArray.map(async (pokemon)=>{
        const res= await fetch(pokeUrl+pokemon);
        const data=await res.json();
        return{
          name:data.name,
          image:data.sprites.other["official-artwork"].front_default
        }
      }
    );
      const pokemonData= await Promise.all(promises);
      setPokemonInfoArray(pokemonData);
      console.log(pokemonData);
      console.log(pokemonInfoArray);

    }
    getPokemon();

  }, []);

  // console.log(pokemonInfoArray);

  return (
    <>
      <p>Memory Card Game</p>
      <div className='cardHolder'>
        {pokemonInfoArray.map(
          (item,indice)=>{return <GeneratePokemonCard key={indice} pokemon={item} />})}

      </div>
      
    </>
  )
}

export default App
