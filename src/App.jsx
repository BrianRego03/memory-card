import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from "uuid";


import './App.css'

import './components/PokemonCard.jsx'
import GeneratePokemonCard from './components/PokemonCard.jsx';
import ScoreBoard from './components/ScoreBoard.jsx';

function App() {
  const pokemonArray=["pikachu","squirtle","charmander","onix","bulbasaur","caterpie",
    "rattata","spearow","nidorino","clefairy","jigglypuff","mewtwo"];
  const pokeUrl="https://pokeapi.co/api/v2/pokemon/";  
  const [pokemonInfoArray,setPokemonInfoArray]=useState([]);
  const [loading, setLoading] = useState(true);
  const [clickHistory, setClickHistory] = useState([]); 
  const [highScore,setHighScore] = useState(0);
  useEffect(()=>{
    async function getPokemon(){
      try {
        setLoading(true);
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
      console.log(shuffleArray(pokemonInfoArray));
    }
    catch(error){
      console.error("Error fetching Pokémon data:", error);
    }
    finally{
      setLoading(false);
    }
    }
    getPokemon();

  }, []);

  function shuffleArray(inputArray){
    const shuffled = [...inputArray]; 
    for(let i=shuffled.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]];
    }
    return shuffled;
  }

  function shufflepokemon(){
    console.log("hello");
    console.log(pokemonInfoArray);
    setPokemonInfoArray(shuffleArray(pokemonInfoArray));
    
  }

  function recordClick(selectedCard){
    let updatedHistory=[...clickHistory,selectedCard];



    for(let i=updatedHistory.length;i>1;i--){
      if (updatedHistory[updatedHistory.length-1]==updatedHistory[i-2]){
          clearHistory();
          return;
      }
    }
      
    setClickHistory(updatedHistory);
    checkHighScore(updatedHistory);
  
  }

  function checkHighScore(array){
    if(array.length>highScore){
      setHighScore(array.length);
    }

  }

  function clearHistory(){
    setClickHistory([]);
  }

  return (
    <>
      <p>Memory Card Game</p>
      <ScoreBoard score={clickHistory.length} clear={clearHistory} highScore={highScore}/>
      <p>Rules: Don't click on the same pokemon twice!</p>
      {loading&&(<p>Gotta catch em all!!!</p>)}
      <div className='cardHolder'>
        {pokemonInfoArray.map(
          (item,indice)=>{return <GeneratePokemonCard key={indice} pokemon={item} 
          shuffler={shufflepokemon} record={recordClick} />})}

      </div>
      
    </>
  )
}

export default App
