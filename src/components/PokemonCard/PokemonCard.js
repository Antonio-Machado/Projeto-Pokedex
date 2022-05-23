import React from "react";
import { ButtonsContainer, PokeImg } from "./styled";
import { PokeCardContainer , ImgContainer } from "./styled";
import { useNavigate } from "react-router-dom"
import { goToPokemonDetail } from "../../routes/coordinator"

const PokemonCard = (props) => {
    const Navigate = useNavigate()

    return (
        <PokeCardContainer>
            <ImgContainer>  
            <PokeImg
                src={props.poke.sprites.front_default ? props.poke.sprites.front_default : '' }
                alt={props.poke.name}
            />
               
            </ImgContainer>
            <ButtonsContainer>
                <button>
                    Adicionar a Pokedéx
                </button>
                <button onClick={() => goToPokemonDetail(Navigate, props.poke.name)}>
                    Ver detalhes
                </button>
            </ButtonsContainer>
        </PokeCardContainer>
    )
}

export default PokemonCard