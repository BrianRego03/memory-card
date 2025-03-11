import "../styles/PokemonCard.css"


function GeneratePokemonCard({pokemon}){

    return(
        <div>
            <img className="pokemonImage" src={pokemon.image} />
            <p>{pokemon.name}</p>
        </div>
    )

}
  

export default GeneratePokemonCard;