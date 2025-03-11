import "../styles/PokemonCard.css"


function GeneratePokemonCard({pokemon, onClick}){

    return(
        <div onClick={onClick}>
            <img className="pokemonImage" src={pokemon.image} />
            <p>{pokemon.name}</p>
        </div>
    )

}
  

export default GeneratePokemonCard;