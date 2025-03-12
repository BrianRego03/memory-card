import "../styles/PokemonCard.css"


function GeneratePokemonCard({pokemon, shuffler,record}){

    function appCallback(){
        shuffler();
        record(pokemon.name);
    }

    return(
        <div onClick={appCallback}>
            <img className="pokemonImage" src={pokemon.image} />
            <p>{pokemon.name}</p>
        </div>
    )

}
  

export default GeneratePokemonCard;