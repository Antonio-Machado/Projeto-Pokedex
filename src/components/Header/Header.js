import React from "react";
import { HeaderContainer, RightHeaderButton, LeftHeaderButton } from "./styled";

const Header = () => {
    return (
        <HeaderContainer>
            <LeftHeaderButton>
                Texto do Botão
            </LeftHeaderButton>
            <h1>Título da Tela</h1>
            <RightHeaderButton>
                <button>Ir para pokedex</button>
            </RightHeaderButton>
        </HeaderContainer>
    )
}

export default Header