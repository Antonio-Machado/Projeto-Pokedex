import styled from "styled-components";

export const PokeCardContainer = styled.div`
    height: 35vh;
    width: 250px;
    margin: 10px;
    display: grid;
    grid-template-rows: 90% 10%;
`
export const ImgContainer = styled.div`
    background: grey;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const PokeImg = styled.img`
  height: 60%;
`;