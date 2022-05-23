import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import GlobalStateContext from "../../global/GlobalStateContext";
import { PokeListContainer } from "./styled";




const PokemonsListScreen = () => {
    const {pokemons} = useContext(GlobalStateContext)
    return (
        <div> 
            <Header />
            <PokeListContainer>
                

            {pokemons.map((poke, i) => {
            return <PokemonCard key={poke.name} poke={poke}/>;
          })}

            </PokeListContainer>
        </div>
    )
}

export default PokemonsListScreen