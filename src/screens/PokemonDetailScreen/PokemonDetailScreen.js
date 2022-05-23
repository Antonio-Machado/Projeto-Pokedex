import React, { useEffect, useContext, useState } from "react";
import {
    TypeAndMovesContainer,
    PokeInfosContainer,
    ImgWrapper,
    ImagesContainer,
    StatsContainer,
    TitleContainer,
    TypesContainer,
    MovesContainer
} from "./styled"
import Header from "../../components/Header/Header"
import { useParams } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalStateContext"



const PokemonDetailScreen = () => {
    const [selectedPokemon, setSelectedPokemon] = useState({}) //**O problema é que o selectedpokemon está dando undefined.
    const name = useParams()
    const pokemons = useContext(GlobalStateContext)
    const apenasPokemons = pokemons.pokemons
    
   
    //assim que a minha tela abrir eu vou procurar la no meu estado global onde está esse meu pokemon e pegar os dados dele 
    useEffect(() => {
        const currentPokemon = apenasPokemons.find((item) => {
            return item.name === name
        })
        setSelectedPokemon(currentPokemon)
        console.log(selectedPokemon) //**está dando undefined

    }, [])
    //guardei o pokemon encontrado com o find no estado
    return (
        <div>
            <Header />
            <PokeInfosContainer>

                <ImagesContainer>
                    <ImgWrapper/>
                    <ImgWrapper  />
                </ImagesContainer>
                <StatsContainer>
                    <TitleContainer>Poderes</TitleContainer>
                    
                </StatsContainer>
                <TypeAndMovesContainer>
                    <TypesContainer>
                    
                    </TypesContainer>
                    <MovesContainer>
                        <TitleContainer>Principais ataques</TitleContainer>
                        
                    </MovesContainer>
                </TypeAndMovesContainer>
            </PokeInfosContainer>
        </div>
    )
}

export default PokemonDetailScreen